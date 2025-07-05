# zero-btn
[![npm version](https://badge.fury.io/js/zero-btn.svg)](https://badge.fury.io/js/zero-btn) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### A lightweight package for buttons

Current feature

- Tooltip

##### To install this package run:

```bash
npm install zero-btn
```

#### Usage

```javascript
import { zeroTooltip } from 'zero-btn';

// Initialize on elements matching CSS selector
zeroTooltip('.btn-with-tooltip', {
  tooltip: 'Default tooltip text'
});
```

#### API:

```javascript
zeroTooltip(selectors | element | NodeList, {
  tooltip: string,
  onTop: boolean,
  offset: number,
});
```
***
This was my first npm package. I will try to implement some other usefull features in this package soon.