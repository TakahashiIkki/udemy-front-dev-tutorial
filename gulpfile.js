const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// SassとCssの保存先を指定
gulp.task('sass:compile', () => {
    return gulp.src('./section/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('section'));
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('sass:watch', () => {
    gulp.watch('./section/**/*.scss', gulp.task('sass:compile'));
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', gulp.task('sass:watch'));