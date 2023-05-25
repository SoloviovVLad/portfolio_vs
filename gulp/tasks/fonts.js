import gulp from 'gulp';
import fs from 'fs';
import ttf2woff2 from 'gulp-ttf2woff2';
import config from '../config';

export const fontsBuild = () => (
	gulp.src(`${config.src.fonts}/*.ttf`)
		.pipe(ttf2woff2())
		.pipe(gulp.dest(config.dest.fonts))
);

export const fontsWatch = () => gulp.watch(`${config.src.fonts}/*.ttf`, fontsBuild);

export const fontsStyle = (cb) => {
	const fontsFile = `${config.src.sass}/helpers/fonts.scss`;

	fs.readdir(config.dest.fonts, (err, fontsFiles) => {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				// eslint-disable-next-line no-use-before-define
				fs.writeFile(fontsFile, '', cb);

				let newFileOnly;
				for (let i = 0; i < fontsFiles.length; i = +1) {
					const fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						// eslint-disable-next-line no-use-before-define
						fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log('Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!');
			}
		}
	});

	// return config.src.root(`${config.src.root}`);
	cb();
};
