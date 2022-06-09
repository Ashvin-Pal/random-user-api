import styled from "styled-components";
import { Heading5 } from "./typography";

const StyledFooterContainer = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: center;
    background: var(--color-footer);
`;

const StyledFooter = styled.footer`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    max-width: var(--max-content-width);
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--color-white);
`;

export function Footer() {
    return (
        <StyledFooterContainer>
            <StyledFooter>
                <Heading5 weight="400">User API &copy; 2022</Heading5>
            </StyledFooter>
        </StyledFooterContainer>
    );
}
