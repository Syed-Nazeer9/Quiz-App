var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "What does CSS stand for?",
        option: {
            a: "Common Style Sheet",
            b: "Color Style Sheet",
            c: "Computer Style Sheet",
            d: "Cascading Style Sheet",

        },
        answer: "Cascading Style Sheet"
    },
    {
        num: 3,
        question: "What does PHP stand for?",
        option: {
            a: "Hypertext preprocessor",
            b: "Hypertext programming",
            c: "Hypertext preprogramming",
            d: "Hometext preprocessor",

        },
        answer: "Hypertext preprocessor"
    }
    ,
    {
        num: 4,
        question: "What does SQL stand for?",
        option: {
            a: "Stylish Question Language",
            b: "Stylesheet Query language",
            c: "statement Question Language",
            d: "Structured Query Language",

        },
        answer: "Structured Query Language"
    }
    ,
    {
        num: 5,
        question: "What does XML Stand for",
        option: {
            a: "eXtensible Markup Language",
            b: "eXectable Multiple Language",
            c: "eXTra Multi-Program Language",
            d: "eXamine Multiple Language",

        },
        answer: "eXtensible Markup Language"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]

var backButton = document.querySelector(".backButton")
 var startButton = document.querySelector(".startButton")
 var quizWrapper = document.querySelector(".quizWrapper")
 var resultWrapper = document.querySelector(".resultWrapper")
 var quizQues = document.getElementById("quizQues")
 var quizOption = document.getElementById("quizOption").children
 var nextBtn = document.getElementById("nextBtn")

 // result elements

 var totalQuesElement = document.getElementById("totalQues")
 var correctQuesElement = document.getElementById("correctQues")
 var wrongQuesElement = document.getElementById("wrongQues")
 var totalScoreElement = document.getElementById("totalScore")


 var counter = 0;
 var correctAnswerCounter = 0;
 var wrongAnswerCounter = 0;
 var totalScore= 0;


 for (var li of quizOption) {
    li.setAttribute("onclick", "selectOption(this)")
 }

 
 function formHandler() {
    var formWrapper = document.querySelector(".formWrapper")

     var inputFields = formWrapper.querySelectorAll("input")
 
     



     for (var input of inputFields) {
         console.log("input", input.value)
         if (!input.value) {
             alert("Enter required fields")
             return
         }
     }
 
     formWrapper.style.display = "none"
     startButton.style.display = "flex"
     backButton.style.display = "flex"

 }
  
 function quizStart() {

     startButton.style.display = "none"
     backButton.style.display = "none"
    quizWrapper.style.display = "block"
console.log(quizOption)
    quizQues.innerHTML = quesArray[counter].question
    quizOption[0].innerHTML = quesArray[counter].option.a
    quizOption[1].innerHTML = quesArray[counter].option.b
    quizOption[2].innerHTML = quesArray[counter].option.c
    quizOption[3].innerHTML = quesArray[counter].option.d
 
 }

 function goBack(){
    var formWrapper = document.querySelector(".formWrapper")

    formWrapper.style.display = "flex"

    backButton.style.display = "none"
    startButton.style.display = "none"
}

 function nextButton() {
    if ( counter < quesArray.length-1){

    
    counter++
    quizQues.innerHTML = quesArray[counter].question
    quizOption[0].innerHTML = quesArray[counter].option.a
    quizOption[1].innerHTML = quesArray[counter].option.b
    quizOption[2].innerHTML = quesArray[counter].option.c
    quizOption[3].innerHTML = quesArray[counter].option.d
 }
 else{
    quizWrapper.style.display = "none"
    resultWrapper.style.display = "block"

    totalQuesElement.innerHTML = quesArray.length
    correctQuesElement.innerHTML = correctAnswerCounter
    wrongQuesElement.innerHTML= wrongAnswerCounter
    totalScoreElement.innerHTML = totalScore
 }
 for (var li of quizOption) {
    li.classList.remove("disableLi")
    li.classList.remove("wrongAnswer")
    li.classList.remove("correctAnswer")
}

nextBtn.style.display = "none"

}

function selectOption(element) {
    if(element.innerHTML === quesArray[counter].answer){
        correctAnswerCounter++
        totalScore +=5
element.className = "correctAnswer"
    }
else{
    wrongAnswerCounter++
    element.className = "wrongAnswer"
    for (var li of quizOption) {
        if(li.innerHTML === quesArray[counter].answer){
li.classList.add("correctAnswer")
break
        }
        
    }
}
for (var li of quizOption) {
    li.classList.add("disableLi")
}

nextBtn.style.display = "block"

}