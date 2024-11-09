import { ICrew } from "@/app/crew/interfaces/crew.interfaces";

interface ContentProps {
    crew: ICrew;
    setCurrentCrew: (index: number) => void;
}

export default ContentProps;