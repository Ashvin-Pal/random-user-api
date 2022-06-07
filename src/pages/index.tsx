import type { NextPage } from "next";
import Head from "next/head";
import { GridGeneral } from "../components/grid";
import { Heading1, Heading5 } from "../components/typography";
import { UserList } from "../components/UserList";
import { getRandomUser, getRandomUsers } from "../utils";

const Home: NextPage = ({ users }: any) => {
    return (
        <>
            <Head>
                <title>Random User API | Home </title>
                <meta name="description" content="Showcase of random user api" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GridGeneral>
                <Heading1 color="--color-black">Yo grids</Heading1>
                <UserList users={users} />
            </GridGeneral>
        </>
    );
};

export async function getStaticProps() {
    const { data, res } = await getRandomUsers();

    if (!res.ok) {
        throw new Error(`Failed to fetch user, received status ${res.status}`);
    }

    return { props: { users: data }, revalidate: 20 };
}

export default Home;
