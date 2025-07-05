# zero-btn

[![npm](https://img.shields.io/npm/v/zero-btn)](https://www.npmjs.com/package/zero-btn)

## A lightweight tool for buttons

Current feature

- Tooltip
- Ripple effect on click

##### To install this package run:

```bash
npm install zero-btn
```

> Use a modern build tool like **vite**, **webpack**, **Parcel**

#### Usage

```javascript
import { zeroTooltip, zeroRipple } from 'zero-btn';
```

##### zeroTooltip API:

```javascript
zeroTooltip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```

##### zeroRipple API:

```javascript
zeroRipple(selectors | element | NodeList, {
  opacity: number;
  duration: number;
  color: string;
  size: number | null;
});
```

---

### or use via cdn

```html
<script src="https://cdn.jsdelivr.net/npm/zero-btn@1.1.4/zero-btn.min.js"></script>
```

#### Usage

##### zeroTooltip:

```javascript
zeroBtn.zeroToolTip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```

##### zeroRipple:

```javascript
zeroBtn.zeroRipple(selectors | element | NodeList, {
  opacity: number;
  duration: number;
  color: string;
  size: number | null;
});
```
