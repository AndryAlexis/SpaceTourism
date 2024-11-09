import Link from "next/link";
import { getExploreButtonStyles } from "./styles/exploreButton.styles";

/**
 * ExploreButton component that renders a styled call-to-action button.
 * 
 * Features:
 * - Circular button with hover effects
 * - Responsive sizing for different screen sizes
 * - Centered text with "Explore" label
 * - Container div for proper spacing and alignment
 * 
 * @returns {JSX.Element} A styled button wrapped in a container div
 */
const ExploreButton = () : JSX.Element => {
    // Get pre-configured Tailwind classes for styling
    const { containerClasses, linkClasses } = getExploreButtonStyles();

    return (
        // Container div for proper button positioning and spacing
        <div className={containerClasses}>
            {/* Main CTA button with hover effects */}
            <Link href="/destination" className={linkClasses}>
                Explore
            </Link>
        </div>
    );
};

export default ExploreButton;
