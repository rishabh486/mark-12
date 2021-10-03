var quizForm=document.querySelector(".quiz-form")
var submitAnswerButton=document.querySelector("#submit-answer-btn")
var outputEl=document.querySelector("#output")



var correctAnswers=["90","right angled"]


function calculateScore() {
    let score=0
    let index=0
    const formResults= new FormData(quizForm)
    for(let value of formResults.values()) {
        if(value==correctAnswers[index]) {
            score=score+1
        }
        index++
    }
    outputEl.innerHTML=(`your score is${score}`)

}




submitAnswerButton.addEventListener('click',calculateScore)