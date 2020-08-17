
## A teardown of MongoDb vs Postgres

https://www.enterprisedb.com/blog/comparison-joins-mongodb-vs-postgresql

This is a concise, demonstrated comparison of developer experience and performance when doing joins in Mongo and Postgres. I think most people avoid doing joins with MongoDb, anyhow - which is to say they intentionally chose to implement MongoDb where joins were not necessary; where changes to schema were not dangerous; and where lookups are fairly simple - by id or discrete attribute. 

Still, this comparison is helpful to have in mind in an interview, for a systems design question, or when the future state of your DB schema deserves more consideration.
