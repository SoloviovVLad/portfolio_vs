import gulp from 'gulp';
import debug from 'gulp-debug';
import changed from 'gulp-changed';
import config from '../config';

const copyImages = () => (
	gulp.src(`${config.src.images}/**/*`)
		.pipe(changed(config.dest.images))
		.pipe(debug({ title: 'images:' }))
		.pipe(gulp.dest(config.dest.images))
);

export const imagesBuild = copyImages;

export const imagesWatch = () => gulp.watch(`${config.src.images}/**/*`, { ignoreInitial: false }, imagesBuild);
