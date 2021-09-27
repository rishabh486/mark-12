var sides=document.querySelectorAll(".side-input")
var hypotenusebtn=document.querySelector("#hypotenuse")
var output=document.querySelector("#output-box")

function calculateHypotenuse() {
   const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value))
   const lengthOfHypotenuse=Math.sqrt(sumOfSquares)
   output.innerText="The length of hypotenuse is"+lengthOfHypotenuse

}
function calculateSumOfSquares(a,b) {
    const sumOfSquares=a*a+b*b
    return sumOfSquares


}

hypotenusebtn.addEventListener('click',calculateHypotenuse)