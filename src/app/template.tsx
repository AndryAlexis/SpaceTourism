// Import the Header component used in the template layout
import Header from "@/components/header";

/**
 * Interface defining the props for the Template component
 * @property children - React nodes to be rendered inside the template
 */
interface TemplateProps {
  children: React.ReactNode;
}

/**
 * Template component that provides the base layout structure
 * Features:
 * - Sets full-screen background image using Tailwind classes
 * - Background image covers entire container with bg-cover
 * - Includes global Header component at the top
 * - Wraps and renders child components below header
 * 
 * The background image is configured in the Tailwind config
 * as 'bg-desktop-image' for the desktop viewport
 * 
 * @param children - Content to be rendered inside the template
 * @returns JSX.Element - The rendered template wrapper with header and children
 */
const Template = ({ children }: TemplateProps) => {
  return <>
    {/* Main wrapper div with background image */}
    <div className="bg-desktop-image bg-cover">
        {/* Global header component */}
        <Header />
        {/* Render child components passed to template */}
        {children}
    </div>
</>
}

// Export Template as default for use in page layouts
export default Template;