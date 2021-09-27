var sides=document.querySelectorAll('.side-input')
var areaBtn=document.querySelector('#area')
var outputbox=document.querySelector('#output')


function calculateArea() {
    var answer=calculate(Number(sides[0].value),Number(sides[1].value))
    var area1=answer/2
    outputbox.innerText=area1
    console.log('hi')


}


function calculate(a,b) {
    var area=a*b
    return area

}







areaBtn.addEventListener('click',calculateArea)