let images = Array.from(document.querySelectorAll(".image img"));
let appear = document.getElementById("appear");
let item = document.getElementById("item");
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
var currentIndex = 0;
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    currentIndex = images.indexOf(e.target);
    var currentSrc = e.target.src;
    item.style.backgroundImage = `url(${currentSrc})`;
    appear.style.display = "flex";
  });
}
close.addEventListener("click", closepic);
function closepic() {
  appear.style.display = "none";
}
next.addEventListener("click", getnextslide);
function getnextslide() {
  currentIndex++;
  var currentSrc = images[currentIndex].src;
  item.style.backgroundImage = `url(${currentSrc})`;
  console.log(currentIndex);
  if (currentIndex == 5) {
    currentIndex = -1;
    // next.setAttribute("disabled", "");
  }
}
prev.addEventListener("click", getprevslide);
function getprevslide() {
  currentIndex--;
  var currentSrc = images[currentIndex].src;
  item.style.backgroundImage = `url(${currentSrc})`;
  console.log(currentIndex);
  if (currentIndex == 0) {
    currentIndex = 6;
    // prev.setAttribute("disabled", "");
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    getnextslide();
  } else if (e.key == "ArrowLeft") {
    getprevslide();
  } else if (e.key == "Escape") {
    closepic();
  }
});
