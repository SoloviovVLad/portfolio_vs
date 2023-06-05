const canvas = () => {
	class Animation {
		constructor() {
			this.cnv = null;
			this.ctx = null;
			this.size = {
				w: 0,
				h: 0,
				cx: 0,
				cy: 0,
			};
		}

		init() {
			// this.createCanvas();
		}

		createCanvas() {
			this.cnv = document.createElement('canvas');
			this.cts = this.cnv.getContext('2d');
			this.setCanvasSize();
			const hero = document.querySelector('.js-hero-in');
			window.addEventListener('resize', () => this.setCanvasSize());
			if (hero) {
				hero.appendChild(this.cnv);
			}
		}

		setCanvasSize() {
			this.size.w = this.cnv.width = window.innerWidth;
			this.size.h = this.cnv.height = window.innerHeight;
			this.size.cx = this.size.w / 2;
			this.size.cy = this.size.h / 2;
		}
	}

	new Animation().init();
};

export default canvas;
