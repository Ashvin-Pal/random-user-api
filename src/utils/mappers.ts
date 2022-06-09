import type { User } from "../../types";
import type { UserDetailsCardProps } from "../components";

export const mapUserToCardProps = ({
    id: { value: id },
    name: { first, last },
    picture: { large },
    email,
    location: { country },
    gender,
    dob: { age },
}: User): UserDetailsCardProps => ({
    id,
    imageSrc: large,
    title: `${first} ${last}`,
    subtitle: country,
    footerText: email,
    primaryMetadata: gender,
    secondaryMetadata: `${age} years old`,
});
