## Using composition with stateless UI components

https://itnext.io/react-hooks-inverting-container-presenter-5758a1dfdaa

In this post, Joe wonders out loud if we will miss the container/presentation component layers we had back when we built react components from classes. It seemed, then, to be a nice separation of labor, and testing either layer was pretty intuitive.

Now with hooks, our state, data-fetching, and side effects are contained IN our presentation components (an "inversion" of the previous mental model). Joe uses composition to return to the old paradigm. He puts a purely presentation UI component in a named export - which is easy to test. Then the default export is a wrapper which composes the hooks used to provide the UI component all the props it needs to display. Check it out.

I'm not sure if I'll use this pattern - so far my hooks (asynchronous and stateful) are not so complicated as to make testing too arduous. But if that changes, this approach may come in handy.
