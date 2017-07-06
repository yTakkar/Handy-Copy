# Handy-Notification
A handy, simple & useful API to copy anything to clipboard when clicked in a fun way!!

# Quick links
1. [Requirements](#requirements)
2. [Usage with npm or Yarn](#usage)
3. [API](#api)

These screenshots are from [Instagram-clone](https://github.com/yTakkar/Instagram-clone) I created & you can use the code with 5 simple & straight-forward steps!!

# Requirements
1. jQuery

# Usage

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
    selector: $('.btn'),            // selector which will be clicked
    value: "Hello, how are you?",   // What you want to copy
})
```

You can also make it copy from an attribute.
```html
<a href='#' class='copy_me' data-copy='Copy this text!!' >I am a cool link</a>
```
```javascript
    import Copy from 'handy-copy'
    Copy({ selector: $('.copy_me') })
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
  <dt>selector</dt>
  <dd>Element which will be clicked to copy.</dd>

  <dt>value</dt>
  <dd>What you want it to copy.</dd>
</dl>

**Thanks for reading!!**
