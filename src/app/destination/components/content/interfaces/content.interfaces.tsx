import { IDestination } from "@/app/destination/interfaces/destination.interfaces";

interface IActiveDestination {
    activeDestination: IDestination;
}

interface IContent {
    setActiveDestination: (destination: IDestination) => void;
}

export type { IActiveDestination, IContent };