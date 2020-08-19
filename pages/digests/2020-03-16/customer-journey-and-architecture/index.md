## Tie your customer journeys to your architecture

https://martinfowler.com/articles/value-architectural-attribute.html

Fowler's article on "the elephant in the architecture" is about considering business value in architecture decisions. Initial reaction is duh. But, he rightly points out:
* If you worked at a Six Sigma business that insisted on every microservice being reliable 99.9999% of the time, then you were not considering the business value inherent, and very different, across your system architecture.
* If you embarked on a re-architecture by modernizing your most business-critical infrastructure first, then you weren't considering the mistakes you'd make in the beginning. Choose a less important feature to rebuild while you refine the new system architecture.
* If you cannot name which customer journeys will break if a given microservice, database, or infrastructure component goes down, then you do not have a grip on the business value reliant on your system architecture.

> If we want our systems to adhere to some technical standard, then we need to understand what value is lost by failing to do that.
