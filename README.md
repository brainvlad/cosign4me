# Gulp HTML SCSS Project

This project uses Gulp to automate tasks for building HTML, SCSS, images, fonts, files, and JavaScript.

## Installation

To get started, install all necessary dependencies:

```sh
npm install

Scripts
Development
To run development tasks, use the command:

gulp

This command performs the following tasks:

clean:dev: Cleans the development directory.
html:dev: Processes HTML files.
sass:dev: Compiles SCSS to CSS.
images:dev: Optimizes images.
fonts:dev: Copies fonts.
files:dev: Copies files.
js:dev: Processes JavaScript files.
server:dev: Starts a development server with livereload support.
watch:dev: Watches for file changes and automatically runs the corresponding tasks.
Production
To build the project for production, use the command:

gulp docs

This command performs the following tasks:

clean:dev: Cleans the development directory.
html:docs: Processes HTML files for production.
sass:docs: Compiles and minifies SCSS to CSS for production.
images:docs: Optimizes images for production.
fonts:docs: Copies fonts for production.
files:docs: Copies files for production.
js:docs: Processes and minifies JavaScript files for production.
Project Structure
src/: Source files of the project.
html/: HTML files.
scss/: SCSS files.
images/: Images.
fonts/: Fonts.
files/: Miscellaneous files.
js/: JavaScript files.
dist/: Build directory.
Dependencies
The project uses the following dependencies:

@babel/core
@babel/preset-env
css-loader
gulp
gulp-autoprefixer
gulp-babel
gulp-clean
gulp-copy
gulp-csso
gulp-file-include
gulp-group-css-media-queries
gulp-htmlclean
gulp-imagemin
gulp-notify
gulp-plumber
gulp-sass
gulp-sass-glob
gulp-server-livereload
gulp-sourcemaps
sass
style-loader
webpack-stream
normalize.scss