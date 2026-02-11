function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function(e) {
  // Ensure the element is positioned absolutely
  moveRandom.style.position = "absolute";
  
  // Get viewport dimensions
  const maxX = window.innerWidth - moveRandom.offsetWidth;
  const maxY = window.innerHeight - moveRandom.offsetHeight;
  
  // Generate random positions
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  // Move the button
  moveRandom.style.left = `${randomX}px`;
  moveRandom.style.top = `${randomY}px`;
});