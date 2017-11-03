# randomClassName

A lightweight plugin that changes the class on the block without repeating.

## Usage

Include the plugin.

```html
<script src="path/to/randomClassName.min.js"></script>
```

...or include jQuery and the plugin

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/randomClassName.min.js"></script>
```

Finally, initialize the plugin.

```javascript
document.querySelector('body').randomClassName({
    classNames: ['purple', 'blue', 'pink', 'lightblue'],
    prefix: 'theme--'
});
```

...or jQuery

```javascript
$('body').randomClassName({
    classNames: ['purple', 'blue', 'pink', 'lightblue'],
    prefix: 'theme--'
});
```

## Options

- `classNames`: (type: `Array`, default `[]`) Array of classes to be selected in random order.

- `prefix`: (type: `String`, default `''`) The prefix that will be added before the class.

- `suffix`: (type: `String`, default `''`) The suffix that will be added after the class.

- `repeat`: (type: `Boolean`, default `false`) Whether to repeat the previous class.
