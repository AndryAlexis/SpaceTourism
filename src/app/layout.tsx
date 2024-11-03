// Required imports for Next.js metadata and global styles
import type { Metadata } from 'next'
import './globals.css'
// Metadata configuration for the application
export const metadata: Metadata = {
  title: 'Next.js',
}


/**
 * Interface defining props for the root layout component
 * @property children - React nodes to be rendered inside the layout
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component that wraps all pages
 * Features:
 * - Sets HTML language to English
 * - Applies base styling to body:
 *   - No padding
 *   - Border-box sizing
 *   - Light slate text color
 * 
 * @param children - Content to be rendered inside the layout
 * @returns JSX.Element - The rendered layout wrapper
 */
const RootLayout = ({ children } : RootLayoutProps) => <>
  <html lang="en">
    <body className='p-0 text-slate-300'>
      {children}
    </body>
  </html>
</>

export default RootLayout;