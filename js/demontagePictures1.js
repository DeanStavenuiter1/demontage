const demontageOnePics = [
  // vertical pics
  "/images/demontage01-pics/_DSC8646.jpg",
  "/images/demontage01-pics/_DSC8650.jpg",
  "/images/demontage01-pics/_DSC8684.jpg",
  "/images/demontage01-pics/_DSC8685.jpg",
  "/images/demontage01-pics/_DSC8721.jpg",
  "/images/demontage01-pics/_DSC8729.jpg",
  "/images/demontage01-pics/_DSC8731.jpg",
  "/images/demontage01-pics/_DSC8735.jpg",
  "/images/demontage01-pics/_DSC8737.jpg",
  "/images/demontage01-pics/_DSC8742.jpg",
  "/images/demontage01-pics/_DSC8745.jpg",
  "/images/demontage01-pics/_DSC8748.jpg",
  "/images/demontage01-pics/_DSC8768.jpg",
  "/images/demontage01-pics/_DSC8769.jpg",
  "/images/demontage01-pics/_DSC8773.jpg",
  "/images/demontage01-pics/_DSC8777.jpg",
  "/images/demontage01-pics/_DSC8793.jpg",
  "/images/demontage01-pics/_DSC8795.jpg",
  "/images/demontage01-pics/_DSC8800.jpg",
  "/images/demontage01-pics/_DSC8802.jpg",
  "/images/demontage01-pics/_DSC8868.jpg",
  "/images/demontage01-pics/_DSC8882.jpg",
  "/images/demontage01-pics/_DSC8884.jpg",
  "/images/demontage01-pics/_DSC8886.jpg",
  "/images/demontage01-pics/_DSC8889.jpg",
  "/images/demontage01-pics/_DSC8891.jpg",
  "/images/demontage01-pics/_DSC8921.jpg",
  "/images/demontage01-pics/_DSC8926.jpg",
  "/images/demontage01-pics/_DSC8932.jpg",
  "/images/demontage01-pics/_DSC8934.jpg",
  "/images/demontage01-pics/_DSC9038.jpg",
  "/images/demontage01-pics/_DSC9045.jpg",
  "/images/demontage01-pics/_DSC9058.jpg",
  "/images/demontage01-pics/_DSC9062.jpg",
  "/images/demontage01-pics/_DSC9101.jpg",
  "/images/demontage01-pics/_DSC9111.jpg",
  "/images/demontage01-pics/_DSC9118.jpg",
  "/images/demontage01-pics/_DSC9122.jpg",
  "/images/demontage01-pics/_DSC9131.jpg",
  "/images/demontage01-pics/_DSC9156.jpg",
  "/images/demontage01-pics/_DSC9161.jpg",
  "/images/demontage01-pics/_DSC9204.jpg",
  "/images/demontage01-pics/_DSC9207.jpg",
  "/images/demontage01-pics/_DSC9223.jpg",
  "/images/demontage01-pics/_DSC9235.jpg",
  "/images/demontage01-pics/_DSC9252.jpg",
  "/images/demontage01-pics/_DSC9290.jpg",
  "/images/demontage01-pics/_DSC9299.jpg",
  "/images/demontage01-pics/_DSC9304.jpg",
  "/images/demontage01-pics/_DSC9318.jpg",
  "/images/demontage01-pics/_DSC9337.jpg",
  "/images/demontage01-pics/_DSC9338.jpg",
  "/images/demontage01-pics/_DSC9365.jpg",
  "/images/demontage01-pics/_DSC9390.jpg",
  "/images/demontage01-pics/_DSC9395.jpg",
  "/images/demontage01-pics/_DSC9409.jpg",
  "/images/demontage01-pics/_DSC9425.jpg",
  "/images/demontage01-pics/_DSC9453.jpg",
  "/images/demontage01-pics/_DSC9456.jpg",
  "/images/demontage01-pics/_DSC9457.jpg",
  "/images/demontage01-pics/_DSC9469.jpg",
  "/images/demontage01-pics/_DSC9474.jpg",
  "/images/demontage01-pics/_DSC9490.jpg",
  "/images/demontage01-pics/_DSC9511.jpg",
  "/images/demontage01-pics/_DSC9513.jpg",
  "/images/demontage01-pics/_DSC9525.jpg",
  "/images/demontage01-pics/_DSC9583.jpg",
  "/images/demontage01-pics/_DSC9588.jpg",

  //horizontal pics
  "/images/demontage01-pics/_DSC8632.jpg",
  "/images/demontage01-pics/_DSC8764.jpg",
  "/images/demontage01-pics/_DSC8765.jpg",
  "/images/demontage01-pics/_DSC8969.jpg",
  "/images/demontage01-pics/_DSC8975.jpg",
  "/images/demontage01-pics/_DSC9532.jpg",
  "/images/demontage01-pics/_DSC9565.jpg",
  "/images/demontage01-pics/_DSC9498.jpg",
  "/images/demontage01-pics/_DSC9491.jpg",
  "/images/demontage01-pics/_DSC9193.jpg",
  "/images/demontage01-pics/_DSC9405.jpg",
  "/images/demontage01-pics/_DSC9410.jpg",
  "/images/demontage01-pics/_DSC9418.jpg",
  "/images/demontage01-pics/_DSC8626.jpg",
];
//toggle modal
function toggleModal() {
    const { classList } = document.body;
    if (classList.contains("open")) {
      classList.remove("open");
      classList.add("closed");
    } else {
      classList.remove("closed");
      classList.add("open");
    }
  };


//iterate over array and return images
demontageOnePics.forEach((picture) => {
  const photoAlbum = document.querySelector(".photo-album");

    const imgTag = document.createElement("img");
    imgTag.innerHTML =
    photoAlbum.appendChild(imgTag);

    imgTag.src = `${picture}`;
    imgTag.className = "single-img";
    imgTag.alt = "demontage picture";
    imgTag.loading = "lazy";
    imgTag.addEventListener("click", toggleModal);
    
    //click the image and show in modal
    imgTag.addEventListener("click", (e) => {
        if(imgTag.src === e.target.src) {
            const modalImg = document.querySelector(".modal-img");
            modalImg.src = e.target.src
        }
    })
});




 

