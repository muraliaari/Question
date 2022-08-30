const areyousure = document.getElementById("are_you_sure");
const kolkata= document.getElementById('kolkata');
const newdelhi = document.getElementById('newdelhi');
const chennai = document.getElementById('chennai');
const sure= document.getElementById('sure');
const not_sure = document.getElementById('not_sure');
const game2 = document.getElementById('game2')

const radio = document.getElementsByClassName('radio')
console.log(radio)

const rightvalue = "newdelhi";
let userSelctedValue;

//To display areyousure after clicking the radio button.
for(let i=0; i< radio.length; i++){
    radio[i].addEventListener('change',function(event){
        areyousure.style.display = "block";
        game2.style.height = "500px";
        userSelctedValue = event.target.value;
    })
}


//To open the Congratulations page
sure.addEventListener('click',function(){
    if(userSelctedValue == rightvalue){
        location.href = "game3.html"
    }
    else{
        location.href = "lost.html"
    }
})


//To open Lost page
not_sure.addEventListener('click',function(){
    for(i=0;i<radio.length;i++){
        radio[i].checked = false; //reseting the radio buttons
    }
    areyousure.style.display = "none";
    game2.style.height = "300px";
})



