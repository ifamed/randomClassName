# randomClassName

A lightweight plugin that changes the class on the block without repeating.

## Usage

Include the plugin.

```html
<script src="path/to/randomClassName.js"></script>
```

...or include jQuery and the plugin

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/randomClassName.js"></script>
```

Finally, initialize the plugin.

```javascript
document.querySelector('body').randomClassName({
    themes: ['purple', 'blue', 'pink', 'lightblue'],
    prefix: 'theme--'
});
```

...or jQuery

```javascript
$('body').randomClassName({
    themes: ['purple', 'blue', 'pink', 'lightblue'],
    prefix: 'theme--'
});
```

## Options

- `classNames`: (default `[]`) Array of classes to be selected in random order.

- `prefix`: (default `''`) The prefix that will be added before the class.

- `repeat`: (default `false`) Whether to repeat the previous class.
