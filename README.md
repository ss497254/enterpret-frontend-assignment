# Enterpret-assignment

Assignment for frontend intern

### Tech Stack

-   Next.js
-   Tailwind CSS
-   Typescript

I tried to avoid any component library

### Installation

Install the dependencies, build and start the server.

```
npm i
npm run build
npm start
```

### Structure

App has 2 only pages.

-   index.tsx
-   404.tsx

index.tsx is the main entrypoint. It's has two main component sidebar and query container. Siderbar has build query button when clicked open create query modal where you can create the queries, and query container will render list of all the queries created.

### Rule Group

Not much information is provided on how to convert rule object to string
and how rule group is connected to other rule group.
I also tried to contact the team ask for sample queries but didn't get any response.
So based on my understanding I structured in a way like:
the output of each query will be a rule_group and a rule_group can a have a array of rule or rule_group as children, since no info. was given how rule with join so I use "AND" to join them and set "not" value as false.

each rule will be joined based on the conjuction provided, and rules when combined will form bigger rule group.

If it's complex you can watch the video attached.
