/**
 * Type defining the possible state names for Tailwind CSS pseudo-classes and states
 * Includes common interactive states like hover, focus, active etc.
 */
type StateNames =
    // Interactive states
    | 'hover'
    | 'focus'
    | 'active'
    | 'visited'
    | 'disabled'
    | 'enabled'
    | 'focus-within'
    | 'focus-visible'
    
    // Form states
    | 'checked'
    | 'default'
    | 'required'
    | 'optional'
    | 'valid'
    | 'invalid'
    | 'in-range'
    | 'out-of-range'
    | 'placeholder-shown'
    | 'autofill'
    | 'empty'
    | 'indeterminate'
    | 'read-only'
    
    // Pseudo elements
    | 'before'
    | 'after'
    
    // Structural
    | 'first'
    | 'last'
    | 'only'
    | 'odd'
    | 'even'
    | 'first-of-type'
    | 'last-of-type'
    | 'only-of-type'
    | 'target'
    | 'open';

/**
 * Type defining the structure for desktop-specific Tailwind classes
 * @property base - Base classes that are always applied
 * @property [state] - Optional classes applied for different states/pseudo-classes
 */
type TBreakpointStates = {
    base?: string;
} & {
    [K in StateNames]?: string;
};

type TBreakpointValues = {[key in keyof TBreakpointStates]: string} | string

export type { TBreakpointValues };
