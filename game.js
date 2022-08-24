const areyousure = document.getElementById("are_you_sure");
const kolkata= document.getElementById('kolkata');
const newdelhi = document.getElementById('newdelhi');
const chennai = document.getElementById('chennai');
const sure= document.getElementById('sure');
const not_sure = document.getElementById('not_sure');
const game2 = document.getElementById('game2')

//to make areyousure popup disappear
const btn = document.querySelectorAll('.radio_buttons'); //using the class name or can also use input tag
not_sure.addEventListener('click',function(){
    areyousure.style.display = "none";
    game2.style.height = "300px"

})

//to display are you sure after the selection of the radio button
console.log(btn)
btn.forEach(function(btn){//iterates over the btn 
    btn.addEventListener('click',function(){
        areyousure.style.display = "block";
        game2.style.height = "500px";
    })
})



console.log(typeof(newdelhi.value))
console.log(typeof(sure))

//to open new page after clicking sure and correct option.
//opening the final page WIN page


    newdelhi.addEventListener('click',function(){
        sure.addEventListener('click',function(){
       
        location.href= "game3.html";
    })

    })


//TO open the LOse page    
kolkata.addEventListener('click',function(){
    sure.addEventListener('click',function(){
        location.href = "lost.html"

})
})

chennai.addEventListener('click',function(){
    sure.addEventListener('click',function(){
        location.href = "lost.html"
    })
})
   
