let low=1;
let high=10;

//chances
let chances=3;



let total_chances=document.querySelector("#chances");
let user_input=document.querySelector("#user_input");

//generate random number
let generate_random_number=(low,high)=>Math.floor(Math.random() * (high - low ) + low);

let correct_answer=generate_random_number(low,high);


while(chances !=0){
    let form=document.querySelector("#form")
    form.addEventListener('submit',(e)=>{
        console.log("running")
        e.preventDefault()
        console.log(chances);
        chances -=1;
    })
    
    break
}
console.log(chances);
    


// function check_result(){

    
// }

