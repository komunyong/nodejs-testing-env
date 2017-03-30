'use strict';

import gulp from 'gulp';
import _ from 'lodash';
const json_editor = require('gulp-json-editor');
const externalModules = require('./externalModules.json');

function getExternalModules(deps) {
  return _.pick(deps, externalModules);
}

gulp.task('archive', (res) => {
  return gulp.src('package.json')
    .pipe(json_editor((json) => {
      delete json.devDependencies;
      json.dependencies = getExternalModules(json.dependencies);
      json.scripts = {
        "start": 'node app.bundle.js'
      };
      return json;
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:deps', ['archive']);
