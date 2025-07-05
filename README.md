# zero-btn

### A lightweight tool for buttons

Current feature

- Tooltip

##### To install this package run:

```bash
npm install zero-btn
```

> Use a modern build tool like **vite**, **webpack**, **Parcel**

Direct use in the browser without a build tool will not work because of the import syntax for CSS.

#### Usage

```javascript
import { zeroTooltip } from 'zero-btn';
```

#### API:

```javascript
zeroTooltip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```

---

This was my first npm package. I will try to implement some other usefull features in this package soon.
