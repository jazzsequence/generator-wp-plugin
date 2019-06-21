'use strict';
const Plugin  = require( '../hm-plugin-base' ),
      chalk   = require( 'chalk' ),
      yosay   = require( 'yosay' ),
      fs      = require( 'fs' ),
      request = require( 'request' ),
      async   = require( 'async' ),
      slugify = require( 'slugify' );

module.exports = class extends Plugin {
  initializing() {
    // set the initial value
    this.currentVersionWP = '5.2.2';

    // get the latest WP version
    this.getLatestWPVersion();
  }

  prompting() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log( yosay(
      `Welcome to the neat ${ chalk.red( 'Human Made' ) } WP plugin generator!`
    ) );

    var prompts = [{
      type   : 'input',
      name   : 'client',
      message: 'Client Name',
      default: 'Client'
    }, {
      type   : 'input',
      name   : 'name',
      message: 'Name',
      default: function( p ) {
        return p.client + ' Plugin Name'
      }.bind(this)
    }, {
      type   : 'input',
      name   : 'homepage',
      message: 'Homepage',
      default: 'https://humanmade.com'
    }, {
      type   : 'input',
      name   : 'description',
      message: 'Description',
      default: 'A radical new plugin for WordPress!'
    }, {
      type   : 'input',
      name   : 'version',
      message: 'Version',
      default: '1.0.0'
    }, {
      type   : 'input',
      name   : 'author',
      message: 'Author',
      default: 'Human Made',
      save   : true
    }, {
      type   : 'input',
      name   : 'authorurl',
      message: 'Author URL',
      default: 'https://humanmade.com',
      save   : true
    }, {
      type   : 'input',
      name   : 'slug',
      message: 'Plugin Slug',
      default: function( p ) {
        return slugify( p.name, {
          lower: true
        } );
      }.bind(this)
    }, {
      type   : 'input',
      name   : 'project',
      message: 'Project Namespace',
      default: function( p ) {
        return this._namespaceify( p.client );
      }.bind(this)
    }, {
      type   : 'input',
      name   : 'namespace',
      message: 'Plugin Namespace',
      default: function( p ) {
        return this._namespaceify( p.name, p.client );
      }.bind(this)
    }, {
      type   : 'list',
      name   : 'autoloader',
      message: 'Use Autoloader',
      default: 'existing',
      choices: [
        {
          name: 'Existing (HM\\Autoloader\\register_class_path)',
          value: 'existing',
          short: 'Existing'
        }, {
          name: 'Basic',
          value: 'basic'
        }, {
          name: 'None',
          value: 'none'
        }
      ]
    }];

    this.prompt(prompts, function (props) {
      // Sanitize inputs
      this.client      = this._.clean( props.client );
      this.name        = this._.clean( props.name );
      this.homepage    = this._.clean( props.homepage );
      this.description = this._.clean( props.description );
      this.descriptionEscaped = this._escapeDoubleQuotes( this.description );
      this.version     = this._.clean( props.version );
      this.author      = this._.clean( props.author );
      this.authorurl   = this._.clean( props.authorurl );
      this.slug        = this._.slugify( props.slug );
      this.project     = this._wpClassify( props.project );
      this.namespace   = this._namespaceify( props.namespace );
      this.year        = new Date().getFullYear();
      this.autoloader  = props.autoloader;
      this.prefix      = this._prefixify( props.project + '_' + props.namespace );

      done();
    }.bind(this));
  }

  writing() {
    // Folder
    var done = this.async();
    fs.lstat( this.destinationPath( this.slug ), function(err, stats) {
      if (!err && stats.isDirectory()) {
        this.log( chalk.red( 'A plugin already exists with this folder name, exiting...' ) );
        process.exit();
      }

      this.destinationRoot( this.slug );
      done();
    }.bind(this));

    this.fs.copyTpl(
      this.templatePath('bower.json'),
      this.destinationPath('/bower.json'),
      this
    );

    // Plugin files
    this.fs.copyTpl(
      this.templatePath('plugin.php'),
      this.destinationPath('/plugin.php'),
      this
    );

    this.fs.copyTpl(
      this.templatePath('inc/namespace.php'),
      this.destinationPath('inc/namespace.php'),
      this
    );

    // Readme
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('/README.md'),
      this
    );

    // Save config
    this.config.set( 'client', this.client );
    this.config.set( 'name', this.name );
    this.config.set( 'homepage', this.homepage );
    this.config.set( 'description', this.description );
    this.config.set( 'version', this.version );
    this.config.set( 'author', this.author );
    this.config.set( 'authorurl', this.authorurl );
    this.config.set( 'slug', this.slug );
    this.config.set( 'project', this.project );
    this.config.set( 'namespace', this.namespace );
    this.config.set( 'year', this.year );

    this.config.set( 'currentVersionWP', this.currentVersionWP );

    this.config.save();
  }

  getLatestWPVersion() {
    request.get({
      url: 'https://api.wordpress.org/core/version-check/1.7/',
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
      // check for status code
      if ( ! err && ( 200 === res.statusCode ) ) {
        // loop through results to find only the "upgrade" version
        for ( var i in data.offers ) {
          if ( 'upgrade' === data.offers[i].response ) {
            this.currentVersionWP = data.offers[i].current;
          }
        }
      }
    });
  }
}
