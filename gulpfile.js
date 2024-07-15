const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const paths = {
    htmlIndex: {
        src: 'index.html',
        dest: 'build/'
    },
    html: {
        src: 'html/*.html',
        dest: 'build/html/'
    },
    styles: {
        src: 'css/output.css',
        dest: 'build/css/'
    },
    scripts: {
        src: 'js/*.js',
        dest: 'build/js/'
    }
};

// Minify HTML
function html() {
    gulp.src(paths.htmlIndex.src)
      .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true }))
      .pipe(gulp.dest(paths.htmlIndex.dest));

    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true }))
        .pipe(gulp.dest(paths.html.dest));
}

// Minify and concatenate CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(cleanCSS())
        .pipe(concat('output.css'))
        .pipe(gulp.dest(paths.styles.dest));
}

// Minify and concatenate JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

// Watch files for changes
function watchFiles() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(html, styles, scripts));
const watch = gulp.parallel(watchFiles);


// Export tasks
// exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.watch = watch;
exports.default = build;
