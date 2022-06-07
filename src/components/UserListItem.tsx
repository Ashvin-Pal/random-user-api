import Image from "next/image";
import styled from "styled-components";
import type { User } from "../../types";
import { Heading4, Heading5 } from "./typography";

const StyledUserListItem = styled.li`
    display: grid;
    grid-template-areas: "
    image 
    content";
    grid-template-columns: 1fr 2fr;
    overflow: hidden;
    border-radius: var(--border-radius-md);
    background-color: var(--color-white);
`;

const StyledImage = styled.div`
    grid-area: image;
    height: 10rem;
    position: relative;
`;

const StyledContent = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--spacing-md) var(--spacing-md);
`;

export function UserListItem({
    user: {
        picture: { large },
        name: { first = "", last = "" },
        location: { country },
    },
}: {
    user: User;
}) {
    return (
        <StyledUserListItem>
            <StyledImage>
                <Image src={large} objectFit="cover" layout="fill" alt={first} />
            </StyledImage>
            <StyledContent>
                <Heading5 weight="600" color="--color-black">
                    {first} {last}
                </Heading5>
                <Heading5 color="--color-black">{country}</Heading5>
            </StyledContent>
        </StyledUserListItem>
    );
}
