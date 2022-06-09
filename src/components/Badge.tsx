import styled from "styled-components";

const StyledBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-lg);
    background: var(--background);
    box-shadow: var(--box-shadow);
    width: fit-content;
    height: fit-content;
`;

export function Badge({ children }: { children: React.ReactNode }) {
    return <StyledBadge>{children}</StyledBadge>;
}
