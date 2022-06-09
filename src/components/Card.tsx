import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { shimmerEffectBlurDataUrl } from "../utils";
import { Badge } from "./Badge";
import { Heading2, Heading5, Heading6 } from "./typography";

const StyledCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

const StyledCard = styled(motion.section)`
    display: block;
    max-width: 42rem;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background: var(--background);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--box-shadow);
`;

const StyledImageContainer = styled.div`
    position: absolute;
    top: -4rem;
    left: 4rem;
`;

const StyledImage = styled.div`
    position: relative;
    border-radius: 50%;
    border: 6px solid var(--color-white);
    overflow: hidden;
    margin: 0;
    width: 8rem;
    height: 8rem;
    box-shadow: var(--box-shadow);
`;

const StyledInnerContainer = styled.div`
    display: grid;
    grid-template-areas: "empty metadata metadata" "body body body" "footer footer footer";
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: 5rem 2fr 1fr;
    padding: 0 var(--spacing-lg);
    height: 100%;
`;

const StyledMetadata = styled.div`
    grid-area: metadata;
    display: flex;
    justify-content: flex-end;
    column-gap: var(--spacing-md);
    padding: var(--spacing-md) 0;
`;

const StyledBody = styled.div`
    grid-area: body;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
`;

const StyledFooter = styled.div`
    grid-area: footer;
    align-items: center;
`;

export interface UserDetailsCardProps {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    footerText: string;
    primaryMetadata?: string;
    secondaryMetadata?: string;
}

export function Card({
    id,
    title,
    subtitle,
    footerText,
    imageSrc,
    primaryMetadata,
    secondaryMetadata,
}: UserDetailsCardProps) {
    return (
        <StyledCardWrapper>
            <AnimatePresence exitBeforeEnter>
                <StyledCard
                    role="section"
                    key={id}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.2 }}
                >
                    <StyledImageContainer>
                        <StyledImage>
                            <Image
                                src={imageSrc}
                                objectFit="cover"
                                layout="fill"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${shimmerEffectBlurDataUrl(
                                    "8rem",
                                    "8rem"
                                )}`}
                                alt={title}
                            />
                        </StyledImage>
                    </StyledImageContainer>

                    <StyledInnerContainer>
                        <StyledMetadata>
                            {primaryMetadata && (
                                <Badge>
                                    <Heading6 weight="600">{primaryMetadata}</Heading6>
                                </Badge>
                            )}
                            {secondaryMetadata && (
                                <Badge>
                                    <Heading6 weight="600">{secondaryMetadata}</Heading6>
                                </Badge>
                            )}
                        </StyledMetadata>

                        <StyledBody>
                            <Heading2 weight="600">{title}</Heading2>
                            <Heading5 weight="600">{subtitle}</Heading5>
                        </StyledBody>
                        <StyledFooter>
                            <Heading5 weight="600">{footerText}</Heading5>
                        </StyledFooter>
                    </StyledInnerContainer>
                </StyledCard>
            </AnimatePresence>
        </StyledCardWrapper>
    );
}
