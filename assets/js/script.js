const menuButton = document.querySelector(".header-menu button");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menuButton.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
  } else {
    menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>`;
  }
});
