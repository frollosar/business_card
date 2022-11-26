/* function that makes carousel of images on the front page */
let i = 0;

function carousel(){
    let images = ["./img/lab.png", "./img/programming-evolution.png", "./img/wheat field.png"];
    let image = document.body.getElementsByClassName("preview");
    
     
    if(i == 2){
        i = 0;
        image[0].setAttribute("src", images[i]);
     }
     
     else{
      i++;
      image[0].setAttribute("src", images[i]);
   }    
            
}

setInterval(carousel, 3000);