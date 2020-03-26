export default {
  "data": [
    {
      "id": "i-_ly2IFtrBq",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-19T13:11:02.477-07:00",
        "publishedOn": "2020-03-18T21:00:00.000-07:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://www.useronboard.com/how-bandcamp-onboards-new-users/"
        },
        "notes": "<p>If you have anything to do with building software products (or aspire to), you will not regret watching this tear down by Sam from User Onboard.</p>\n",
        "quote": null,
        "title": "<p>A teardown of the onboarding UX at <a href=\"https://bandcamp.com/\">Bandcamp</a></p>\n"
      }
    },
    {
      "id": "i-uaOaJT0P-J",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-19T10:44:19.893-07:00",
        "publishedOn": "2020-03-17T21:00:00.000-07:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://martinfowler.com/articles/value-architectural-attribute.html"
        },
        "notes": "<p>Fowler's article on the &quot;the elephant in the architecture&quot; is about considering business value in architecture decisions. Initial reaction is duh. But, he rightly points out:</p>\n<ul>\n<li>If you worked at a Six Sigma business that insisted on every microservice being reliable 99.9999% of the time, then you were not considering the business value inherent, and very different, across your system architecture.</li>\n<li>If you embarked on a re-architecture by modernizing your most business-critical infrastructure first, then you weren't considering the mistakes you'd make in the beginning. Choose a less important feature to rebuild while you refine the new system architecture.</li>\n<li>If you cannot name which customer journeys will break if a given microservice, database, or infrastructure component goes down, then you do not have a grip on the business value reliant on your system architecture.</li>\n</ul>\n",
        "quote": "<p>If we want our systems to adhere to some technical standard, then we need to understand what value is lost by failing to do that.</p>\n",
        "title": "<p>Tie your customer journeys to your architecture. Really.</p>\n"
      }
    },
    {
      "id": "i-6f6W1grmfw",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-19T08:30:22.064-07:00",
        "publishedOn": "2020-03-15T21:00:00.000-07:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://verraes.net/2020/01/wall-of-technical-debt"
        },
        "notes": "<p>ollow the link for good instruction in how to quantify and qualify your tech debt. Using a wall or whiteboard, fasten stickies to describe the impediment: the tech debt that slowed you down, or hung you up, the web of files that weren't co-located, etc. Then, as the same hurdles get encountered over and over again by you and your team, start to tally a count on each sticky note.</p>\n<p>The sacred, universal truth that justifies this practice is that giving a thing visibility will give it attention. You want managers and non-technical co-workers to be able to see what's costing the business time and money so that, eventually, it's a business decision to tackle tech debt.</p>\n<p>And a reason to start doing this immediately is that it will be infinitely more difficult to retroactively account for and, more importantly, prioritize tech debt. I, for one, have complained about tech debt to a manager and been asked &quot;well, what's most critical?&quot; - only to guess the answer, or point to the whole code base, or describe my most recent difficulty. Not having concrete, tangible evidence of what's costing the business money is a real handicap to getting something done about it.</p>\n<p>It's harder to do this in the days of Corona virus, with most of us working from home. Hopefully we can find a virtual stand-in for sticky notes, whiteboards and walls. If you've got a good substitute, <a href=\"https://www.twitter.com/morgs32\">I want to know about it!</a></p>\n",
        "quote": "<p>Digital tools make it easy to hide things. The wall is visible, confrontational even.</p>\n",
        "title": "<p>Sticky notes and whiteboards in the time of Corona virus</p>\n"
      }
    },
    {
      "id": "i-cB8w70eiX5",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-18T18:04:39.647-07:00",
        "publishedOn": "2020-03-12T21:00:00.000-07:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://www.g9labs.com/2020/01/04/high-output-management-for-non-managing-tech-leads"
        },
        "notes": "<p>Follow the link to see how Andy Grove's High Output Management provides insights to a seasoned engineering lead. Worth a speed read. The guiding principle: a manager's output is equal to the output of the teams under his or her influence. In that light, the book (like the linked article) is about improving the output of your team and those you influence.</p>\n<p>I would argue the first step is always to &quot;measure what you treasure&quot;. You must setup indicators and metrics that will demonstrate how output is changing. It has to be an OKR - a measurable objective that starts at the top (for the company and CEO) and trickles down to every employee. That is, even a developer without subordinates can take responsibility for boosting the productivity of the teammates working next to him - with better, smaller, more coherent, and documented PRs for example.</p>\n<p>Velocity is the most obvious measure of output for an engineering team. That should be a non-negotiable indicator for how well a director or head of engineering is doing. Yet, it is surprising how many technology companies find ways (and excuses) to not measure engineering velocity. It often isn't pretty, but that's when you must pay attention to it most.</p>\n",
        "quote": null,
        "title": "<p>High output management with Andy Grove</p>\n"
      }
    },
    {
      "id": "i-mQZFWeuWul",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-18T14:54:15.413-07:00",
        "publishedOn": "2020-02-29T21:00:00.000-08:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://www.gkogan.co/blog/simple-systems"
        },
        "notes": "<p>Follow the link for a few good reasons to keep your architecture simple.</p>\n<p>Here's a reason, by example.</p>\n<p>We were moving from a monolith to a microservices architecture, in which each API resource was its own microservice. And, there were very many relationships between microservices. And, each microservice had its own Github repo. As a result, having a live, local development environment was torture - pulling down any number of repos, the same number of databases and docker containers, configuring a couple dozen environment variables, and more.</p>\n<p>Everyone relied a lot on testing our work in QA environments. It slowed us down dramatically.</p>\n<p>Back then, I insisted that a monorepo would significantly simplify our situations. Monorepo or not, it should take no more than a couple commands and minutes for a new hire to get a dev environment running. That's a litmus test on most projects.</p>\n",
        "quote": null,
        "title": "<p>Keep the system simple</p>\n"
      }
    },
    {
      "id": "i-HLHEDK59ki",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-12T10:40:04.304-07:00",
        "publishedOn": "2020-02-11T21:00:00.000-08:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://daverupert.com/2018/04/pitfalls-of-card-uis/"
        },
        "notes": null,
        "quote": "<p>I’m of the opinion that all cards in a Card UI are destined to become baby webpages. Just like modals. Baby hero units with baby titles and baby body text and baby dropdown menu of actions and baby call to action bars, etc.</p>\n<p>In some ways this outcome is the opposite of what you were intending. You wanted a Card UI where everything was simple and uniform, but what you end up with is a CSS gallery website filled with baby websites.</p>\n",
        "title": "<p>Maybe <strong>don't</strong> use cards in your UI/UX</p>\n"
      }
    },
    {
      "id": "i-IbMwoblx3m",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-12T10:40:04.304-07:00",
        "publishedOn": "2020-02-02T21:00:00.000-08:00",
        "link": {
          "@context": "http://schema.org/",
          "@type": "WebPage",
          "url": "https://github.com/marcintreder/adele"
        },
        "notes": "<p>What's to like:</p>\n<ul>\n<li>If you have to present &quot;similar art&quot; when pitching to make a design system, this is it.</li>\n<li>Use or copy what you can from companies that have gone through several iterations of their own system.</li>\n<li>Respect that it's managed in code. Use a PR to add your own design system. An interesting application of a source control system.</li>\n</ul>\n",
        "quote": null,
        "title": "<p>Adele - a design systems repo</p>\n"
      }
    },
    {
      "id": "i-NBOuWy8pQf",
      "type": "row",
      "attributes": {
        "photo": null,
        "createdOn": "2020-03-12T10:40:04.304-07:00",
        "publishedOn": "2020-01-30T21:00:00.000-08:00",
        "link": "[https://www.pluralsight.com/courses/play-by-play-ryan-singer](https://www.pluralsight.com/courses/play-by-play-ryan-singer)",
        "notes": "<p>Short and tidy mashup with Ryan Singer. He takes on a design challenge and talks about his approach - testing hypotheses, diving into mental models, and more.</p>\n",
        "quote": "<p>&quot;What is the fastest way to test this out. To remove a contender&quot;</p>\n<p>&quot;Sketching is a medicine to the pain of worry.”</p>\n",
        "title": "<p>A design challenge with Ryan Singer</p>\n"
      }
    },
    {
      "id": "i-ws-_HKgM9D",
      "type": "row",
      "attributes": {
        "photo": {
          "@context": "http://schema.org/",
          "@type": "ImageObject",
          "name": "image.png",
          "height": 609,
          "width": 788,
          "url": "https://coda.io/contentProxy/dYI4sySQOr/blobs/bl-PLI-RvZY5w/40807a61a5b8c7f36f7d3a141a8f7ffff4266de210b4bc02e3f45bde84e8ac5c78ddb22c0a6edf01c6571eacd4c5154abd6be0031be6b1151b84a4128461acf4637e417c3b7616ddd6bb0dc8aa8c015fa4e41625af16d54f3411aa3335c21bc4b82549fc",
          "status": "live"
        },
        "createdOn": "2020-03-12T10:40:04.304-07:00",
        "publishedOn": "2020-01-10T21:00:00.000-08:00",
        "link": "",
        "notes": null,
        "quote": null,
        "title": "<p>This is how you ask to email your customers</p>\n"
      }
    }
  ]
}
