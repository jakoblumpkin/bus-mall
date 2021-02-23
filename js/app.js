
function Pictures(name, source, displayed, clicked){
    this.name=name;
    this.source=source;
    this.displayed=displayed;
    this.clicked=clicked;

    Pictures.all.push(this);
}

Pictures.all=[];



bag=new Pictures("bag", "img/bag.jpg", 1, 0);
banana=new Pictures("banana", "img/banana.jpg", 1, 0);
bathroom=new Pictures("bathroom", "img/bathroom.jpg", 1, 0);
boots=new Pictures("boots", "img/boots.jpg", 0, 0);
breakfast=new Pictures("breakfast", "img/breakfast.jpg", 0, 0);
bubblegum=new Pictures("bubblegum", "img/bubblegum.jpg", 0, 0);
chair=new Pictures("chair", "img/chair.jpg", 0, 0);
cthulhu=new Pictures("cthulhu", "img/cthulhu.jpg", 0, 0);
dogduck=new Pictures("dogduck", "img/dog-duck.jpg", 0, 0);
dragon=new Pictures("dragon", "img/dragon.jpg", 0, 0);
pen=new Pictures("pen", "img/pen.jpg", 0, 0);
petsweep=new Pictures("petsweep", "img/pet-sweep.jpg", 0, 0);
scissors=new Pictures("scissors", "img/scissors.jpg", 0, 0);
shark=new Pictures("shark", "img/shark.jpg", 0, 0);
tauntaun=new Pictures("tauntaun", "img/tauntaun.jpg", 0, 0);
unicorn=new Pictures("unicorn", "img/unicorn.jpg", 0, 0);
usb=new Pictures("usb", "img/usb.gif", 0, 0);
watercan=new Pictures("watercan", "img/water-can.jpg", 0, 0);
wineglass=new Pictures("wineglass", "img/wine-glass.jpg", 0, 0);



function findPic(url){
    for(let i=0; i<=18; i++){
        if(Pictures.all[i].source==url){
            Pictures.all[i].clicked+=1;
        }

    }

}



let buttonS=document.getElementById("buttonS");
let btn = document.createElement("BUTTON");
let counting=0;



function afterclick(event){
    counting+=1;
    if (counting==25){
        let textnode = document.createTextNode("View Results");
        buttonS.appendChild(btn).appendChild(textnode);
         
    }else{
    findPic(event.target.getAttribute('value'));


    num1=findRandomRange(0, 18);
    num2=findRandomRange(0, 18);
    num3=findRandomRange(0, 18);

    firstImage.setAttribute('value', Pictures.all[num1].source);
    firstImage.src=Pictures.all[num1].source;
    Pictures.all[num1].displayed+=1;

    secondImage.setAttribute('value', Pictures.all[num2].source);
    secondImage.src=Pictures.all[num2].source;
    Pictures.all[num2].displayed+=1;

    thirdImage.setAttribute('value', Pictures.all[num3].source);
    thirdImage.src=Pictures.all[num3].source;
    Pictures.all[num3].displayed+=1;
    }


     

}



let firstImage=document.getElementById("firstImage");
firstImage.addEventListener('click', afterclick);

let secondImage=document.getElementById("secondImage");
secondImage.addEventListener('click', afterclick);

let thirdImage=document.getElementById("thirdImage");
thirdImage.addEventListener('click', afterclick);






let listofresults=document.getElementById("listofresults");

function viewresults(){


    for(let i=0; i<=18; i++){
        let listI=document.createElement("LI");
        let testing=document.createTextNode(Pictures.all[i].name+" vote Count: "+Pictures.all[i].clicked);
        listofresults.appendChild(listI).appendChild(testing);
    }
}

buttonS.addEventListener('click', viewresults);