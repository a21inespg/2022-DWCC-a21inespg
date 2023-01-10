let confirm = document.getElementById("confirm");
confirm.setAttribute("hidden", "");

console.log(document.body);

let links = document.body.querySelector("p");

links.addEventListener("click", (event) => {
  if (event.target.closest("a") != null) {
    if (window.confirm("Estás seguro?")) {
      console.log("confirmaches");
    } else {
      event.preventDefault();
    }
  }
});
