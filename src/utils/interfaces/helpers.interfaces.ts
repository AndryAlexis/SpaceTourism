import { TBreakpointValues } from "./types/helpers.types";

/**
 * Interface defining the props for the addBreakpointPrefix function
 * Used to add responsive prefixes (like 'tablet:' or 'mobile:') to Tailwind classes
 * 
 * @property prefix - The breakpoint prefix to add (e.g. 'tablet', 'desktop')
 * @property classNames - Space-separated string of CSS class names
 */
interface IAddPrefixes {
    prefix: string;
    classNames: string;
}


/**
 * Interface defining the structure for responsive class variants
 * Allows defining different styles for desktop, tablet and mobile breakpoints
 * 
 * @property desktop - Either an object with state-specific classes or a simple string of classes
 * @property tablet - Classes to apply at tablet breakpoint
 * @property mobile - Classes to apply at mobile breakpoint
 * 
 * Example usage:
 * {
 *   desktop: { base: 'flex gap-4', hover: 'bg-blue-500' },
 *   tablet: 'flex-col gap-2',
 *   mobile: 'gap-1'
 * }
 */
interface IBreakpointPrefixes {
    desktop?: TBreakpointValues
    tablet?: TBreakpointValues;
    mobile?: TBreakpointValues;
}

export type { IAddPrefixes, IBreakpointPrefixes };