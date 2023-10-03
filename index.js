function mainSlider() {
    var myimage = document.getElementById("myimg");
    myimage.style.borderRadius = "20px";
    myimage.style.transitionProperty = "margin-left";
    myimage.style.transitionDuration = "2s";

    myimage.style.marginLeft = "0px";

    var index = 1;
    var max = 4;
    setInterval(() => {
        myimage.style.marginLeft = `-${index * 1000}px`;
        index++;
        if (index == max) {
            index = 0;
        }
    }, 1000);
}
let carname = document.getElementById("model");
let miniGallery = document.getElementById("miniGallery");
for (let i = 0; i < 15; i++) {
    miniGallery.innerHTML += `<img id="imgs32" src="images/${i + 1}.jpg"></img>`
}
var mainImg = document.getElementById("myimg");
let childrens = miniGallery.children
for (let i = 0; i < childrens.length; i++) {
    childrens[i].setAttribute("draggable", false);
    childrens[i].addEventListener("click", (e) => {
        mainImg.src = childrens[i].src;
    });
}

var mouseX1 = 0;
var mouseX2 = 0;
document.onmousedown = (e) => {
    mouseX1 = e.clientX;
};

var myimage = document.getElementById("imgs32");
myimage.style.transitionProperty = "margin-left";
myimage.style.transitionDuration = "2s";

myimage.style.marginLeft = "0px";

var index = 1;
var max = 3;
document.onmouseup = (e) => {
    if ((e.clientX - mouseX1) < 0) {
        if (index == 0) {
            index++;
        }
        if (index != max) {
            myimage.style.marginLeft = `-${index * 800}px`;
            index++;
        }
        else {
            myimage.style.marginLeft = "0px";
            index = 1;
        }
        console.log(index)
    }
    else if ((e.clientX - mouseX1) > 100) {
        if (index != 1) {

            index--;
        }
        index--;
        myimage.style.marginLeft = `-${index * 800}px`;

    }
};
