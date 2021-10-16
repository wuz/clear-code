# Abstractions

## Rabbit learns of the dangers of premature abstraction

Let me tell you a story. A rabbit is looking to dig a burrow. They've never done this before, but they assume they can probably figure it out as they go. 

They find a good spot, underneath a tall tree and near a stream. They begin to dig, carving out the first room, an entryway, and begin to dig out the other important rooms. First, they start with the bathroom. They dig the hole. The process of laying the pipes for running water, takes quite sometime and by the time they are finished, the rabbit is ready for some sleep. Not having a bedroom, the rabbit sleeps in the entryway.

The next day, they start to build the kitchen. After digging out the hole, they realize that, once again, they have to lay pipes. This time, the rabbit decides it would be much easier to just lay all the pipes at once. After a quick trip to the local hardware store, the rabbit gets to work, running pipes to every room before starting into the rest of the kitchen. The rabbit finishes both the pipes and the kitchen and decides to call it a day. 

The next morning, they decide they have had enough of sleeping in the entryway and they start in on the bedroom. Luckily, they've already carved out the room from yesterday! The rabbit sets in on adding a dresser and a bed and, before long, the day is up. 

The rabbit falls asleep, but is awoken by a small drip of water on their forehead. 

_Drip_. _Drip_. _Drip_. 

The pipe in the bedroom doesn't connect to anything, so the water is dripping right onto the rabbit's bed! 

"Oh well" thinks the rabbit. "Nothing to be done but work around it". 

The rabbit moves their bed out from the drip and falls asleep once again. The next day, the rabbit steps in a small puddle next to the bed. "Oh well, nothing to be done but work around it". Over the next few days, the rabbit builds the parlor, the study, and the living room, each one occupying a space they carved out when they layed the pipes. It saved them so much time, but the pipes in each room again have nowhere to go. 

By the last day, the puddles have grown so large that the rabbit has to swim to their bed. The rabbit, always a heavy sleeper, doesn't realize that in the middle of the night their bed has been lifted by the water, pushed towards the stream, and floated 10 miles down the stream and into a land unknown!

## Premature Abstraction is worse than duplication

If that story about the rabbit didn't inspire you, there is an old adage about the hardest things in programming. It points to cache invalidation and naming things, but perhaps abstractions should also be added to the list.

It is quite easy to produce a poor abstraction and often times can be exceptionally hard to produce a robust one. In fact, I'd go so far as to say that most of the abstractions in a codebase are bad abstractions. An abstraction done hastily often becomes a big hinderence on writing new code. Often times you will find these abstractions being written and rewritten over and over again.

The main problem with abstractions is that they are often done long before they are needed. Abstractions are made prematurely with code that _looks_ the same, not code that _behaves_ the same.

<div class="big-idea">
<span class="big-idea-icon">✨</span>
The golden rule of abstraction: Abstract business logic, not code.<br />
The platinum rule of abstraction: Never abstract what you can't explain.
</div>

Abstractions that happen too early are destined for failure. If you haven't seen the possible ways an abstraction might need to behave, you can't build an abstraction that does everything it needs to do.


You're probably asking: "But Wuz, how do I know when it is the right time to abstract then? Won't there always be possible future states that we can't predict?"


## Write Everything Twice

I hear you and to alleviate your concerns, I recommend the phrase "Write Everything Twice". As an alternative to "Don't Repeat Yourself", "Write Everything Twice" means only building an abstraction when you are writing logic for the _third_ time. This is often also referred to as the Rule of Three, but I like the dichotomy between WET and DRY programming.

I like this definition of WET programming:

<div class="big-idea">
<span class="big-idea-icon">✨</span>
You can ask yourself "Haven't I written this before?" two times, but never three.
</div>

Once you have spent the time writing a few versions of a peice of logic, you can start considering how you would make an abstraction of it.


## Always comment your abstractions

## Never abstract while doing "thoughtless" refactoring

There are many tasks that involve refactoring code, but require little thought on the part of the programmer. Maybe you've decided to wrap a component in a higher order component or you're doing a find and replace for all instances of a class. In these instances, it can be compelling to abstract out the _refactoring work_ - something like taking a bunch of components and converting them to an array of objects and then iterating over it. That makes it easy to add new things to it as you go, but it also ignores the golden rule of abstraction.

