const menuIcon = document.getElementById("icon");
const menuList = document.getElementById("list");

menuIcon.addEventListener("click", () => {
     menuList.classList.toggle("hidden");
});