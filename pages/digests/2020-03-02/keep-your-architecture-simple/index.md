## Keep the system, architecture, and dev experience simple

https://www.gkogan.co/blog/simple-systems

Follow the link for a few good reasons to keep your architecture simple. 

Here's a reason, by example. 

We were moving from a monolith to a microservices architecture, in which each API resource was its own microservice. And, there were very many relationships between microservices. And, each microservice had its own Github repo. As a result, having a live, local development environment was torture - pulling down any number of repos, the same number of databases and docker containers, configuring a couple dozen environment variables, and more. 

Everyone relied a lot on testing our work in QA environments. It slowed us down dramatically.

Back then, I insisted that a monorepo would significantly simplify our situations. Monorepo or not, it should take no more than a couple commands and minutes for a new hire to get a dev environment running. That's a litmus test on most projects.
