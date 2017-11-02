/*
	randomClassName - v1.0
  https://github.com/ifamed/randomClassName
  Made by Dmitry Pavlov
*/

export default class RandomClassName {
	constructor(options) {
		this.wrapper = options.wrapper || document.querySelector('body');
		this.classNames = options.classNames || [];
		this.prefix = options.prefix || '';
		this.repeat = options.repeat || false;

		this.init = this.init.bind(this);
		this.getRandomClassName = this.getRandomClassName.bind(this);
		this.isCurrentClassName = this.isCurrentClassName.bind(this);
		this.removeClassNames = this.removeClassNames.bind(this);
		this.setClassName = this.setClassName.bind(this);
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

		return (this.prefix) ? this.prefix + className : className;
	}

	getRandomClassName() {
		return this.classNames[Math.floor(Math.random() * this.classNames.length)];
	}

	isCurrentClassName(className) {
		return (this.prefix) ? this.wrapper.classList.contains(this.prefix + className) : this.wrapper.classList.contains(className);
	}

	removeClassNames() {
		return this.classNames.forEach((className) => (this.prefix) ? this.wrapper.classList.remove(this.prefix + className) : this.wrapper.classList.remove(className))
	}

	setClassName(className) {
		this.removeClassNames();
		return (this.prefix) ? this.wrapper.classList.add(this.prefix + className) : this.wrapper.classList.add(className);
	}
}

HTMLElement.prototype.randomClassName = function(options) {
	options.wrapper = this;
	return new RandomClassName(options).init();
};

if (typeof jQuery !== 'undefined') {
	jQuery.fn.randomClassName = function(options) {
		options.wrapper = jQuery(this).get(0);
		return new RandomClassName(options).init();
	};
}
