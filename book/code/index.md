# CODE

Clear code begins with good choices at the most fundamental levels. When we think about "code as a system", we can begin to evaluate the inputs and outputs of that system.

## Your code as a system

All code, whether written by one person or 1000 people, is a system. It has a series of inputs (code standards, literal keystrokes, documentation, langauge choices, and infinitely more) that generate a series of outputs (running software, broken builds, high incident response time, work on the weekends). Any decision made about code has a lagging indicator, as it takes time to see the effects of change. Because of that, we should try to limit the number of on-going changes that we have at any time.

How we think about code really differs depending on where the code comes from.

## New Code

## Existing Code

### The Haunted Forest

### The 

## Other People's Code

We don't always have control over what our fellow engineers write. We can leave reviews and guide discussions, but at the end of the day, working code is shipped code. When talking about and working with other people's code, we can find ourselves discussing hypotheticals. 

> "Why would anyone do this like this?"

> "Who would build this in this way?"

> "What kind of weirdo writes code like this?"

It's important to remember that historical value judgements are always a bad idea. A great mantra when dealing with this kind of code is: "Never attribute to ignorance what you can attribute to opportunity cost". We don't know the specifics of the situations in which this code was written. We don't know if a PM was pushing hard to get this done. We can't see all the other code they tried that didn't work.

If something is truly problematic, propose a change - more on this in the chapter on RFC's - but don't assume that your solution is right just because it is different.

---

## Naming

## Functions

## Comments

## Data Structures, Classes, Objects and Structs

## Errors

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
