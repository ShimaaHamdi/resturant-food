const navItem = document.querySelector("#nav-items");
const openNavBtn = document.querySelector("#openNav-menu");
const closeNavBtn = document.querySelector("#closeNav-menu");

openNavBtn.addEventListener("click", () => {
  navItem.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItem.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

// close nav menu when menu a menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav-items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNav();
    });
  });
}


// Change Navbar Style On Scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0);
})
