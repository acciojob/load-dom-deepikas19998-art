// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Create a new text node with the desired string
  const message = document.createTextNode("DOM load success");

  // Append the text to the body
  document.body.appendChild(message);
});
