# WordPress Plugin Generator
[![Build Status](https://secure.travis-ci.org/jazzsequence/generator-hm-plugin.png?branch=develop)](https://travis-ci.org/jazzsequence/generator-hm-plugin)

> [Yeoman](http://yeoman.io) WordPress plugin generator based on Human Made's coding standards.

![Screenshot](https://www.evernote.com/shard/s19/sh/a2493408-5412-49c7-9a4e-11724da40f81/dfd5ffd9b640f7b8/res/80e63bbb-0e20-4427-b331-66fca186be4d/yo-hm-plugin.gif?resizeSmall&width=832)

Check out an [example of a generated plugin](https://github.com/WebDevStudios/generator-plugin-wp-example).

## Contributors
The following humans contributed to this awesome generator:

[jazzsequence](https://github.com/jazzsequence), [CamdenSegal](https://github.com/CamdenSegal), [jtsternberg](https://github.com/jtsternberg), [binarygary](https://github.com/binarygary), [bradp](https://github.com/bradp), [JeffreyNaval](https://github.com/JeffreyNaval), [gregrickaby](https://github.com/gregrickaby), [DevNIX](https://github.com/DevNIX), [JPry](https://github.com/JPry)

## Overview
This is a fork of the [WDS Plugin Generator](https://github.com/WebDevStudios/generator-plugin-wp). 

The main difference between the HM and WDS generator is the structure of the generated plugins. The HM generator assumes plugins to be built on PHP7+ using namespaces throughout rather than singleton classes.

## Getting Started

Pre-requisites: You'll need [node](https://nodejs.org/download/) which comes
with [npm](https://github.com/npm/npm#super-easy-install).

If you don't have [Yeoman](http://yeoman.io/) installed:

```bash
npm install -g yo
```

To install `generator-hm-plugin` from npm, run:

```bash
npm install -g generator-hm-plugin
```

To use `generator-hm-plugin`, `cd` to your WordPress plugins folder and:

```bash
yo hm-plugin
```
You'll be prompted with steps for creating your plugin.

## (Planned) Sub-generators

Once your nifty new plugin has been generated, `cd` into your new plugin's
directory. While in the plugin directory, you can run additional commands
called sub-generators to automatically generate files to enhance your plugin.

* `yo hm-plugin:include <include-name>` [Basic Include](include/README.md)
* `yo hm-plugin:cpt <cpt-name>` [Custom Post Type](cpt/README.md)
* `yo hm-plugin:taxonomy <taxonomy-name>` [Taxonomy](taxonomy/README.md)
* `yo hm-plugin:options <options-name>` [Option Page](options/README.md)
* `yo hm-plugin:widget <widget-name>` [Widget](widget/README.md)
* `yo hm-plugin:endpoint <class-name>` [WP-API Endpoint](endpoint/README.md)
* `yo hm-plugin:js` [Javascript](js/README.md)
* `yo hm-plugin:css` [Styles](css/README.md)
