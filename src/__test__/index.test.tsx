import { render, within, screen, fireEvent, act } from "@testing-library/react";
import { mockResponse } from "../../mocks";
import Home from "../pages/index";

describe("[Home]", () => {
    test("renders main heading", () => {
        const { getAllByRole } = render(<Home users={mockResponse.results} />);
        expect(getAllByRole("heading")[1]).toHaveTextContent("Select a user");
    });

    test("renders nav bar with application name", () => {
        const { getByRole } = render(<Home users={mockResponse.results} />);
        expect(getByRole("navigation")).toHaveTextContent("RandomUser.me");
    });

    test("renders user avatar list", () => {
        const { getByRole } = render(<Home users={mockResponse.results} />);
        expect(getByRole("listbox")).toBeInTheDocument();
    });

    test("renders the correct amount of user avatars in a list", () => {
        const { getByRole } = render(<Home users={mockResponse.results} />);
        const avatarListBox = getByRole("listbox");
        expect(within(avatarListBox).getAllByRole("listitem")).toHaveLength(
            mockResponse.results.length
        );
    });

    test("renders the text 'No users' if the api returns no users at all", () => {
        const { getByRole } = render(<Home users={[]} />);
        expect(getByRole("listbox")).toHaveTextContent("No users");
    });

    test("renders a user card", () => {
        const { getByRole } = render(<Home users={mockResponse.results} />);
        expect(getByRole("section")).toBeInTheDocument();
    });

    test("renders the user card with the correct information", () => {
        const {
            name: { first, last },
            dob: { age: userAge },
            location: { country },
            email,
            gender,
        } = mockResponse.results[0];
        const { getByRole } = render(<Home users={mockResponse.results} />);
        const card = getByRole("section");

        const [primaryMetadata, secondaryMetadata, title, subtitle, footer] =
            within(card).getAllByRole("heading");

        expect(title).toHaveTextContent(`${first} ${last}`);
        expect(primaryMetadata).toHaveTextContent(gender);
        expect(secondaryMetadata).toHaveTextContent(`${userAge} years old`);
        expect(subtitle).toHaveTextContent(country);
        expect(footer).toHaveTextContent(email);
    });

    test("clicking on a user avatar must display the right information in the user card", async () => {
        const { getByRole } = render(<Home users={mockResponse.results} />);
        const lastUserAvatar = within(getByRole("listbox")).getAllByRole("listitem").reverse()[0];

        const {
            name: { first, last },
            dob: { age: userAge },
            location: { country },
            email,
            gender,
        } = mockResponse.results[mockResponse.results.length - 1];

        fireEvent.click(lastUserAvatar);
        await act(async () => {
            await new Promise((r) => setTimeout(r, 2000));
        });

        const card = screen.getByRole("section");

        const [primaryMetadata, secondaryMetadata, title, subtitle, footer] =
            within(card).getAllByRole("heading");

        expect(title).toHaveTextContent(`${first} ${last}`);
        expect(primaryMetadata).toHaveTextContent(gender);
        expect(secondaryMetadata).toHaveTextContent(`${userAge} years old`);
        expect(subtitle).toHaveTextContent(country);
        expect(footer).toHaveTextContent(email);
    });
});
