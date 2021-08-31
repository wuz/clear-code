# Formatting

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
