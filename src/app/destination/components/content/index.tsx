import { contentStyles } from "./styles/content.styles";
import { destinations } from "../../data/destination.data";
import type { IActiveDestination, IContent } from "./interfaces/content.interfaces";
import TabItem from "./components/tabItem";

/**
 * Content component that displays destination information and navigation.
 * Renders a tabbed interface for selecting destinations and displays detailed
 * information about the currently selected destination.
 *
 * @param activeDestination - Currently selected destination object
 * @param setActiveDestination - Callback function to update the selected destination
 * @returns JSX.Element - Rendered content section with destination details
 */
const Content = ({
  activeDestination,
  setActiveDestination
}: IActiveDestination & IContent): JSX.Element => {
  // Handler for updating the selected destination when user clicks a tab
  const handleDestinationChange = (destination: typeof destinations[number]) => {
    setActiveDestination(destination);
  };

  return (
    // Main content section containing destination details
    <section className={contentStyles.section} aria-label="Destination Information">
      {/* Navigation tabs for switching between destinations */}
      <nav aria-label="Destination Selection">
        <ul className={contentStyles.destinationList} role="tablist">
          {destinations.map((destination) => (
            <TabItem
              key={destination.title}
              onClick={() => handleDestinationChange(destination)}
              active={activeDestination.title === destination.title}
              ariaSelected={activeDestination.title === destination.title}
              role="tab"
            >
              {destination.title}
            </TabItem>
          ))}
        </ul>
      </nav>

      {/* Selected destination title */}
      <h2 className={contentStyles.destinationTitle}>
        {activeDestination.title}
      </h2>

      {/* Destination details panel */}
      <div role="tabpanel" aria-labelledby={`tab-${activeDestination.title.toLowerCase()}`}>
        {/* Description of the selected destination */}
        <p className={contentStyles.description}>
          {activeDestination.description}
        </p>

        {/* Visual separator between description and metrics */}
        <hr className={contentStyles.divider} aria-hidden="true" />

        {/* Key metrics about the destination */}
        <dl className={contentStyles.infoList}>
          {/* Distance information */}
          <div className={contentStyles.infoItem}>
            <dt>Avg. distance</dt>
            <dd className={contentStyles.infoValue}>
              {activeDestination.distance}
            </dd>
          </div>
          {/* Travel time information */}
          <div className={contentStyles.infoItem}>
            <dt>Est. travel time</dt>
            <dd className={contentStyles.infoValue}>
              {activeDestination.travel}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Content;
