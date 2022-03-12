// console.log("ysgdsik");
const images = [
    "images/label-1.png",
    "images/label-2.png",
    "images/label-3.png",
    "images/label-4.png",
    "images/label-5.png",
    "images/label-6.png",
    "images/label-7.png",
    "images/label-8.png",
    "images/label-9.png",
    "images/label-10.png",
    "images/label-11.png",
    "images/label-12.png",
    "images/label-13.png",
    "images/label-14.png",
    "images/label-15.png",
    "images/label-16.png",
];
    let sliderImgIndex=0;
    const ImageElement = document.getElementById("labelImg");
    setInterval(() => {
    if (sliderImgIndex >= images.length) {
        sliderImgIndex = 0;
    }
    const imgSrc = images[sliderImgIndex];
    ImageElement.setAttribute("src", imgSrc);
    sliderImgIndex++;
    // console.log(imgSrc);
}, 1500);