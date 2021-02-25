"use strict";
function Pictures(name, source, displayed, clicked){
    this.name=name;
    this.source=source;
    this.displayed=displayed;
    this.clicked=clicked;

    Pictures.all.push(this);

}

Pictures.all=[];





let bag=new Pictures("bag", "img/bag.jpg", 1, 0);
let banana=new Pictures("banana", "img/banana.jpg", 1, 0);
let bathroom=new Pictures("bathroom", "img/bathroom.jpg", 1, 0);
let boots=new Pictures("boots", "img/boots.jpg", 0, 0);
let breakfast=new Pictures("breakfast", "img/breakfast.jpg", 0, 0);
let bubblegum=new Pictures("bubblegum", "img/bubblegum.jpg", 0, 0);
let chair=new Pictures("chair", "img/chair.jpg", 0, 0);
let cthulhu=new Pictures("cthulhu", "img/cthulhu.jpg", 0, 0);
let dogduck=new Pictures("dogduck", "img/dog-duck.jpg", 0, 0);
let dragon=new Pictures("dragon", "img/dragon.jpg", 0, 0);
let pen=new Pictures("pen", "img/pen.jpg", 0, 0);
let petsweep=new Pictures("petsweep", "img/pet-sweep.jpg", 0, 0);
let scissors=new Pictures("scissors", "img/scissors.jpg", 0, 0);
let shark=new Pictures("shark", "img/shark.jpg", 0, 0);
let tauntaun=new Pictures("tauntaun", "img/tauntaun.jpg", 0, 0);
let unicorn=new Pictures("unicorn", "img/unicorn.jpg", 0, 0);
let usb=new Pictures("usb", "img/usb.gif", 0, 0);
let watercan=new Pictures("watercan", "img/water-can.jpg", 0, 0);
let wineglass=new Pictures("wineglass", "img/wine-glass.jpg", 0, 0);

function NonRepeat(num1, num2, num3){
    this.num1=num1;
    this.num2=num2;
    this.num3=num3;
    
}


let checkrepeat=new NonRepeat(0,0,0);

function addtoLocalser(value){
    const JSONPic=JSON.stringify(value);
    localStorage.setItem('Pic', JSONPic);
}

let javaV=null;
 if (localStorage.length==0){
    addtoLocalser(Pictures.all);
    const localInfo=localStorage.getItem('Pic');
    javaV=JSON.parse(localInfo);
 }else{
    const localInfo=localStorage.getItem('Pic');
    javaV=JSON.parse(localInfo);
 }



let text1=document.getElementById("1text");
let text2=document.getElementById("2text");
let text3=document.getElementById("3text");

text1.innerHTML="Votes: "+javaV[0].clicked;
text2.innerHTML="Votes: "+javaV[1].clicked;
text3.innerHTML="Votes: "+javaV[2].clicked;








function findPic(url){
    for(let i=0; i<=18; i++){
        if(javaV[i].source==url){
            javaV[i].clicked+=1;
        }

    }
    addtoLocalser(javaV);
}






let buttonS=document.getElementById("buttonS");
let btn = document.createElement("BUTTON");
let counting=0;
let number=0;


function afterclick(event){
    counting+=1;
    if (counting==25){
        let textnode = document.createTextNode("View Results");
        buttonS.appendChild(btn).appendChild(textnode);

        firstImage.removeEventListener("click", afterclick);
        secondImage.removeEventListener("click", afterclick);
        thirdImage.removeEventListener("click", afterclick);

         
    }else{
    findPic(event.target.getAttribute('value'));
   
    
    
    let num1=findRandomRange(0, 18);
    let num2=findRandomRange(0, 18);
    let num3=findRandomRange(0, 18);

    while((num1==num2) || (num2==num3 ) || (num3==num2) || (num3==num1)
          || checkrepeat.num1==num1    
          || checkrepeat.num2==num1  
          ||  checkrepeat.num3==num1  
          || checkrepeat.num1==num2   
          || checkrepeat.num2==num2  
          ||  checkrepeat.num3==num2
          || checkrepeat.num1==num3 
          || checkrepeat.num2==num3  
          ||  checkrepeat.num3==num3 ){
        num1=findRandomRange(0, 18);
        num2=findRandomRange(0, 18);
        num3=findRandomRange(0, 18);
    }

    checkrepeat.num1=num1;
    checkrepeat.num2=num2;
    checkrepeat.num2=num2;



    firstImage.setAttribute('value', Pictures.all[num1].source);
    firstImage.src=Pictures.all[num1].source;
    javaV[num1].displayed+=1;
    text1.innerHTML="Votes: "+javaV[num1].clicked;

    secondImage.setAttribute('value', Pictures.all[num2].source);
    secondImage.src=Pictures.all[num2].source;
    javaV[num2].displayed+=1;
    text2.innerHTML="Votes: "+javaV[num2].clicked;


    thirdImage.setAttribute('value', Pictures.all[num3].source);
    thirdImage.src=Pictures.all[num3].source;
    javaV[num3].displayed+=1;
    addtoLocalser(javaV);
    text3.innerHTML="Votes: "+javaV[num3].clicked;
    }


     
 
}





let firstImage=document.getElementById("firstImage");
firstImage.addEventListener('click', afterclick);

let secondImage=document.getElementById("secondImage");
secondImage.addEventListener('click', afterclick);

let thirdImage=document.getElementById("thirdImage");
thirdImage.addEventListener('click', afterclick);

///list of Names
let names=[];
function listOfnames(){
    for(let i=0; i<=18; i++){
        names.push(Pictures.all[i].name);
    }
    return names;
}
let listOfclicked2=[];
function listOfclicked(){
    for(let i=0; i<=18; i++){
        listOfclicked2.push(javaV[i].clicked);
    }
    return listOfclicked2;
}


function callChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        
        // The type of chart we want to create
        type: 'horizontalBar',

        // The data for our dataset
        data: {
            labels: listOfnames(),
            datasets: [{
                label: 'Voting Results',
                backgroundColor: 'white',
                textColor: 'white',
                borderColor: 'white',
                data: [1,2,3,4,5,6,7,8,9,10],
                data:  listOfclicked()
            }]
        },

        // Configuration options go here
        options: {}
    });


}

















let listofresults=document.getElementById("listofresults");

function viewresults(){


    for(let i=0; i<=18; i++){
        let listI=document.createElement("LI");
        let testing=document.createTextNode(Pictures.all[i].name+" vote Count: "+Pictures.all[i].clicked);
        listofresults.appendChild(listI).appendChild(testing);
    }
}

buttonS.addEventListener('click', callChart);