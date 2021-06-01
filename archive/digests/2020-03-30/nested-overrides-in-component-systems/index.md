## Composing overrides on nested components in a component system

https://medium.com/@dschnr/better-reusable-react-components-with-the-overrides-pattern-9eca2339f646

I enjoyed reading this because we used a similar approach at Brickwork Software (now b8ta). We built a single component system that we used to make remarkably different products (a store locator for Nike, an appointment booking system for Chanel, and so on). We needed to give various feature implementations very flexible control of nested components. We decided on the "overrides" approach - with one additional layer of complexity: we would Object.assign() overrides from a parent component but also a theme/configuration file that we put in a root level Provider.

This was the order: configuration file overrides (yaml), highest priority → parent component overrides → default/base properties and styles of nested components.

At the end of the day, I think we missed the mark. Our approach was far too complex - and I blame the configuration file. It ended up being 1k lines long sometimes. We tended towards using a configuration file INSTEAD of new react components with overrides. We thought that would reduce bloat and make testing easier (less code to cover). But, it swung the other way - the complexity of the configuration file deserved its own suite of tests. The configuration file ended up looking like our own templating language. I think Uber will have better luck with their approach because everyone is still writing react code.

Side note: I'm very interested to know how they go about testing implementations (with or without overrides) when the underlying component system is updated. At b8ta - I felt that visual E2E regression testing was the only way I could trust an upgrade.
