import styled from "styled-components";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    grid-template-areas:
        "nav"
        "main"
        "footer";
    grid-template-rows: var(--navbar-height) 1fr var(--footer-height);
    grid-template-columns: 1fr;
`;

const Main = styled.main`
    grid-area: main;
    display: flex;
    flex: 1;
    flex-direction: column;
    background: var(--color-secondary);
`;

export function GridGeneral({ children }: { children: React.ReactNode }) {
    return (
        <GridLayout>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </GridLayout>
    );
}
