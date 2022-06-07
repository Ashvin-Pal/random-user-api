import styled from "styled-components";

interface HeadingProps {
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    color?: "--color-white" | "--color-black";
}

const DEFAULT = {
    WEIGHT: "400",
    COLOR: "--color-white",
};

export const Heading1 = styled.h1<HeadingProps>`
    font-size: 2.5rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const Heading2 = styled.h2<HeadingProps>`
    font-size: 2rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Heading3 = styled.h3<HeadingProps>`
    font-size: 1.5rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

export const Heading4 = styled.h4<HeadingProps>`
    font-size: 1.25rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Heading5 = styled.h5<HeadingProps>`
    font-size: 1rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;
