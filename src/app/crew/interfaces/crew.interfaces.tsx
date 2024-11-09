import { StaticImageData } from "next/image";

interface ICrew {
    name: string;
    image: {
        data: StaticImageData;
        width: number;
        height: number;
    };
    role: string;
    bio: string;
}

export type { ICrew };