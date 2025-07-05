//! Stylesheets
function tooltipStyles() {
  return `:root {
  --tooltip-bg-color: hsl(0, 0%, 10%);
  --tooltip-text-color: hsl(0, 0%, 90%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --tooltip-bg-color: hsl(0, 0%, 95%);
    --tooltip-text-color: hsl(0, 0%, 10%);
  }
}

.zero-tooltip,
.zero-tooltip-top {
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;

  width: fit-content;
  max-width: 120px;
  background-color: var(--tooltip-bg-color);
  color: var(--tooltip-text-color);
  padding-block: 0.325rem;
  padding-inline: 0.625rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px hsla(235, 0%, 0%, 0.25);

  opacity: 0;

  transition: opacity 200ms;
  transition-delay: 100ms;
  pointer-events: none;
}

.zero-tooltip.show,
.zero-tooltip-top.show {
  opacity: 1;
}

.zero-tooltip::before,
.zero-tooltip-top::before {
  content: '';
  position: absolute;
  left: 50%;
  z-index: 1;
  width: 0;
  height: 0;
  --border-size: 7px;

  border-right: var(--border-size) solid transparent;
  border-left: var(--border-size) solid transparent;
}

.zero-tooltip::before {
  top: 0;
  transform: translate(-50%, -100%);
  border-top: var(--border-size) solid transparent;
  border-bottom: var(--border-size) solid var(--tooltip-bg-color);
}

.zero-tooltip-top::before {
  top: 100%;
  transform: translate(-50%, 0);
  border-top: var(--border-size) solid var(--tooltip-bg-color);
  border-bottom: var(--border-size) solid transparent;
}`;
}

function rippleStyles() {
  return `.zero-ripple {
  position: relative;
  overflow: hidden;
}

.zero-ripples {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: var(--ripples-color);
  z-index: 5;
  border-radius: 50%;
  opacity: 1;
  pointer-events: none;
}

.zero-ripples.expand {
  animation: expand-ripple var(--ripples-duration) linear forwards;
}

@keyframes expand-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: var(--ripples-opacity);
  }
  100% {
    width: var(--ripples-size);
    height: var(--ripples-size);
    opacity: 0;
  }
}`;
}

//! Helper functions
function getButtons(element) {
  if (typeof element === 'string') {
    return document.querySelectorAll(element);
  }
  if (element instanceof Element) {
    return [element];
  }
  if (element instanceof NodeList || element instanceof HTMLCollection) {
    return element;
  }
}

// Add style tags
let tooltipStyleAdded = false;
let rippleStyleAdded = false;

function addStyleTag(styles) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.appendChild(style);
}

function addStyleTagToHtmlHead(type, styles) {
  if (type === 'tooltip' && !tooltipStyleAdded) {
    addStyleTag(styles);
    tooltipStyleAdded = true;
  }
  if (type === 'ripple' && !rippleStyleAdded) {
    addStyleTag(styles);
    rippleStyleAdded = true;
  }
}

//! Tooltip
let tooltipDiv;
let tooltipListenerAdded = false;

export function zeroTooltip(element, config = {}) {
  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

  addStyleTagToHtmlHead('tooltip', tooltipStyles());

  config = Object.assign(
    {
      tooltip: 'Tool tip',
      onTop: false,
      offset: 10,
    },
    config
  );

  const { tooltip, onTop, offset } = config;

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('No elements found for zeroTooltip');
    return;
  }
  allButtons.forEach((btn) => {
    btn.setAttribute('data-zero-tooltip', tooltip);
    btn.setAttribute('data-zero-top', onTop);
    btn.setAttribute('data-zero-offset', offset);
  });

  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    document.body.appendChild(tooltipDiv);
  }

  if (!tooltipListenerAdded) {
    document.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('[data-zero-tooltip]');
      if (btn) {
        const tooltipText = btn.dataset.zeroTooltip;
        const onTopState = btn.dataset.zeroTop;
        const offsetSize = Number(btn.dataset.zeroOffset);

        tooltipDiv.classList = onTopState === 'true' ? 'zero-tooltip-top' : 'zero-tooltip';
        tooltipDiv.textContent = tooltipText;

        const { width, height, left, top } = btn.getBoundingClientRect();
        const posX = width / 2 + left - tooltipDiv.offsetWidth / 2;
        const posY = onTop ? top - tooltipDiv.offsetHeight - offsetSize : top + height + offsetSize;
        tooltipDiv.style.transform = `translate(${posX}px, ${posY}px)`;
        tooltipDiv.classList.add('show');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const btn = e.target.closest('[data-zero-tooltip]');
      if (btn) {
        tooltipDiv.classList.remove('show');
      }
    });

    tooltipListenerAdded = true;
  }
}

//! Ripple effect
let rippleListenerAdded = false;

export function zeroRipple(element, config = {}) {
  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

  addStyleTagToHtmlHead('ripple', rippleStyles());

  config = Object.assign(
    {
      opacity: 0.5,
      duration: 1,
      color: 'white',
      size: null,
    },
    config
  );

  const { opacity, color, duration, size } = config;

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('No elements found for zeroRipple');
    return;
  }
  allButtons.forEach((btn) => {
    btn.classList.add('zero-ripple');
    btn.setAttribute('data-zero-ripple', 'true');
  });

  if (!rippleListenerAdded) {
    document.addEventListener('mousedown', (e) => {
      const btn = e.target.closest('[data-zero-ripple]');
      if (btn) {
        const span = document.createElement('span');
        span.className = 'zero-ripples';
        btn.appendChild(span);

        const { left, top, width } = btn.getBoundingClientRect();
        span.style.left = e.clientX - left + 'px';
        span.style.top = e.clientY - top + 'px';

        btn.style.setProperty('--ripples-opacity', opacity);
        btn.style.setProperty('--ripples-duration', duration + 's');
        btn.style.setProperty('--ripples-size', `${size || width * 2}px`);
        btn.style.setProperty('--ripples-color', color);

        span.classList.add('expand');

        span.addEventListener('animationend', () => span.remove());
      }
    });

    rippleListenerAdded = true;
  }
}

//! Copy function
const clipboardList = [];
let copyListenerAdded = false;

function legecyCopy(docs) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = docs;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch (error) {
    alert('Couldn’t copy automatically. Please copy manually.');
    console.error(error);
  }
}

async function copyText(docs) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(docs);
    } catch (error) {
      legecyCopy(docs);
      console.error(error);
    }
  } else {
    legecyCopy(docs);
  }
}

export function zeroCopy(element, docs) {
  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

  if(!docs) {
    console.error('Copy parameter cannot be empty');
    return;
  }

  if(typeof docs !== 'string') {
    console.error('Doc should be in string format')
    return;
  }

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('No elements found for zeroCopy');
    return;
  }

  const randomId = crypto.randomUUID();
  const id = randomId.replaceAll('-', '');

  allButtons.forEach((btn) => {
    btn.classList.add('zero-copy');
    btn.setAttribute('data-zero-copy', id);

    clipboardList.push({
      id,
      docs,
    });
  });

  if (!copyListenerAdded) {
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('[data-zero-copy]');
      if (copyBtn) {
        const btnId = copyBtn.dataset.zeroCopy;
        const copyEl = clipboardList.find((el) => btnId === el.id);
        if (copyEl) {
          copyText(copyEl.docs);
        }
      }
    });

    copyListenerAdded = true;
  }
}
