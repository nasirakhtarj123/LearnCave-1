

const questionNumber = document.querySelector(".question-number");
const questiontext = document.querySelector(".question-text");
const optioncontainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questioncounter = 0; 
let currentQuestion;
let setavailableQuestions = [];
let setavailableOptions = [];
let correctAnswer = 0;
let attempt =0;

//push the questions into availableQuestions Array
function setAvailableQuestion(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        setavailableQuestions.push(quiz[i])
    }
}


function getNewQuestion(){

    questionNumber.innerHTML = "Question " + (questioncounter + 1) + " of " + quiz.length;



    const questionIndex = setavailableQuestions [Math.floor(Math.random() * setavailableQuestions.length)]
    currentQuestion = questionIndex;
    questiontext.innerHTML = currentQuestion.q;
    
    const index1= setavailableQuestions.indexOf(questionIndex);

    setavailableQuestions.splice(index1,1);
    


    const optionlen = currentQuestion.options.length

    for(let i=0; i<optionlen; i++){
        setavailableOptions.push(i)
    }
    optioncontainer.innerHTML = '';
    let animationDelay = 0.15;

    for(let i=0; i<optionlen; i++){

        const optonIndex = setavailableOptions[Math.floor(Math.random() * setavailableOptions.length)];

        const index2 = setavailableOptions.indexOf(optonIndex);

        setavailableOptions.splice(index2,1);
        
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay =animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optioncontainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }
    questioncounter++
}


function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        updateAnswersIndicator("correct");
        correctAnswer++;
    }
    else{
        element.classList.add("wrong");
        updateAnswersIndicator("wrong");

        const optionLen = optioncontainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optioncontainer.children[i].id) === currentQuestion.answer){
                optioncontainer.children[i].classList.add("correct");
            }
        }
    }
  attempt++;
  unclickableOptions();
}

function unclickableOptions(){
    const optionLen = optioncontainer.children.length;
    for(let i=0 ; i<optionLen; i++){
        optioncontainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
       answersIndicatorContainer.appendChild(indicator);
    }    
}
function updateAnswersIndicator(markType){
    answersIndicatorContainer.children[questioncounter-1].classList.add(markType)
}

function next(){
    if(questioncounter === quiz.length){
        quizover();
    }
    else{
        getNewQuestion();
    }
}
function quizover(){
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
    const percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML =percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML =correctAnswer +" / " + quiz.length;
}

function resetQuiz(){
     questioncounter = 0; 
     currentQuestion;
     attempt =0;
}

  function tryAgainQuiz(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
  }

  function goToHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}

function startQuiz(){

    homeBox.classList.add("hide");

    quizBox.classList.remove("hide");
    
    setAvailableQuestion();

    getNewQuestion();

    answersIndicator();

}



window.onload = function (){
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
}
