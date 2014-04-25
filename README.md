hover\_popover
================

Extension of Bootstrap 3.1.1 popover.js. It allows for popovers to be hovered over without disappearing. Hover popover works very similiar to the standard popover and takes all of the same options.

Installation
-----

Add to your Gemfile:

```ruby
gem 'hover_popover'
```

Usage
-----

With default options:
```js
$('#myPopover').hoverPopover()
```

with custom options:
```js
$('#myPopover').hoverPopover({title: 'Hello', content: 'This is a awesome popover', placement: 'bottom'})
```

You can also set options in data attributes
```html
<a href="#" id="myPopover" data-title="Hello" data-content="Hovering">Hover Popover</a>
```

Docs
-----

Default options:
```js
html: false,
container: 'body',
trigger: 'manual',
content: '',
title: '',
placement: 'top',
delay: { show: 0, hide: 400 }
```

See Bootstrap popover documentation for more options.


Note: trigger needs to be set to manual or not overriden in order to function appropriately.
