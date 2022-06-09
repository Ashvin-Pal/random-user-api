import type { NextPage } from "next";
import { useCallback, useState } from "react";
import Head from "next/head";
import type { User } from "../../types";
import { getRandomUsers, mapUserToCardProps, uuid } from "../utils";
import { GridGeneral, GridHome, Heading2, UserAvatarList, Card, Badge } from "../components";

const Home: NextPage<{ users: User[] }> = ({ users }) => {
    const [currentUser, setUser] = useState<User>(users?.[0] || null);

    const handleClick = useCallback(
        (userId: string) => {
            const user = users.find(({ id: { value } }) => value === userId);
            if (user) setUser(user);
        },
        [users]
    );

    return (
        <>
            <Head>
                <title>Random User API | Home </title>
                <meta name="description" content="Showcase of random user api" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GridGeneral>
                <GridHome
                    topContent={
                        <Badge>
                            <Heading2>Select a user</Heading2>
                        </Badge>
                    }
                    middleContent={
                        <UserAvatarList
                            users={users}
                            currentUser={currentUser}
                            handleClick={handleClick}
                        />
                    }
                    bottomContent={currentUser && <Card {...mapUserToCardProps(currentUser)} />}
                />
            </GridGeneral>
        </>
    );
};

export async function getStaticProps() {
    const {
        data: { results = [] },
        res,
    } = await getRandomUsers();

    if (!res.ok) {
        /* TODO:  Log error to error reporting service */
        throw new Error(`Failed to fetch user, received status ${res.status}`);
    }

    /* The api does not return unique ids for now. So we generate unique ids for the users */
    if (results.length > 0) {
        results.forEach((user) => (user.id.value = uuid()));
    }

    return { props: { users: results }, revalidate: 20 };
}

export default Home;
