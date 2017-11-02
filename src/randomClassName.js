/*
	randomClassName - v1.0
	https://github.com/ifamed/randomClassName
	Made by Dmitry Pavlov
*/

export default class RandomClassName {
	constructor(options) {
		if (typeof options.classNames === 'object' && options.classNames.length) {
			this.wrapper = options.wrapper || document.querySelector('body');
			this.classNames = options.classNames || [];
			this.prefix = options.prefix || '';
			this.repeat = options.repeat || false;

			this.init = this.init.bind(this);
			this.getRandomClassName = this.getRandomClassName.bind(this);
			this.isCurrentClassName = this.isCurrentClassName.bind(this);
			this.removeClassNames = this.removeClassNames.bind(this);
			this.getFullClassName = this.getFullClassName.bind(this);
			this.setClassName = this.setClassName.bind(this);
		} else {
			console.error('Classnames is empty.');
		}
	}

	init() {
		let className = this.getRandomClassName();

		if (!this.repeat && this.isCurrentClassName(className)) {
			let prevClassName = className;

			do {
				className = this.getRandomClassName();
			} while (prevClassName === className);
		}
		this.setClassName(className);

		return this.getFullClassName(className);
	}

	getRandomClassName() {
		return this.classNames[Math.floor(Math.random() * this.classNames.length)];
	}

	isCurrentClassName(className) {
		return this.wrapper.classList.contains(this.getFullClassName(className));
	}

	removeClassNames() {
		return this.classNames.forEach((className) => this.wrapper.classList.remove(this.getFullClassName(className)));
	}

	getFullClassName(className) {
		return (this.prefix) ? this.prefix + className : className;
	}

	setClassName(className) {
		this.removeClassNames();
		return this.wrapper.classList.add(this.getFullClassName(className));
	}
}

HTMLElement.prototype.randomClassName = function(options) {
	try {
		if (typeof this !== 'undefined' && this instanceof HTMLElement) {
			options.wrapper = this;
			return new RandomClassName(options).init();
		} else {
			console.error('Wrapper is not HTMLElement.');
		}
	}
	catch (e) {
		console.error('Initialization error.');
	}
};

if (typeof jQuery !== 'undefined') {
	jQuery.fn.randomClassName = function(options) {
		try {
			if (typeof this !== 'undefined' && this[0] instanceof HTMLElement) {
				options.wrapper = this[0];
				return new RandomClassName(options).init();
			} else {
				console.error('Wrapper is not HTMLElement.');
			}
		}
		catch (e) {
			console.error('Initialization error.');
		}
	};
}
