
// --- Logo DVD bounce animation ----------------

const logo = document.querySelector(".logo-bouncer");

if (logo) {

  let x = 100;
  let y = 100;

  let speedX = 2;
  let speedY = 2;

  function animateLogo() {

    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    x += speedX;
    y += speedY;

    if (x + logoWidth >= window.innerWidth || x <= 0) {
      speedX *= -1;
    }

    if (y + logoHeight >= window.innerHeight || y <= 0) {
      speedY *= -1;
    }

    logo.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animateLogo);
  }

  animateLogo();

}
// --- Custom cursor ----------------

const cursor = document.getElementById("cursor");

if (cursor && window.matchMedia("(pointer: fine)").matches) {

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const hovering = e.target.closest("a, button");
    cursor.classList.toggle("is-hover", Boolean(hovering));
  });


  function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.transform = 
      `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

} else if (cursor) {
  cursor.remove();
}
