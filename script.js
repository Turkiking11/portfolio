// 1. Grab the h1 element
const title = document.getElementById('animated-title');

// 2. Get the text content inside it
const text = title.textContent;

// 3. Clear the old plain text out of the h1
title.textContent = '';

// 4. Loop through each letter and build the spans
text.split('').forEach((letter, index) => {
  const span = document.createElement('span');
  span.textContent = letter;
  
  // Dynamically set the animation delay based on letter position
  span.style.animationDelay = `${index * 0.1}s`;
  
  // Put the new span inside the h1
  title.appendChild(span);
});
