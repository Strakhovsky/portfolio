var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');
    

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
    return gulp.src([ //Нужно взять все необходимые библиотеки
        'app/libs/jquery/dist/jquery.min.js', //Здесь мы взяли Джейквери
        'app/libs/bootstrap/dist/js/bootstrap.js' //здесь мы берём Bootstrap
    ]) 
    .pipe(concat('libs.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('browser-sync', function() {
    browserSync({ // Выполняем параметры сервера
        server: { // Определяем параметры сервера
            baseDir: 'app' //Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function(){
    return del.sync('dist');
});

gulp.task('img', function(){
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
})

gulp.task('build',['clean', 'img', 'sass', 'scripts'], function() {
    var buildCss = gulp.src([ //Переносим css стили в продакшен
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
    .pipe(gulp.dest('dist/css'))

var buildFonts = gulp.src('app/fonts/**/*') //Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('clear', function () {
	return cache.clearAll();
})

gulp.task('default', ['watch']);