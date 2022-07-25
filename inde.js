//task1:
console.log(`%cTask 1 `, `color:BLUE; font-size:20px`);
console.log(`%cPrinting numbers in the interval `, `color:red; font-size:20px`);
let b=prompt("Print number from .... to .... (example: 10-15)");

if (b.split("-")[0]<b.split("-")[1]){
    let i=b.split("-")[0];
    console.log(`This is the case where the 1st number <  then the 2nd`);
    while (i<=b.split("-")[1]){
        console.log(i);
        i++;
    }
}else{
    console.log(`This is the case where the 1st number >  then the 2nd`);
    let i=b.split("-")[0];
    while (i>=b.split("-")[1]){
        console.log(i);
        i--;
    }
}
//task2:
console.log(`%cTask 2`, `color:BLUE; font-size:20px`);
console.log(`%cCreating a pop after 5 seconds`, `color:red; font-size:20px`);

//creating the popup and hidding it.


 setTimeout(createPop, 2000);                        
function createPop(){

//creating the popup and hidding it.
const myDiv=document.createElement("div");
const title=document.createElement('h1');
title.style.cssText=`color:#000;
                    font-size:28px;
                    `;
title.innerHTML="Welcome";
const parag=document.createElement('p');
parag.style.cssText=`color:#000;
                    font-size:20px;
                    text-align:center;
                    `;
parag.innerHTML="Welcome to Elzero web school";
const btnClose=document.createElement("button");
btnClose.textContent="close";
btnClose.onclick = function () {
    myDiv.remove();
  };
btnClose.style.cssText=`position:absolute;
                    top: -10px;
                    right:-10px;
                    height: 50px;
                    width:50px;
                    color:white;
                    cursor:pointer;
                    border-radius:50%;
                    background-color:red;
                    border:none;
                    `
myDiv.appendChild(title);
myDiv.appendChild(parag);
myDiv.appendChild(btnClose);
document.body.appendChild(myDiv);
//styling:
myDiv.style.cssText=`height: 150px;
                    width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                    background-color:white;
                    border:1px solid grey;
                    box-shadow: 0px 0px 5px grey;
                    color: #000;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items:center;
                    padding: 25px;
                    position:relative;
                    `;
                    
    
}

//task3:
console.log(`%cTask 3 `, `color:BLUE; font-size:20px`);
console.log(`%cCreating a countdown `, `color:red; font-size:20px`);   
const countDownDiv= document.createElement("div");
countDownDiv.style.cssText=`margin-left:auto;
                            margin-right:auto;
                            height: 100px;
                            width: 100px;
                            background-color:#f2f2f2;
                            border: 2px dashed grey;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            position:absolute;
                            bottom: 100px;
                            right: 500px;`;
const countP= document.createElement("p");
countP.innerHTML="10";
countP.style.cssText=`color:black; font-size: 24px; text-align:center;`
countDownDiv.appendChild(countP);
document.body.append(countDownDiv);





function compteArebours (){

    console.log(countDownDiv.textContent)
    countDownDiv.textContent--;
    
    // clearInterval(compteur);
    if (countDownDiv.textContent == "0") {
        clearInterval(compteur);
        alert('times is over!')
    }
}
let compteur=setInterval(compteArebours,1000);
console.log('compteur est'+compteur)

// countDwon ();

