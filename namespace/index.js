'use strict';
var yeoman = require('yeoman-generator');
var base = require('../plugin-wp-base');

module.exports = base.extend({
	constructor: function () {
		base.apply(this, arguments);

		this.argument('name', {
			required: false,
			type    : String,
			desc    : 'The namespace name'
		});
	},

	initializing: {
		readingYORC: function() {
			this.rc = this.config.getAll() || {};
		},

		readingPackage: function() {
			this.pkg = this.fs.readJSON( this.destinationPath('package.json')) || {};
		},

		settingValues: function() {
			if ( this.name ) {
				this.name = this._.titleize( this.name );
			}

			this.project = this.rc.project;
			this.namespace = this.rc.namespace;
		}
	},

	prompting: function () {
		var done = this.async();

		var prompts = [];
		var project = this.project;
		var rootNamespace = this.namespace;

		if ( ! this.project ) {
			prompts.push({
				type: 'input',
				name: 'project',
				message: 'Project Namespace'
			})
		}

		if ( ! this.namespace ) {
			prompts.push({
				type: 'input',
				name: 'project',
				message: 'Plugin Namespace'
			})
		}

		if ( !this.name ) {
			prompts.push({
				type   : 'input',
				name   : 'name',
				message: function (p) {
					var _project = p.project || project;
					var _rootNamespace = p.rootNamespace || rootNamespace;
					return 'Subnamespace Name (Under ' + _project + '\\' + _rootNamespace + ')';
				}
			});
		}

		if ( prompts.length === 0 ) {
			done();
			return;
		}
		if ( prompts.length > 1 ) {
			this.log( 'Missing some info about the original plugin, help me out?' );
		}

		this.prompt(prompts, function (props) {
			if ( props.project ) {
				this.project = props.project;
			}
			if ( props.namespace ) {
				this.namespace = props.namespace;
			}
			if ( props.name ) {
				this.name = this._.titleize( props.name.split('-').join(' ') );
			}

			done();
		}.bind(this));
	},

	writing: function () {
		this.fs.copyTpl(
			this.templatePath('namespace.php'),
			this.destinationPath('inc/' + this._.slugify( this.name ) + '/namespace.php'),
			this
		);
	}
});
