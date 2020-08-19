## How useful is "breadcrumb" logging?

https://sobolevn.me/2020/03/do-not-log

<img src={require('src/images/FredAndGinger.png')} alt="Fred Astaire and Ginger Rogers in Shall we dance" />

> "You say either... I say nyther. Let's call the whole thing off." - Fred Astair and Ginger Rogers

It seems sometimes that however you approach logging is going to lead to disaster:

* Say you avoid logging in production (as many linters would force you to do). I can think of plenty of times I wished we had them.
* Ok, start logging. Then, you drown in them - the noise suffocates the signal.
* You decide you need to make intelligent architecture decisions about what to log, and where to put them. That takes a lot of brainpower. And, you wonder how might you avoid such complexities.

I've no answer to these tribulations. I've yet to see a system of logging I'd swear by. Have you?

