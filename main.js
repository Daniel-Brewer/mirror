// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.
let outputEl = document.getElementById("article_One");
let outputEl2 = document.getElementById("article_Two");
document.getElementById("message").addEventListener("keyup", function() {
    outputEl.innerHTML = event.target.value;
    outputEl2.innerHTML = event.target.value;
}
)