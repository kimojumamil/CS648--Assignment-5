var {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
};
exports.default = () =>{
    watch('src/*.scss', css);
}

//exports.default = css;