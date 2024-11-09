// Import WebP images for optimal performance and quality
import moon from "@/app/public/destination/image-moon.webp";
import mars from "@/app/public/destination/image-mars.webp"; 
import europa from "@/app/public/destination/image-europa.webp";
import titan from "@/app/public/destination/image-titan.webp";

// Import destination interface type
import type { IDestination } from "../interfaces/destination.interfaces";

/**
 * Static array of space destinations with their details.
 * Used as the data source for the destination page.
 * 
 * Each destination object contains:
 * @property {string} title - Name of the destination
 * @property {StaticImageData} images - WebP image of the destination
 * @property {string} description - Detailed description of what visitors can expect
 * @property {string} distance - Distance from Earth (in km or mil. km)
 * @property {string} travel - Estimated travel time to reach destination
 */
const destinations: IDestination[] = [
    {
        title: "Moon", // Earth's only natural satellite
        images: moon,
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        title: "Mars", // The Red Planet
        images: mars,
        description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
        title: "Europa",
        images: europa,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
    },
    {
        title: "Titan",
        images: titan,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
] as const; // Make array readonly to prevent modifications since data is static

// Export destinations array for use in destination page component
export { destinations };
