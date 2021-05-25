var imgJson = {
  url: [
    52, 5, 10, 13, 15, 1, 12, 4, 3, 2, 6, 8, 7, 9, 11, 14, 16, 18, 17, 20, 21, 30, 31, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ],
  width: [
    200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
    200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200
  ],
};

var imgWidth;
var fullImg = document.querySelector(".full_img");
var backDrop = document.querySelector(".backdrop");
var mediaDesktop = window.matchMedia("(min-width : 813px)");
var mediaPhone = window.matchMedia("(max-width: 812px) and (min-width:640px)");
var display = "";

for (var i = 0; i < imgJson.url.length; i++) {
  display +=
    '<img src="https://github.com/Satwik-pro/Certificates/blob/main/' +
    imgJson.url[i] +
    '.jpg?raw=true" alt="">';
}

document.querySelector(".container").innerHTML = display;

var imgTag = document.querySelectorAll("img");

backDrop.addEventListener("click", function () {
  backDrop.style.display = "none";
  fullImg.style.display = "none";

  if (mediaDesktop.matches) {

    fullImg.style.width = "60%";
    fullImg.style.left = "20%";
  }
  if (mediaPhone.matches) {

    fullImg.style.width = "65%";
    fullImg.style.left = "15%";
  }
});

for (var j = 0; j < imgTag.length; j++) {
  imgTag[j].addEventListener("click", createFullImg(j));
}

function createFullImg(n) {
  return function () {
    backDrop.style.display = "block";
    fullImg.style.display = "block";
    imgWidth = imgJson.width[n];

    document.querySelector(".full_img").innerHTML =
      '<img src="https://github.com/Satwik-pro/Certificates/blob/main/' +
      imgJson.url[n] +
      '.jpg?raw=true" alt="">';

    if (imgWidth <= 3737 && mediaDesktop.matches) {
      fullImg.style.width = "60%";
      fullImg.style.left = "20%";
    }

    if (imgWidth <= 3737 && mediaPhone.matches) {
      fullImg.style.width = "60%";
      fullImg.style.left = "20%";
    }
  };
}
