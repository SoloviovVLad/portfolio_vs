const srcPath = 'src';
const destPath = 'build';

const config = {
	src: {
		root: srcPath,
		sass: `${srcPath}/scss`,
		js: `${srcPath}/js`,
		fonts: `${srcPath}/fonts`,
		images: `${srcPath}/assets/images`,
		iconsSprite: `${srcPath}/assets/images/icons/sprite-icons`,
		pug: `${srcPath}/pug`,
	},

	dest: {
		root: destPath,
		html: destPath,
		css: `${destPath}/css`,
		js: `${destPath}/js`,
		fonts: `${destPath}/fonts`,
		images: `${destPath}/images`,
	},

	setEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
