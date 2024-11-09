import { StaticImageData } from "next/image";

interface IPicture {
    images: StaticImageData;
    title: string;
    width: number;
    height: number;
}

export type { IPicture };