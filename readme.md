1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

---->> getElementById():
Returns a single element with the specified ID.

---->> getElementsByClassName:
Returens a live HTMLcollection of all elements with the specified class name.

---->> querySelector():
Returns the first element that matches a css selector.

---->> querySelectorAll():
Returns a static NodeList of all elements that match a css selector.

2.How do you create and insert a new element into the DOM?

---->> step-1:
Use document.createElement("...") to create an element.

---->> step-2:
Modify its content or attributes.

---->> step-3:
use document.getElement...("...").appendChild(...) to insert an element.

3.What is Event Bubbling and how does it work?

----> Event bubbling is the process where an event triggered on a child element propagates upward through its parent elements in the DOM tree.

4.What is Event Delegation in JavaScript? Why is it useful?

----> Event delegation is attaching a single event listener to a parent element to handle events from its child elements using event propagation.

----> It is useful for handling events on dynamically added elements and improves performance by reducing the number of event listeners.

5.What is the difference between preventDefault() and stopPropagation() methods?

----> preventDefault():
Prevents the defult browser behavior.

----> stopPropagation():
Stops the event from bubbling up orcapturing down the DOM tree.
