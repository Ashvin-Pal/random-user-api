import { nanoid } from "nanoid";

let x = 0;

/**
 * Initially I was using nanoid to generate unique ids and that was working well. But for
 *  some reason it was not working with jest as Nextjs 12 currently has a bug with
 * importing some modules. So for now I am using a simple counter for this.
 *  You can find the issue here > https://github.com/vercel/next.js/issues/32848
 */

export function uuid() {
    return (x += 1).toString();
}
