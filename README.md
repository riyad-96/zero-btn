# zero-btn

[![npm](https://img.shields.io/npm/v/zero-btn)](https://www.npmjs.com/package/zero-btn)

## A lightweight tool for buttons

Current features
- Copy on click
- Tooltip on mouseover
- Ripple effect on mousedown

***

##### Quick usage overview

| [NPM](#npm-usage) | [CDN](#use-via-cdn) |
| -------- | -------- |
| `zeroCopy()` | `zeroBtn.zeroCopy()` |
| `zeroTooltip()` | `zeroBtn.zeroTooltip()` |
| `zeroRipple()` | `zeroBtn.zeroRipple()` |


##### To install this package run:

```bash
npm install zero-btn
```

#### NPM usage

```javascript
import { zeroCopy, zeroTooltip, zeroRipple } from 'zero-btn';
```

> Use a modern build tool like **vite**, **webpack**, **Parcel**

##### zeroCopy API:

```javascript
zeroCopy(selector | element, doc);
```
> Instantly adds click-to-copy functionality to buttons, reliably and with fallback.

##### zeroTooltip API:

```javascript
zeroTooltip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```
> Attach minimal tooltips to buttons for clean, helpful hover hints.

##### zeroRipple API:

```javascript
zeroRipple(selectors | element | NodeList, {
  opacity: number;
  duration: number;
  color: string;
  size: number | null;
});
```
> Adds a lightweight, clean ripple effect to your buttons on click.

---

### Use via cdn

```html
<script src="https://cdn.jsdelivr.net/npm/zero-btn@1.1.4/zero-btn.min.js"></script>
```
> Attach this script tag in the html head tag and you are good to go.

#### Usage

##### zeroCopy API:

```javascript
zeroBtn.zeroCopy(selectors | element, doc);
```

##### zeroTooltip API:

```javascript
zeroBtn.zeroToolTip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```

##### zeroRipple API:

```javascript
zeroBtn.zeroRipple(selectors | element | NodeList, {
  opacity: number;
  duration: number;
  color: string;
  size: number | null;
});
```
