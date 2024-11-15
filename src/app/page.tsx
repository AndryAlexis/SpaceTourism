'use client';

// Import required components and utilities
import Header from "@/components/header";
import ExploreButton from "@/app/home/components/exploreButton";
import { usePathname } from "next/navigation";
import { getHomeStyles } from "./home/styles/home.styles";

/**
 * Home page component that displays the main landing page content.
 * Provides a responsive layout with hero section and call-to-action.
 * 
 * @returns {JSX.Element} Rendered home page component
 */
const HomePage = (): JSX.Element => {
  // Get current route for navigation highlighting
  const pathname = usePathname();
  
  // Get pre-defined styles for consistent theming
  const styles = getHomeStyles();

  return (
    // Main container with responsive background and layout
    <div className={styles.mainClasses}>
      {/* Navigation header with active page indicator */}
      <Header activePage={pathname} />
      
      {/* Main content area with two-column layout */}
      <main className={styles.articleClasses}>
        {/* Welcome text section with heading hierarchy */}
        <section className={styles.welcomeSectionClasses}>
          <h2 className={styles.subheadingClasses}>
            So, you want to travel to
          </h2>
          
          <h1 className={styles.headingClasses}>
            Space
          </h1>
          
          <p className={styles.descriptionClasses}>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
          </p>
        </section>

        {/* Call-to-action button component */}
        <ExploreButton />
      </main>
    </div>
  );
};

export default HomePage;