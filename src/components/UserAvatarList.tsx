import styled from "styled-components";
import type { User } from "../../types";
import { AnimatedImageAvatar } from "./AnimatedImageAvatar";
import { Heading3 } from "./typography";

interface UserAvatarListProps {
    users: User[];
    currentUser: User;
    handleClick: (userId: string) => void;
}

const StyledUserContainer = styled.section`
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    background: var(--background);
    padding: var(--spacing-lg) var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--box-shadow);
`;

const StyledUserList = styled.ul`
    all: unset;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    grid-gap: var(--spacing-sm);
    width: 100%;
`;

export function UserAvatarList({ currentUser, users, handleClick }: UserAvatarListProps) {
    if (users.length === 0 || !currentUser) {
        return (
            <StyledUserContainer role="listbox">
                <Heading3>No users</Heading3>
            </StyledUserContainer>
        );
    }

    const {
        id: { value: currentUserId },
    } = currentUser;

    return (
        <StyledUserContainer role="listbox">
            <StyledUserList>
                {users.map(({ id: { value: userId }, picture: { medium }, name: { first } }) => (
                    <AnimatedImageAvatar
                        key={userId}
                        handleClick={handleClick}
                        id={userId}
                        ishighlighted={userId === currentUserId}
                        imageSrc={medium}
                        imageAltText={first}
                    />
                ))}
            </StyledUserList>
        </StyledUserContainer>
    );
}
