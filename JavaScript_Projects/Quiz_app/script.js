const questions = [
    {
      "question": "What is the capital of France?",
      "answers": [
        { "text": "Paris", "correct": true },
        { "text": "London", "correct": false },
        { "text": "Berlin", "correct": false },
        { "text": "Madrid", "correct": false }
      ]
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "answers": [
        { "text": "Mars", "correct": true },
        { "text": "Venus", "correct": false },
        { "text": "Jupiter", "correct": false },
        { "text": "Saturn", "correct": false }
      ]
    },
    {
      "question": "Who wrote 'Hamlet'?",
      "answers": [
        { "text": "William Shakespeare", "correct": true },
        { "text": "Charles Dickens", "correct": false },
        { "text": "Jane Austen", "correct": false },
        { "text": "Mark Twain", "correct": false }
      ]
    },
    {
      "question": "Which gas do plants absorb from the atmosphere?",
      "answers": [
        { "text": "Carbon Dioxide", "correct": true },
        { "text": "Oxygen", "correct": false },
        { "text": "Nitrogen", "correct": false },
        { "text": "Hydrogen", "correct": false }
      ]
    },
    {
      "question": "What is the square root of 64?",
      "answers": [
        { "text": "8", "correct": true },
        { "text": "6", "correct": false },
        { "text": "10", "correct": false },
        { "text": "4", "correct": false }
      ]
    }
  ]

const questionElement =document.querySelector(".question");
const answersButton = document.querySelector(".answer_buttons");
const nextButton =document.querySelector(".next-btn"); 

let currentQuestionIndex = 0;
let score =0; 

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");

        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer);

        answersButton.appendChild(button);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(e){
  const selectBtn=e.target;
  const isCorrect= selectBtn.dataset.correct==="true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  }
  else{
    selectBtn.classList.add("incorrect");
  }
  Array.from(answersButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handelNextButton();
  }
  else{
    startQuiz();
  }
});

function handelNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}
function showScore(){
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML ="Play Again";
  nextButton.style.display ="block"
}

startQuiz();