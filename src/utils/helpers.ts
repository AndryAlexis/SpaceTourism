import { IAddPrefixes, IBreakpointPrefixes } from "./interfaces/helpers.interfaces";

/**
 * Checks if a value is a non-null object
 */
const isObject = (value: any): boolean => {
    return typeof value === 'object' && value !== null;
};

/**
 * Adds a prefix (like 'hover:', 'tablet:') to each class in a space-separated string
 * 
 * @example
 * addPrefix({prefix: 'tablet', classNames: 'flex col'}) 
 * // Returns: 'tablet:flex tablet:col'
 */
const addPrefix = ({prefix, classNames}: IAddPrefixes): string => {
    const classes = classNames.split(' ');
    const prefixedClasses = classes.map(className => `${prefix}:${className}`);
    
    return prefixedClasses.join(' ');
};

/**
 * Processes desktop state classes into responsive classes
 * - Base classes are added directly
 * - State classes get appropriate prefixes (hover:, active:, etc)
 */
const processStates = (desktopStates: object): string[] => {
    const responsiveClasses: string[] = [];
    const stateEntries = Object.entries(desktopStates);

    stateEntries.forEach(([state, classes]) => {
        if (state === 'base') {
            responsiveClasses.push(classes);
        } else {
            responsiveClasses.push(addPrefix({
                prefix: state, 
                classNames: classes
            }));
        }
    });

    return responsiveClasses;
};

/**
 * Combines desktop, tablet and mobile classes with appropriate prefixes
 * 
 * @example
 * myClasses({
 *   desktop: {
 *     base: 'flex gap-4',
 *     hover: 'bg-blue-500'
 *   },
 *   tablet: 'flex-col gap-2',
 *   mobile: 'gap-1'
 * })
 * // Returns: 'flex gap-4 hover:bg-blue-500 tablet:flex-col tablet:gap-2 mobile:gap-1'
 */
const myClasses = (classes: IBreakpointPrefixes): string => {
    const responsiveClasses: string[] = [];
    const breakpoints = Object.entries(classes);

    breakpoints.forEach(([breakpoint, value]) => {
        if (isObject(value)) {
            // Handle desktop object with state-specific classes
            const stateClasses = processStates(value as object);
            responsiveClasses.push(...stateClasses);
        } else {
            if (breakpoint != 'desktop') {
                // Handle simple string of classes for tablet/mobile
                responsiveClasses.push(addPrefix({
                    prefix: breakpoint, 
                    classNames: value as string
                }));
            } else {
                responsiveClasses.push(value as string);
            }
        }
    });
    return responsiveClasses.join(' ');
};

export default myClasses;
