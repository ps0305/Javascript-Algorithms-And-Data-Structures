| Aspect | Throttle | Debounce |
| :-- | :-- | :-- |
| Callback Execution | At most once every specified time interval (wait). | Only once after the events stop firing for a specified delay. |
| Execution Timing | The callback is invoked periodically during events (e.g., every X ms). | The callback is invoked after the events have "settled down." |
| Use Case | Continuous/periodic actions (e.g., scroll tracking, progress bar update). | One-time actions after event bursts (e.g., API search request). |
| When the Callback Fires | Fires immediately on first event and then throttles subsequent executions. | Fires only after the timer runs out following the last event. |
| Effect on Performance | Limits the number of function calls to reduce resource usage. | Prevents execution during bursts, reducing resource consumption further. |


### Throttle
#### Definition: Throttle ensures that a function executes at most once in a specified time interval, no matter how many times an event occurs.

#### Behavior:

* The callback function is executed immediately on the first trigger.
* Once invoked, the function will not execute again until a specified wait time has elapsed, even if the event is triggered continuously during the waiting period.
* It evenly spaces out the execution of the function over time.
  
#### Use Case: Use throttle when you want to handle events periodically at a controlled rate. It's helpful for tasks that need regular updates but don't need to react to every event. Examples:

* Scrolling: Adjust a progress bar or navigation indicator.
* Resizing: Adjust layout or perform calculations while resizing the window.
* Repeated API calls: Prevent sending too many API calls in a short time.

### Debounce
#### Definition: Debounce ensures that a function executes only after a specified delay has passed since the last event in a sequence.

#### Behavior:
* The callback function will only execute if the event stops being triggered for the specified delay.
* If a new event occurs within the wait period, the timer restarts (resetting the delay).
* It delays execution until the burst of events is complete.
  
#### Use Case: Use debounce when you want to wait until the event "settles down". It's useful for tasks that should not be executed repeatedly but only after the user's input or action is complete. Examples:

* Search Input: Fire a search query to an API only after the user stops typing (e.g., in search boxes).
* Resize: Perform expensive layout recalculations after the user has finished resizing the window.
* Form Validation: Validate fields only once the user has stopped entering data.
