let projectFolder = 'dist'; //Имя папки в которой собирается наш проект
let sourceFolder = '#src'; //Имя папки в которой исходный код

let path = {
    build: {
        html: projectFolder + '/',
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        img: projectFolder + '/img/',
        fonts: projectFolder + '/fonts/',
    },
    src: {
        html: [sourceFolder + '/*.html', '!' + sourceFolder + '/_*.html'],
        css: sourceFolder + '/scss/style.scss',
        js: sourceFolder + '/js/script.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,ico,webp,gif}',
        fonts: sourceFolder + '/fonts/**/*',
    },
    watch: {
        html: sourceFolder + '/**/*.html',
        css: sourceFolder + '/scss/**/*.scss',
        js: sourceFolder + '/js/**/*.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,ico,webp,gif}',
    },
    clean: './' + projectFolder + '/', // Путь к папке проекта
}
let {src, dest} = require('gulp');
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let scss = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');

function browsersync() {
    browserSync.init({
      server:  {
        baseDir: './' + projectFolder + '/'
      },
      port: 3000,
      notify: false
    })
  }

function html() {
  return src(path.src.html)
      .pipe(fileinclude())
      .pipe(dest(path.build.html))
      .pipe(browserSync.stream())

}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
  

}
function fonts() {
return src(path.src.fonts)
    .pipe(dest(path.build.fonts))

}

function img() {
return src(path.src.img)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
}

gulp.task('imgs', function() {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});


function css() {
  return src(path.src.css)
      .pipe(
          scss({
              outputStyle: 'expanded'
          })
      )
      .pipe(autoprefixer())
      .pipe(dest(path.build.css))
      .pipe(browserSync.stream())
}

function watchFiles() {
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.html], html);
}




let build = gulp.series(img, css, html, fonts, js);
let watch = gulp.parallel(build, watchFiles, browsersync);


exports.css = css;
exports.js = js;
exports.fonts = fonts;
exports.img = img;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
