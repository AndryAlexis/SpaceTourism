/**
 * Interface defining the props for the Main component
 * @property children - React nodes to be rendered inside the main content area
 */
interface MainProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Main component that serves as the primary content container
 * Features:
 * - Full height container
 * - Flex layout with gap between children
 * - Horizontally centered with max width
 * - Consistent padding on sides
 * - Vertically centered content
 * 
 * @param children - Content to be rendered inside the main container
 * @returns JSX.Element - The rendered main section
 */
const Main = ({children, className = ''}: MainProps): JSX.Element => {
    return (
        <main className={`mainContainer ${className}`}>
            {children}
        </main>
    )
}

export default Main;