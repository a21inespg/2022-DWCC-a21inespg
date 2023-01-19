let ul = document.body.querySelector("ul");

ul.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName == "IMG") {
    let imxPpal = document.body.querySelector("p").querySelector("img");
    let imxActual = event.target;
    let valorSrc = imxActual.closest("a").getAttribute("href");
    let valorTitle = imxActual.closest("a").getAttribute("title");
    imxPpal.setAttribute("src", valorSrc);
    imxPpal.setAttribute("alt", valorTitle);
  }
});
