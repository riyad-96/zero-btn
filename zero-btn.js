import './zero-btn.css';

let tooltipDiv;
let listenerAdded = false;

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

export function zeroTooltip(element, config = {}) {
  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

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
  allButtons.forEach((btn) => {
    btn.setAttribute('data-zero-tooltip', tooltip);
    btn.setAttribute('data-zero-top', onTop);
    btn.setAttribute('data-zero-offset', offset);
  });

  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    document.body.appendChild(tooltipDiv);
  }

  if (!listenerAdded) {
    document.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('[data-zero-tooltip]');
      if (btn) {
        const tooltipText = btn.dataset.zeroTooltip;
        const onTopState = btn.dataset.zeroTop;
        const offsetSize = Number(btn.dataset.zeroOffset);

        tooltipDiv.classList = onTopState === 'true' ? 'buttons-tooltip-top' : 'buttons-tooltip';
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

    listenerAdded = true;
  }
}
