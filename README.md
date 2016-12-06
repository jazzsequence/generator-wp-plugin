# Human Made Plugin Generator
[![Build Status](https://secure.travis-ci.org/jazzsequence/generator-hm-plugin.png?branch=master)](https://travis-ci.org/jazzsequence/generator-hm-plugin)

> [Yeoman](http://yeoman.io) generator for WordPress plugins.

Check out an [example of a generated plugin](https://github.com/WebDevStudios/generator-plugin-wp-example).

## Contributors
The following humans contributed to this awesome generator:

[jazzsequence](https://github.com/jazzsequence), [CamdenSegal](https://github.com/CamdenSegal), [jtsternberg](https://github.com/jtsternberg), [binarygary](https://github.com/binarygary), [bradp](https://github.com/bradp), [JeffreyNaval](https://github.com/JeffreyNaval), [gregrickaby](https://github.com/gregrickaby), [DevNIX](https://github.com/DevNIX), [JPry](https://github.com/JPry)

## Overview
This is a fork of the [WDS Plugin Generator](https://github.com/WebDevStudios/generator-plugin-wp). Much of this readme is still copy/pasta so the `npm` commands won't work...yet.

The main difference between the HM and WDS generator is the structure of the generated plugins. The HM generator assumes plugins to be built on PHP7+ using namespaces throughout rather than singleton classes.

## Getting Started

Pre-requisites: You'll need [node](https://nodejs.org/download/) which comes
with [npm](https://github.com/npm/npm#super-easy-install).

If you don't have [Yeoman](http://yeoman.io/) installed:

```bash
npm install -g yo
```

To install generator-plugin-wp from npm, run:

```bash
npm install -g generator-plugin-wp
```

To use generator-plugin-wp, `cd` to your WordPress plugins folder and:

```bash
yo plugin-wp
```
You'll be prompted with steps for creating your plugin.

## (Planned) Sub-generators

Once your nifty new plugin has been generated, `cd` into your new plugin's
directory. While in the plugin directory, you can run additional commands
called sub-generators to automatically generate files to enhance your plugin.

* `yo plugin-wp:include <include-name>` [Basic Include](include/README.md)
* `yo plugin-wp:cpt <cpt-name>` [Custom Post Type](cpt/README.md)
* `yo plugin-wp:taxonomy <taxonomy-name>` [Taxonomy](taxonomy/README.md)
* `yo plugin-wp:options <options-name>` [Option Page](options/README.md)
* `yo plugin-wp:widget <widget-name>` [Widget](widget/README.md)
* `yo plugin-wp:endpoint <class-name>` [WP-API Endpoint](endpoint/README.md)
* `yo plugin-wp:js` [Javascript](js/README.md)
* `yo plugin-wp:css` [Styles](css/README.md)

For the names of the include, cpt, options, and widget subgenerators remember
that the plugin prefix will be added to the class name so no need to include the
original plugin name there! Think of it as the file name for each instead.
