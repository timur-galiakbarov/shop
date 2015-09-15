var path = {
    build: { //��� �� ������ ���� ���������� ������� ����� ������ �����
        dir: 'build/',
        html: 'build/templates/',
        css: 'build/css/',
        js: 'build/js/',
        bower: 'build/bower_components/',
        fonts: 'build/fonts/'
    },
    bitrix: {//���� ��� ������������ � �������
        dir: './../lk/',
        html: './../lk/templates/',
        css: './../lk/css/',
        js: './../lk/js/',
        bower: './../lk/bower_components/',
        fonts: './../lk/fonts/'
    },
    src: { //���� ������ ����� ���������
        dir: 'src/',
        html: 'src/**/*.html', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        css: 'src/**/*.css', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        js: 'src/js/main.js',//� ������ � �������� ��� ����������� ������ main �����
        fonts: 'src/fonts/**/*.*',
        bower: 'bower_components/**/*.*'
    },
    watch: { //��� �� ������, �� ���������� ����� ������ �� ����� ���������
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/**/*.css',
        bower: 'src/**/*.*'
    },
    clean: './build'
};

module.exports = path;