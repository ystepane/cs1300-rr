function showImage() {
  const screenSize = document.getElementById("screen-size").value;
  const displayedImage = document.getElementById("displayed-image");

  let imagePath = "";

  switch (screenSize) {
    case "desktop":
      imagePath = "pics/desk.png";
      break;
    case "phone":
      imagePath = "pics/phone.png";
      break;
    case "tablet":
      imagePath = "pics/tablet.png";
      break;
  }

  displayedImage.src = imagePath;
}

document.addEventListener("DOMContentLoaded", () => {
  showImage();
});
