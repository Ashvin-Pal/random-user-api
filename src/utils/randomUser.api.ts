import type { RandomUserResponse } from "../../types";

/* Right now we are using version 1.3. Before changing the version we 
will need to check the response object for breaking changes*/
const RANDOM_USER_URL = "https://randomuser.me/api/1.3";

const HEADERS = { Accept: "application/json" };

export async function getRandomUsers() {
    const queryParams = new URLSearchParams({
        results: "10",
        exc: "login,nat,cell,phone,registered",
    });
    const newUrl = new URL(`${RANDOM_USER_URL}?${queryParams}`);
    const res = await fetch(newUrl.href, { headers: { ...HEADERS } });
    const data: RandomUserResponse = await res.json();
    return { res, data };
}
