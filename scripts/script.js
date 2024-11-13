function showInput() {
  let input = document.querySelector('.search-input');
  if (input.style.display === "none") {
    input.style.display = "block";
    input.style.width = "95px";
  } else {
    input.style.display = "none";
    input.style.width = "0";
  }
}