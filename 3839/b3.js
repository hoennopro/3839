function openSearchBar() {
  const searchBar = document.querySelector(".search-bar");
  searchBar.style.display = "block";

  searchBar.style.transition = "all 0.5s ease";
  searchBar.style.width = "300px";
  searchBar.style.opacity = 1;
}

function closeSearchBar() {
  const searchBar = document.querySelector(".search-bar");
  searchBar.style.display = "none";
}
