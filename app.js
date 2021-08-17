var firstAngle=document.querySelector('#angle-one')
var secondAngle=document.querySelector('#second-angle')
var thirdAngle=document.querySelector('#third-angle')
var checkBtn=document.querySelector('#check-btn')
var outputBox=document.querySelector('#output-box')



console.log(firstAngle.nodeValue)


checkBtn.addEventListener('click',checkTriangles)


function checkTriangles() {
    console.log("hi")
       var a1=Number(firstAngle.value)
    var a2=Number(secondAngle.value)
  var a3=Number(thirdAngle.value ) 
     calculateAngles(a1,a2,a3)

}

function calculateAngles(one,two,three) {
    if(one+two+three==180){
        showOutput('forms a triangle')
        console.log("hi")
    }
    else{
        showOutput(`doesn't form a triangle`)
    }
}

function showOutput(message){
    outputBox.innerHTML=message
}


