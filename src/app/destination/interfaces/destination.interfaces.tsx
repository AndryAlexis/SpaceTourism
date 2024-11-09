import { StaticImageData } from "next/image";

/**
 * Interface defining the structure of a space destination
 * Used to type destination data throughout the application
 */
interface IDestination {
  /** Name/title of the destination (e.g. "Moon", "Mars") */
  title: string;
  /** Static image data for the destination's picture */
  images: StaticImageData;
  /** Detailed description text about the destination */
  description: string;
  /** Distance from Earth to the destination */
  distance: string;
  /** Estimated travel time to reach the destination */
  travel: string;
}

export type { IDestination };