let tree = document.getElementById("tree");

console.log(tree);
tree.addEventListener("click", (event) => {
  let fillos = event.target.childNodes;
  console.log(fillos);
  if (fillos.length >= 1) {
    for (fillo of fillos) {
      console.log(fillo);
    }
    if (fillos[0].classList.contains("hidden")) {
      fillos[0].classList.remove("hidden");
    } else {
      fillos[0].classList.add("hidden");
    }
  }
});
