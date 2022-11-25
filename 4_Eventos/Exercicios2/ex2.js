let tree = document.getElementById("tree");

console.log(tree);
tree.addEventListener("click", function (event) {

  event.target.classList.add("hidden");
});
