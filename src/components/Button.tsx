import styled from "styled-components";

const StyledButton = styled.button`
    all: unset;
    cursor: pointer;
    background: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    outline: none;
    border-radius: var(--border-radius-md);
`;

export function Button({
    handleClick,
    children,
}: {
    handleClick: () => void;
    children: React.ReactNode;
}) {
    return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
