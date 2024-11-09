"use client";

// Import necessary components and hooks
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import Content from "./components/content";
import Picture from "./components/picture";
import { crew } from "./data/crew.data";
import { useState } from "react";
import { crewStyles } from "./styles/crew.styles";

/**
 * CrewPage Component
 * Displays information about the space crew members with an interactive interface
 * allowing users to switch between different crew members
 */
const CrewPage = () => {
  // Track current route for navigation highlighting in header
  const pathname = usePathname();

  // State to keep track of which crew member is currently being displayed
  const [currentCrew, setCurrentCrew] = useState(0);

  return (
    // Main container with background styling
    <div className={crewStyles.container}>
      {/* Navigation header showing current page */}
      <Header activePage={pathname} />
      
      <main className={crewStyles.main}>
        {/* Page title with numbered heading */}
        <h1 className={crewStyles.heading}>
          <span className={crewStyles.headingNumber}>02</span>
          <span>Meet your crew</span>
        </h1>

        {/* Content wrapper containing crew info and image */}
        <div className={crewStyles.content}>
            {/* Crew member details and navigation dots */}
            <Content 
              crew={crew[currentCrew]} 
              setCurrentCrew={setCurrentCrew}
            />
            {/* Crew member image display */}
            <Picture 
              images={crew[currentCrew].image.data} 
              title={crew[currentCrew].name} 
              width={crew[currentCrew].image.width}
              height={crew[currentCrew].image.height}
            />
        </div>
      </main>
    </div>
  );
};

export default CrewPage;