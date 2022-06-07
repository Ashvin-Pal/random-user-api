import styled from "styled-components";
import { RandomUserResponse, User } from "../../types";
import { UserListItem } from "./UserListItem";

const StyledUserList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
    grid-auto-rows: auto;
    grid-gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    max-width: var(--max-content-width);
    margin: 0 auto;
`;

export function UserList({ users }: { users: RandomUserResponse }) {
    return (
        <StyledUserList>
            {users.results.map((user) => (
                <UserListItem key={user.id.value} user={user} />
            ))}
        </StyledUserList>
    );
}
