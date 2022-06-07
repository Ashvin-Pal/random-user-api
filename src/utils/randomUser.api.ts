import type { RandomUserResponse } from "../../types";

const RANDOM_USER_URL = "https://randomuser.me/api/1.3";

const HEADERS = { Accept: "application/json" };

export async function getRandomUser() {
    const queryParams = new URLSearchParams({
        exc: "login",
    });
    const newUrl = new URL(`${RANDOM_USER_URL}?${queryParams}`);
    const res = await fetch(newUrl.href, { headers: { ...HEADERS } });
    const data: RandomUserResponse = await res.json();
    return { res, data };
}

export async function getRandomUsers() {
    const queryParams = new URLSearchParams({
        results: "12",
        exc: "login",
    });
    const newUrl = new URL(`${RANDOM_USER_URL}?${queryParams}`);
    const res = await fetch(newUrl.href, { headers: { ...HEADERS } });
    const data: RandomUserResponse = await res.json();
    return { res, data };
}
