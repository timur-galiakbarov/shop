var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        dir: 'build/',
        html: 'build/templates/',
        css: 'build/css/',
        js: 'build/js/',
        bower: 'build/bower_components/',
        fonts: 'build/fonts/'
    },
    bitrix: {//Пути для выплевывания в битрикс
        dir: './../lk/',
        html: './../lk/templates/',
        css: './../lk/css/',
        js: './../lk/js/',
        bower: './../lk/bower_components/',
        fonts: './../lk/fonts/'
    },
    src: { //Пути откуда брать исходники
        dir: 'src/',
        html: 'src/**/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        css: 'src/**/*.css', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        fonts: 'src/fonts/**/*.*',
        bower: 'bower_components/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/**/*.css',
        bower: 'src/**/*.*'
    },
    clean: './build'
};

module.exports = path;