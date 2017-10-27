var fileinclude = require("gulp-file-include"),
    gulp=require("gulp");

gulp.task('fileinclude',function () {
    gulp.src(['include/**/*.html'])
        .pipe(fileinclude({
            prefix:'@@',
            basepath:'@file'
        }))
        .pipe(gulp.dest("./view"))
});