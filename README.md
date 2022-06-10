# Random User API UI

## Description

This project consumes the [Random user api](https://randomuser.me/) to display random users. This project
uses [Next.js](https://nextjs.org/), react, typescript, framer motion, and styled components.

Nextjs allows for server side rendering, which improves application loading time in the browser. This is also improves loading time on mobile device on slow internet
connection.

## Design

This project is influenced by [neumorphic design](https://www.google.com/search?q=neumorphic+design&oq=neumorphic+design&aqs=chrome..69i57j0i22i30l4j69i61j69i60l2.236j0j7&sourceid=chrome&ie=UTF-8). There are no ui libraries used, only styled components
which puts css in js :)

### Development tools

This project has preetier, eslint, and husky enabled. So on every push the
following commands are run =>

```
npm run format
npm run lint
npm run test
```

This helps to ensure a common coding style when we have multiple
people working on the same project.

### Testing

This project uses jest and react testing library for unit testing the components

### Development

Run the flowwing command to start development work on this project:

```bash
npm run dev
```

Once the server is running go to your browser and hit this url >

```
http://localhost:3000/
```

### Production

Run the following commands to get started

```
npm run build
npm run start
```

Once the server is running go to your browser and hit this url >

```
http://localhost:3000/
```

### Architecture

This project uses server side rendering. We only call the api every 20 seconds
and rebuild all the pages that consumes the data. If there is an error from the api,
nextjs will use the data from the last successfull api call.
