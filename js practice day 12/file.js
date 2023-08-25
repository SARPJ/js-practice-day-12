let btn = document.getElementsByTagName("button")[0];
let b = document.getElementsByClassName("box")[0];
btn.addEventListener("mouseenter", () => {
  b.style.height = "500px";
  b.style.width = "500px";
  b.style.backgroundColor = "black";
});

btn.addEventListener("mouseout", () => {
  b.style.height = "300px";
  b.style.width = "300px";
  b.style.backgroundColor = "purple";
});
