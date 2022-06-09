import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { shimmerEffectBlurDataUrl } from "../utils";

const StyledAnimatedImageAvatarWrapper = styled.li`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled(motion.button)<{ ishighlighted: "true" | "false" }>`
    all: unset;
    border: none;
    height: 5rem;
    width: 5rem;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    border: ${({ ishighlighted }) =>
        ishighlighted === "true" ? "4px solid var(--color-black)" : "none"};
`;

interface AnimatedImageAvatar {
    ishighlighted: boolean;
    imageSrc: string;
    imageAltText: string;
    handleClick: (id: string) => void;
    id: string;
}

export function AnimatedImageAvatar({
    handleClick,
    id,
    ishighlighted,
    imageSrc,
    imageAltText,
}: AnimatedImageAvatar) {
    return (
        <StyledAnimatedImageAvatarWrapper role="listitem" onClick={() => handleClick(id)}>
            <StyledImage
                whileHover={{
                    scale: 1.2,
                    borderRadius: "20%",
                }}
                whileTap={{ scale: 0.9 }}
                ishighlighted={ishighlighted ? "true" : "false"}
            >
                <Image
                    src={imageSrc}
                    objectFit="cover"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${shimmerEffectBlurDataUrl(
                        "5rem",
                        "5rem"
                    )}`}
                    alt={imageAltText}
                />
            </StyledImage>
        </StyledAnimatedImageAvatarWrapper>
    );
}
