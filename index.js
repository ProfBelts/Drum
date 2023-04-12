// let numberOfDrumButtons= document.querySelectorAll(".drum").length;


//     for (let i=0; i<numberOfDrumButtons; i++) {

//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        
//         let buttonInnerHTML= this.innerHTML;

//         makeSound(buttonInnerHTML);
        
//         buttonAnimation(buttonInnerHTML);

//         })
//     }



//     // Use keydown event listener instead of keypress

//     document.addEventListener("keydown", function(event) {
        
//         makeSound(event.key)

//         buttonAnimation(event.key);

//     })



//     const makeSound= function(key) {

//         switch(key) {
                
//             case "w":
//                 let tom1= new Audio('sounds/tom-1.mp3');
//                 tom1.play();
//             break;

//             case "a":
//                 let tom2= new Audio('sounds/tom-2.mp3');
//                 tom2.play();
//             break;

//             case "s":
//                 let tom3= new Audio('sounds/tom-3.mp3');
//                 tom3.play();
//             break;

//             case "d": 
//                 let tom4= new Audio('sounds/tom-4.mp3');
//                 tom4.play();
//             break;

//             case "j": 
//                 let snare= new Audio('sounds/snare.mp3');
//                 snare.play();
//             break;

//             case "k":
//                 let kick= new Audio('sounds/kick-bass.mp3');
//                 kick.play();
//             break;

//             case "l":
//                 let crash= new Audio('sounds/crash.mp3');
//                 crash.play();
//             break;


//             default: console.log(buttonInnerHTML);         
//         }

//     }

//     const buttonAnimation= function(currentKey) {

//         let activeButton= document.querySelector("." + currentKey);

//          activeButton.classList.add("pressed");



//         setTimeout(function() {
//             activeButton.classList.remove("pressed");
//         }, 100);
//     }




// Re-factored with jQuery


$(document).ready(function(){
   
    
    let numberOfDrumButtons= $(".drum").length;

        for (let i=0; i<numberOfDrumButtons; i++) {
            $(".drum").eq(i).click(function() {
            
            let buttonInnerHTML= this.innerHTML;

            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML)

            // console.log(buttonInnerHTML);

            })
        }

$(document).on("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})


    const makeSound= function(key) {

            switch(key) {
                    
                case "w":
                    let tom1= new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;
    
                case "a":
                    let tom2= new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;
    
                case "s":
                    let tom3= new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;
    
                case "d": 
                    let tom4= new Audio('sounds/tom-4.mp3');
                    tom4.play();
                break;
    
                case "j": 
                    let snare= new Audio('sounds/snare.mp3');
                    snare.play();
                break;
    
                case "k":
                    let kick= new Audio('sounds/kick-bass.mp3');
                    kick.play();
                break;
    
                case "l":
                    let crash= new Audio('sounds/crash.mp3');
                    crash.play();
                break;
    
    
                default: console.log(buttonInnerHTML);         
            }
    
        }


        const buttonAnimation= function(currentKey) {

            let activeButton= $("."+currentKey);

           activeButton.addClass("pressed");

           setTimeout(function () {
            activeButton.removeClass("pressed");
           }, 100)


        }







});