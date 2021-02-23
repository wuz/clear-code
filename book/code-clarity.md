# CODE

_In progress_

## Formatting

Any discussion of code clarity needs to begin with formatting. Roughly defined, formatting is the look and feel of your codebase. The world of formatting is large and there are about as many opinions on it as there are developers. How then, you might ask, do we create clarity out of such a diverse landscape? The answer: **Pick a paradigm and stick with it.** Formatting boils down to two different fields, automatic formatting/linting and manual formatting. The first is easy, the second slightly harder.

## Automatic Formatting

Let's talk about Javascript. If you've spent any amount of time working in the world of JS, you likely have run into a formatter, linter, or configuration. The AirBNB style guide, StandardJS, Prettier, and more. On top of that, companies often implement their own version of these packages (at the time of this writing there are over 11000 NPM packages with _eslint-config_ in their name). In this world, there is a massive amount of analysis paralysis. How do you know what option is best? What if there is a better config out there?

**It doesn't matter.**

The point of a formatter/linter isn't to be the best possible option. It's to confine you to a specific standard to focus your code into a single style.

<div class="big-idea">
<span class="big-idea-icon">✨</span>
Pick a formatter or linter. Run it on all your files
</div>

It doesn't matter which formatter you pick. It doesn't matter if everyone agrees on the syntax or choices. Get as close as you can and then follow nothing but the chosen format. Implement linting tools that yell at you if your code doesn't conform (or, better yet, fixes it for you!). Don't allow non-formatted code to be merged. Run the formatter on existing files so that they get updated too. Then follow your chosen formatters releases religiously. Automate updates to it, then forget about formatting forever.

## Manual Formatting

---

## Symmetry

## Abstractions

Let me tell you a story. A rabbit is looking to dig themself a burrow. They've never done this before, but the figure they can probably figure it out as they go. They find a good spot, underneath a tall tree and near a stream. They begin to dig, carving out the first room, an entryway, and begin to dig out the other important rooms. First, they start with the bathroom. They dig the hole. The process of laying the pipes for running water, takes quite sometime and by the time they are finished, the rabbit is ready for some sleep. Not having a bedroom, the rabbit sleeps in the entryway.
The next day, they start to build the kitchen. After digging out the hole, they realize that, once again, they have to lay pipes. This time, the rabbit decides it would be much easier to just lay all the pipes at once and pull the work out into a simple repeatable pattern. After a quick trip to the local hardwar store, the rabbit gets to work, running pipes to every room before starting into the rest of the kitchen. The rabbit finishes both the pipes and the kitchen and decides to call it a day. The next morning, they decide they have had enough of sleeping in the entryway and they start in on the bedroom. Luckily, they've already carved out the room from yesterday! The rabbit sets in on adding a dresser and a bed and, before long, the day is up. The rabbit falls asleep, but is awoken by a small drip of water on their forehead. _Drip_. _Drip_. _Drip_. The pip in the bedroom is quite sealed off and since it doesn't connect to anything, the water is dripping right onto the rabbit's bed! "Oh well" thinks the rabbit. "Nothing to be done but work around it". The rabbit moves their bed out from the drip and falls asleep once again. The next day, the rabbit steps in a small puddle next to the bed. "Oh well, nothing to be done but work around it". Over the next few days, the rabbit builds the parlor, the study, and the living room, each one occupying a space they carved out when they layed the pipes. It saved them so much time, but the pipes in each room again have nowhere to go. By the last day, the puddles have grown so large that the rabbit now has to swim to their bed to go to sleep. The rabbit sleeps heavy and so doesn't realize that in the middle of the night their bed has been lifted by the water, pushed towards the stream, and floated 10 miles down the stream and into a land unknown.

There is an old adage about the hardest things in programming, which points to cache invalidation and naming things. I believe abstraction should be added to the list. Abstractions are incredibly easy to do wrong and astoundingly difficult to do correctly. In fact, I'd go so far as to say that most of the abstractions in a codebase are bad abstractions. Through little fault of the developers, an abstraction done hastily often becomes a big hinderence on writing new code and often times you will find these abstractions being written and rewritten over and over again. Let's fix that.

The main problem with abstractions is that they are, all too often, done before they are needed.

The golden rule of abstraction: Abstractions are about business logic, not code.
The platinum rule of abstraction: Never abstract what you can't explain.

<!-- TODO -->

### Never abstract while doing rote refactoring

There are many tasks that involve refactoring code, but require little thought on the part of the programmer. Maybe you've decided to wrap a component in a higher order component or you're doing a find and replace for all instances of a class. In these instances, it can be compelling to abstract out the _refactoring work_ - something like taking a bunch of components and converting them to an array of objects and then iterating over it. That makes it easy to add new things to it as you go, but it also ignores the golden rule of abstraction.

## New Code

## Existing Code

## Your code as a system

## Naming

## Functions

## Comments

## Data Structures, Classes, Objects and Structs

## Errors

## Other People's Code

## Testing

## Returns

## Pick a paradigm

## Don't Do Too Much

## Write Everything Twice

In the world of programming, there may be no more widely recognizable than Don't Repeat Yourself (DRY). It's the subject of many a code review and you can find any number of articles explaining why DRY is the holy grail of programming. It's also wrong.

Alright, clickbait aside, let's dive into what DRY is, what good parts exist, and a better alternative.

### Left high and DRY

DRY, in technical terms, is a system by which every "piece of knowledge" has a single, unambigous representation within a system.

## Always comment your abstractions

_In progress_

## Optimize for deletion

_In progress_

## Perfect is the enemy of working

_In progress_

## Deadlines wait for no dev

Never attribute to lack of thought that which you can attribute to opportunity cost.

## Misc

_In progress_

### Use a formatter. Use a linter.

## Smells

_In progress_
