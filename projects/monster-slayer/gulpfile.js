const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sassSrc = ['node_modules/foundation-sites/scss'];
const sassPath = './sass/*.scss';

gulp.task('sass', () => {
  return gulp.src(sassPath)
    .pipe(sass({
      includePaths: sassSrc,
      outputStyle: 'compressed',
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', ['sass'], () => gulp.watch(sassPath, ['sass']) );
