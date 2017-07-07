# Handy-Notification
A handy, simple & useful API to copy anything to clipboard when clicked in a fun way. Screenshots below!!

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage with npm or Yarn](#usage-with-npm-or-yarn)
4. [Usage as a jQuery plugin](#usage-as-a-jquery-plugin)
5. [API options](#api)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Copy/master/screenshots/Snap%202017-07-07%20at%2003.10.41.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Copy/master/screenshots/Snap%202017-07-07%20at%2003.10.29.png)

These screenshots are from [Instagram-clone](https://github.com/yTakkar/Instagram-clone) I created & you can use the code with 5 simple & straight-forward steps!!

# Requirements
1. jQuery

# Usage with npm or Yarn

1. First install the package with `npm` or `Yarn`.
```
npm install handy-copy
```
or
```
yarn add handy-copy
```

2. And here comes the fun part.
```javascript
import Copy from 'handy-copy'
Copy({
    selector: $('.copy_me'),            // selector which will be clicked
    value: "I will be copied!",   // What you want to copy
})
```
You can also make it copy from an attribute.
```html
<a href='#' class='copy_me' data-copy='I will be copied!' >I am a cool link</a>
```
```javascript
import Copy from 'handy-copy'
Copy({ selector: $('.copy_me') })
```

# Usage as a jQuery plugin

1. Copy `handy-copy-plugin.js` file into your project & include it.

```html
<script src='/handy-copy-plugin.js' ></script>
```

2.   Now comes the fun part.

```javascript
$('.copy_me').HandyCopy({ value: "I will be copied!!" })
```
You can also make it copy from an attribute.
```html
<a href='#' class='copy_me' data-copy='I will be copied!' >I am a cool link</a>
```
```javascript
$('.copy_me').HandyCopy()
```

# API
```javascript
Copy(options:Object)
options = {
    selector,
    value
}
```

<dl>
  <dt>selector:</dt>
  <dd>Element which will be clicked to copy. (NOTE: Not availabe in plugin).</dd>

  <dt>value:</dt>
  <dd>What you want it to copy.</dd>
</dl>

**Thanks for reading!!**
