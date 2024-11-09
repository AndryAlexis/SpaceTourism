// Required imports for Next.js metadata and global styles
import type { Metadata } from 'next'
import './globals.css'

// Metadata configuration for the application
// This defines basic metadata like title that will be used across all pages
export const metadata: Metadata = {
  title: 'Space Tourism', // Title shown in browser tab
}

/**
 * Interface defining props for the root layout component
 * @property children - React nodes to be rendered inside the layout
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component that wraps all pages in the application
 * This is the top-level layout that Next.js uses to wrap every page
 * 
 * Features:
 * - Sets HTML language to English for accessibility
 * - Applies consistent base styling to body element
 * - Provides a clean slate for child pages with zero padding
 * - Uses slate text color for better contrast
 * - Implements React Fragment syntax for cleaner component structure
 * 
 * @param {RootLayoutProps} props - Component props containing children elements
 * @param {React.ReactNode} props.children - Child components to render within layout
 * @returns {JSX.Element} The root layout structure wrapping all pages
 */
const RootLayout = ({ children } : RootLayoutProps) => <>
  <html lang="en">
    {/* Body wrapper with base styling applied through Tailwind classes */}
    <body className='p-0 text-slate-300'>
      {children} {/* Render page-specific content */}
    </body>
  </html>
</>

// Export layout as default for Next.js to use as root layout
export default RootLayout;