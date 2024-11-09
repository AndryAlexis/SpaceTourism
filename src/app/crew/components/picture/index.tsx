import Image from "next/image";
import type { IPicture } from "./interfaces/picture.interfaces";
import { pictureClasses } from "./styles/picture.styles";

const Picture = ({ images, title, width, height }: IPicture): JSX.Element => {
    return (
        <figure className={pictureClasses.figure}>
          <Image
            alt={title}
            height={height}
            width={width}
            src={images}
            className={pictureClasses.image}
          />
        </figure>
    )
}

export default Picture;
