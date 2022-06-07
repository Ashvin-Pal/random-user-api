import styled from "styled-components";
import { motion } from "framer-motion";
import { Heading4 } from "./typography";

const StyledContainer = styled.div`
    grid-area: nav;
    display: flex;
    flex: 1;
    justify-content: center;
    background: var(--color-black);
    color: var(--color-white);
`;

const StyledNavbar = styled.nav`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-content-width);
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--color-white);
`;

const StyledMotionDiv = styled(motion.div)`
    background: white;
    border-radius: var(--border-radius-lg);
    width: 1.5rem;
    height: 1.5rem;
`;

const Animation = () => {
    return (
        <StyledMotionDiv
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
        />
    );
};

export function Navbar() {
    return (
        <StyledContainer>
            <StyledNavbar>
                <div>
                    <Heading4 weight="700">RandomUser.me</Heading4>
                </div>
                <Animation />
            </StyledNavbar>
        </StyledContainer>
    );
}
