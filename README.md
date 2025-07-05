# zero-btn

### A lightweight tool for buttons

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

#### zeroTooltip API:

```javascript
zeroTooltip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```

#### zeroRipple API:

```javascript
zeroRipple(string | Element | NodeListOf<Element> | HTMLCollection, {
    opacity: number;
    duration: number;
    color: string;
    size: number | null;
  }
)
```