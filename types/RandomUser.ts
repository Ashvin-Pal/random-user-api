export interface RandomUserResponse {
    results: User[];
    info: Info;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    id: ID;
    picture: Picture;
    dob: Dob;
    /* Not using this value for now, enable it in the api call if needed */
    // login: Login;
    /* Not using this value for now, enable it in the api call if needed */
    // registered: Dob;
    /* Not using this value for now, enable it in the api call if needed */
    // phone: string;
    /* Not using this value for now, enable it in the api call if needed */
    // cell: string;
    /* Not using this value for now, enable it in the api call if needed */
    // nat: string;
}

interface Dob {
    date: string;
    age: number;
}

interface ID {
    name: string;
    value: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Street {
    number: number;
    name: string;
}

interface Timezone {
    offset: string;
    description: string;
}

// interface Login {
//     uuid: string;
//     username: string;
//     password: string;
//     salt: string;
//     md5: string;
//     sha1: string;
//     sha256: string;
// }

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
