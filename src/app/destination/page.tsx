'use client'; // Mark as client component for client-side interactivity

// Import required components and utilities
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { destinationStyles } from "./styles/destination.styles";
import Picture from './components/picture'
import Content from "./components/content";
import { destinations } from "./data/destination.data";
import type { IDestination } from "./interfaces/destination.interfaces";
import { useState } from "react";

/**
 * Destination page component that displays different space destinations.
 * 
 * Features:
 * - Interactive destination selection menu for switching between locations
 * - High quality responsive images for each destination
 * - Detailed information display including:
 *   - Description text about each location
 *   - Distance measurements from Earth
 *   - Estimated travel time to reach destination
 * - Fully responsive layout optimized for desktop, tablet and mobile
 * - Consistent navigation header with active page highlighting
 * - Semantic HTML structure with proper accessibility
 */
export default function DestinationPage() {
  // Get current route path to highlight active nav item
  const pathname = usePathname();
  
  // State to track and update the currently selected destination
  // Initializes with first destination from destinations array
  const [activeDestination, setActiveDestination] = useState<IDestination>(destinations[0]);

  return (
    // Main container with background styling
    <div className={destinationStyles.container}>
      {/* Navigation header with active page indicator */}
      <Header activePage={pathname} />
      
      {/* Main content wrapper with responsive spacing */}
      <main className={destinationStyles.main}>
        {/* Page heading with numbered prefix for visual hierarchy */}
        <h1 className={destinationStyles.heading}>
          <span className={destinationStyles.headingNumber}>01</span>
          <span>Pick your destination</span>
        </h1>

        {/* Two column grid layout for destination content */}
        <div className={destinationStyles.article}>
          {/* Left column: Destination image with alt text */}
          <Picture 
            images={activeDestination.images} 
            title={activeDestination.title} 
          />

          {/* Right column: Interactive menu and destination details */}
          <Content 
            activeDestination={activeDestination}
            setActiveDestination={setActiveDestination}
          />
        </div>
      </main>
    </div>
  );
}