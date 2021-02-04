# React Stopwatch

Recreate a stopwatch in React. Your final product should function similarly to [this deployed version](http://scary-religion.surge.sh/) of the component.

## Getting Started

- Fork and clone this repo
- Create a react app in this folder by running `npx create-react-app .`
- Start the development server locally with `$ npm start`, then visit `localhost:3000` in the browser to view app

## Instructions

We're going to put everything into a component called `Stopwatch`. To create all the pieces found in the deployed version, we'll need:
- an `h1` tag that shows the stopwatch time
- a `div` to contain our three buttons
- three buttons for `reset`, `start`, and `pause`

Once you have that, then you'll need to add functionality to our app!

## Steps to Take

1. Initialize state with a `counter` property to track the incrementing time.  (You may need additional state properties later on)

2. Create a `handleStart` method that calls setInterval() and updates `counter` every second.  (Make sure to use `setState` to update)

3. Include an `onClick` attribute on the start button which calls `handleStart`

4. Replace the `0` in the `h1` heading with your `counter`.

5. Next you will need to create `onClick` event attributes for reset and pause and associated methods for each.  

6. Finally, you'll want to limit which buttons can be pressed when.
  - Start button can't be pushed if there's a count already going
  - Pause and reset buttons can only be pushed if there's an active count

**Hints**...*Shhhhhh!*
- It might be useful to rethink your state and what properties it should have to accomplish all the tasks!
- You might also want to include an additional attribute in your constructor method (but outside of state) that keeps track of your current interval. (Think about the pros and cons of putting this variable in state vs outside of it)
- You can use `clearInterval` to stop the current interval!
- Use the `! ` operator to toggle boolean values!
- When limiting button presses, think about how each value in state tells you what is going on! For example, if there is an interval set, that means there is count going!

## Bonus!

* Add some styling! You can make your stopwatch look like the demo, or do something else!
* When the stopwatch is at 0, the display time should be a different style.
* When the user first visits the page, the only button that should be active is "Start".
  * The other buttons should be unlocked only after the user clicks "start"
* Have multiple Stopwatch components rendered on the page so the User can set off multiple timers.  
