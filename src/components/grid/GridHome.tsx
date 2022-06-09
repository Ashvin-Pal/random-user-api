import styled from "styled-components";

const GridLayout = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    margin: 0 auto;
    max-width: var(--max-content-width);
    padding: var(--spacing-sm) var(--spacing-md);
    grid-template-areas:
        "topContent"
        "usersList"
        "contentSpacer"
        "userCard"
        "bottomspacer";
    grid-template-rows: 1fr auto 1fr auto 1fr;
    grid-template-columns: 1fr;
`;

const TopContent = styled.div`
    grid-area: topContent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const UsersList = styled.div`
    grid-area: usersList;
`;
const ContentSpacer = styled.div`
    grid-area: contentSpacer;
`;
const UsersCard = styled.div`
    grid-area: userCard;
`;
const Bottomspacer = styled.div`
    grid-area: bottomspacer;
`;

export function GridHome({
    topContent,
    middleContent,
    bottomContent,
}: {
    topContent: React.ReactNode;
    middleContent: React.ReactNode;
    bottomContent: React.ReactNode;
}) {
    return (
        <GridLayout>
            <TopContent>{topContent}</TopContent>
            <UsersList>{middleContent}</UsersList>
            <ContentSpacer />
            <UsersCard>{bottomContent}</UsersCard>
            <UsersCard />
            <Bottomspacer />
        </GridLayout>
    );
}
