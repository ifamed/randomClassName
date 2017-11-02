import gulp, {watch} from 'gulp';
import browserSync from 'browser-sync';
import size from 'gulp-size'
import del from 'del'
import uglify from 'gulp-uglify'
import runSequence from 'run-sequence'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'

const dirs = {
	src: './src',
	dest: './dest'
};

const syncOptions = {
	server: {
		baseDir: './'
	},
	notify: false,
	ghostMode: false,
	logPrefix: 'randomClassName'
};

gulp.task('clean', () => del(dirs.dest));

gulp.task('js', () =>
	browserify({
		entries: [`${dirs.src}/randomClassName.js`]
	})
		.transform(babelify, {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('randomClassName.js'))
		.pipe(gulp.dest(dirs.dest))
);

gulp.task('js:compress', () =>
	gulp.src(`${dirs.dest}/randomClassName.js`)
		.pipe(uglify({
			mangle: true,
			compress: {
				sequences: true,
				dead_code: true,
				conditionals: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: true
			}
		}))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(size({showFiles: true}))
		.pipe(gulp.dest(dirs.dest))
);

gulp.task('js:watch', ['js', 'browserSync'], (done) => {
	browserSync.reload();
	done();
});

gulp.task('browserSync', () => browserSync(syncOptions));

gulp.task('watch', () => watch([`${dirs.src}/**/*`], (event, cb) => gulp.start('js:watch')));

gulp.task('default', (cb) => runSequence('clean', 'js', 'js:compress', cb));