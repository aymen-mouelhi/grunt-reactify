# grunt-reactify

> Grunt plugin to browserify modular react components into seperate files

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-reactify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-reactify');
```

## The "reactify" task

### Overview
In your project's Gruntfile, add a section named `reactify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  reactify: {
    target_folder: source_files
  },
})
```

### Usage Examples

In this example, the `tmp` folder will get all the JSX files browserified from the source file. If there is a JSX file in the path `test/components/App.jsx`, the plugin will generate a browserified file in the destination `tmp/components/App.js`.

```js
grunt.initConfig({
  reactify: {
      'tmp': 'test/**/*.jsx'
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Aymen Mouelhi. Licensed under the MIT license.
