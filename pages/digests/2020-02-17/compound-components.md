
## Practice your compound components

https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992

> A compound component is a type of component that manages the internal state of a feature while delegating control of the rendering to the place of implementation opposed to the point of declaration.

This post by Dane Sirois is old. Like from 2018 old. But, I stumbled into it and thought it a worthwhile reminder of a useful pattern - compound components.

The way I conceptualize a compound component is two components that you render together that share an implicit state. That implicit state is technically an internal state that is managed by the component (via context, for example). And the responsibility for rendering is "delegated" to the UI implementing the combined - compound - component. The perfect example is the `<select>` and `<option>` elements in HTML - separately they do almost nothing, but together they are a functioning UI component.

Another takeaway for me was the good use case for React.cloneElement, a tool I often forget is in my toolbox.
