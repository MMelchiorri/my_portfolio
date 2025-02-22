import { ReactElement } from "react";
import Button from "../atoms/Button";
import Image, { StaticImageData } from "next/image";
import hero from "../../styles/hero.module.css";

interface HeroSectionProps {
    text: string;
    subText: string;
    image: StaticImageData;
    textButton: string;
}

export function HeroSection({ text, subText, image, textButton }: HeroSectionProps): ReactElement {
    return (
        <div className={hero.hero_section}>
            <Image src={image} alt="hero image" className={hero.hero_image} />
            <div className={hero.hero_content}>
                <h1 className={hero.hero_title}>{text}</h1>
                <p className={hero.hero_subText}>{subText}</p>
                <Button onClick={() => console.log('clicked')}>
                    {textButton}
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
