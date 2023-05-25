import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';

const iconsSprite = () => (
	gulp.src(`${config.src.iconsSprite}/**/*.svg`)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprite/sprite-icons.svg',
				},
			},
		}))
		.pipe(gulp.dest(config.dest.images))
);

export const spritesBuild = iconsSprite;

export const spritesWatch = () => {
	gulp.watch(`${config.src.iconsSprite}/**/*.svg`, spritesBuild);
};
