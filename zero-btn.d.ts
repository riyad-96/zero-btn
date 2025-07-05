export function zeroTooltip(
  element: string | Element | NodeListOf<Element> | HTMLCollection,
  config?: {
    /**
     * Tooltip text to display (e.g., "Click to copy").
     */
    tooltip?: string;
    /**
     * Show tooltip on top instead of bottom. Default: false
     */
    onTop?: boolean;
    /**
     * Offset distance in pixels ('px') from the element. Default: 8
     */
    offset?: number;
  }
): void;

export function zeroRipple(
  element: string | Element | NodeListOf<Element> | HTMLCollection,
  config?: {
    /**
     * Ripple opacity (0 to 1). Default: 0.5
     */
    opacity?: number;
    /**
     * Animation duration in seconds ('s'). Default: 1
     */
    duration?: number;
    /**
     * Ripple color (CSS color). Default: 'white'
     */
    color?: string;
    /**
     * Ripple size in pixels ('px'). If null, auto-scales based on button size. Default: null
     */
    size?: number | null;
  }
): void;

export function zeroCopy(element: string | Element | NodeListOf<Element>, docs: string): void;
