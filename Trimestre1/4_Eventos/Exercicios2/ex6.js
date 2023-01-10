let ul = document.body.querySelector("ul");
console.log(ul);

ul.addEventListener("click", (event) => {
  let lis = ul.children;
  for (const li of lis) {
    if (li.classList.contains("selected")) {
      li.classList.remove("selected");
    }
  }
  event.target.classList.add("selected");
});
