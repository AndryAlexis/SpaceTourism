import Commander from "@/app/public/crew/image-douglas-hurley.webp";
import MissionSpecialist from "@/app/public/crew/image-mark-shuttleworth.webp";
import Pilot from "@/app/public/crew/image-victor-glover.webp";
import FlightEngineer from "@/app/public/crew/image-anousheh-ansari.webp";

import type { ICrew } from "../interfaces/crew.interfaces";

const crew: ICrew[] = [
    {
        name: "Douglas Hurley",
        image: {
            data: Commander,
            width: 514,
            height: 700
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."

    },
    {
        name: "Mark Shuttleworth",
        image: {
            data: MissionSpecialist,
            width: 433,
            height: 640
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        image: {
            data: Pilot,
            width: 549,
            height: 645
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        image: {
            data: FlightEngineer,
            width: 575,
            height: 602
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

export { crew };
