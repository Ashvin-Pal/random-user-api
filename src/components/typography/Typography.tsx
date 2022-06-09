import styled from "styled-components";

interface HeadingProps {
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    color?: string;
}

const DEFAULT = {
    WEIGHT: "400",
    COLOR: "--color-secondary",
};

export const Heading1 = styled.h1<HeadingProps>`
    font-size: 3rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Heading2 = styled.h2<HeadingProps>`
    font-size: 2.5rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Heading3 = styled.h3<HeadingProps>`
    font-size: 2rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Heading4 = styled.h4<HeadingProps>`
    font-size: 1.5rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Heading5 = styled.h5<HeadingProps>`
    font-size: 1.25rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Heading6 = styled.h5<HeadingProps>`
    font-size: 1rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;

export const Text = styled.p<HeadingProps>`
    font-size: 1rem;
    font-weight: ${({ weight = DEFAULT.WEIGHT }) => weight};
    line-height: 1.2;
    color: ${({ color = DEFAULT.COLOR }) => `var(${color})`};
`;
