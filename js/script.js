const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});




// // Selecting the sidebar and buttons
// const sidebar = document.querySelector(".sidebar");
// const sidebarOpenBtn = document.querySelector("#sidebar-open");
// const sidebarCloseBtn = document.querySelector("#sidebar-close");
// const sidebarLockBtn = document.querySelector("#lock-icon");
// // Function to toggle the lock state of the sidebar
// const toggleLock = () => {
//   sidebar.classList.toggle("locked");
//   // If the sidebar is not locked
//   if (!sidebar.classList.contains("locked")) {
//     sidebar.classList.add("hoverable");
//     sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
//   } else {
//     sidebar.classList.remove("hoverable");
//     sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
//   }
// };
// // Function to hide the sidebar when the mouse leaves
// const hideSidebar = () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.add("close");
//   }
// };
// // Function to show the sidebar when the mouse enter
// const showSidebar = () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.remove("close");
//   }
// };
// // Function to show and hide the sidebar
// const toggleSidebar = () => {
//   sidebar.classList.toggle("close");
// };
// // If the window width is less than 800px, close the sidebar and remove hoverability and lock
// if (window.innerWidth < 800) {
//   sidebar.classList.add("close");
//   sidebar.classList.remove("locked");
//   sidebar.classList.remove("hoverable");
// }
// // Adding event listeners to buttons and sidebar for the corresponding actions
// sidebarLockBtn.addEventListener("click", toggleLock);
// sidebar.addEventListener("mouseleave", hideSidebar);
// sidebar.addEventListener("mouseenter", showSidebar);
// sidebarOpenBtn.addEventListener("click", toggleSidebar);
// sidebarCloseBtn.addEventListener("click", toggleSidebar);