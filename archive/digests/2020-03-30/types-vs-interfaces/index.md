## A refresher on the difference between types and interfaces in Typescript

https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0

In summary, interfaces and types are practically the same. The biggest difference is that an interface is a "static" blueprint — it cannot exists in one or another shape. But Type aliases can, through the use of union operators. And, that added ability makes them a bit more useful. And if you're going to use types aliases in one place (where you need that flexibility), you might as well use them everywhere - across the codebase for a React app, for instance.
