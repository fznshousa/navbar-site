// Toggle class active untuk menu
const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#hamburger-menu");
// ketika hamburger menu di klik
hm.onclick = () => {
	navbarNav.classList.toggle("active");
};

// Klik di luar elemen

document.addEventListener("click", function (e) {
	if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
