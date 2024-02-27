// const convertFeet=()=>{
//     hInput.innerHTML=`<div class="input-group ps-3" id="">
//     <input type="text" class="form-control " id="feet" placeholder="FEET" aria-label="Recipient's username" aria-describedby="basic-addon2">
//     <span class="input-group-text me-1" id="basic-addon2">FEET</span>
//     <input type="text" class="form-control" id="inch"  placeholder="INCHES" aria-label="Recipient's username" aria-describedby="basic-addon2">
//     <span class="input-group-text" id="basic-addon2">INCHES</span>
// </div>
// <div class="feet-cm mb-3">
//     <div class="card">
//         <a href="#" onclick="convertCm()">Switch to Cm</a>
//     </div>
// </div>`
// }
// const convertCm=()=>{
//     hInput.innerHTML=`<div class="input-group ps-3" id="">
//     <input type="text" class="form-control" id="hCm" placeholder="Height" aria-label="Recipient's username" aria-describedby="basic-addon2">
//     <span class="input-group-text" id="basic-addon2">CM</span>
// </div>
// <div class="cm-feet mb-3">
//     <div class="card">
//         <a href="#" onclick="convertFeet()">Switch to Feet And Inch</a>
//     </div>
// </div>`
// }
/**
 * The above JavaScript function calculates the BMI (Body Mass Index) based on the weight and height
 * inputs, and displays the result along with a progress bar indicating the BMI category.
 */
const getValues=()=>{   
   let weight=document.getElementById("weight").value;
   let height=document.getElementById("hCm").value;
   let bmi=weight/Math.pow((height)/100,2);
   bmi=bmi.toFixed(2)       
   let pbar=document.getElementById("progressbar");
   result.innerHTML=bmi
   pbar.style.width=bmi +"%"
   if(weight.value!==''&&hCm.value!==''){
    err.innerHTML=''
   if(bmi<=18.5){
    progressResult.innerHTML=`<div class="fw-bolder text-center" style="color: rgb(147, 48, 48);;">Under Weight</div>`
    pbar.style.backgroundColor="rgb(147, 48, 48);"
   }
   else if(bmi>18.5 && bmi<=24.9){
    progressResult.innerHTML=`<div class="fw-bolder text-center" style="color: rgb(2, 132, 2)" >Normal</div>`
    pbar.style.backgroundColor="rgb(2, 132, 2)"
   }
   else if(bmi>=25 && bmi<=29.9) {
    progressResult.innerHTML=`<div class="fw-bolder text-center" style="color:yellow;">OverWeight</div>`
    pbar.style.backgroundColor="yellow"
   }
   else  {
    progressResult.innerHTML = `<div class="fw-bolder text-center" style="color:red;">Obese!</div>`
    pbar.style.backgroundColor="red"

   } 
}
else{
    result.innerHTML="0.00"
    err.innerHTML=`Please fill all fields`
}
}
let feet= document.getElementById("feet").value;
let inch= document.getElementById("inch").value;
let cm = (feet * 30.48) + (inch * 2.54);
console.log(cm)