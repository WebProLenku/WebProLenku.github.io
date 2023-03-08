var close = document.getElementById("close");
var img = document.getElementById("img");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var cancel = document.getElementById("cancel");
let slideIndex = 0;
function kkt(Image){
    var id = Image.id;
    let gallery = ["1.jpg","2.jpg","3.jpg", "4.jpg"];
    let arrayOfSrc = new Array(gallery.length);
    for (let i = 0; i < arrayOfSrc.length; i++) {
        arrayOfSrc[i] = "/pictures/" + id + "/" + gallery[i];   
    }
    
    img.src = arrayOfSrc[slideIndex];
    next.onclick = function(){
        slideIndex+=1;
        if(slideIndex>arrayOfSrc.length-1){
            slideIndex=0;
        }
        img.src = arrayOfSrc[slideIndex];
    }
    prev.onclick = function(){
        slideIndex-=1;
        if(slideIndex <0){
            slideIndex = arrayOfSrc.length-1;
        }
        img.src = arrayOfSrc[slideIndex];
    }
    slideShow.style.display = "block";
    document.body.classList.add("stop-scrolling");
    close.onclick = function(){
        slideShow.style.display = "none";
        document.body.classList.remove("stop-scrolling");
    }
    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            slideShow.style.display = "none";
            document.body.classList.remove("stop-scrolling");
        }
    })

}
