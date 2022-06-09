import styled from "styled-components";
import { Heading4, Text } from "./typography";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const StyledContainer = styled.div`
    grid-area: nav;
    display: flex;
    flex: 1;
    justify-content: center;
    background: var(--color-header);
    color: var(--color-white);
`;

const StyledNavbar = styled.nav`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-content-width);
    padding: var(--spacing-sm) var(--spacing-md);
`;

export function Navbar() {
    const [theme, setTheme] = useState("light");
    const nextTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <StyledContainer>
            <StyledNavbar role="navigation">
                <div>
                    <Heading4 weight="700">RandomUser.me</Heading4>
                </div>
                <Button handleClick={() => setTheme(nextTheme)}>
                    <Text>Change to {nextTheme} mode</Text>
                </Button>
            </StyledNavbar>
        </StyledContainer>
    );
}
