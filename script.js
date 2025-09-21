

const questions = [
    {
        question: "Rohit Sharma scored his first ODI doble century against which team?",
        answers: [
            { text: "Australia",  correct: true },
            { text: "New Zealand", correct: false  },
            { text: "England",    correct: false },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "Rohit Sharma made his ODI debut in 2007 against which team?",
        answers: [
            { text: "Australia",  correct: false },
            { text: "New Zealand", correct: false  },
            { text: "England",    correct: false },
            { text: "Ireland", correct: true  }
        ]
    }, 
    {
        question: "Rohit Sharma's first IPL century was scored against which team?",
        answers: [
            { text: "Royal Challengers Bangalore", correct: false },
            { text: "Chennai Super Kings", correct: false },
            { text: "Kolkata Knight Riders", correct: true },
            { text: "Sunrisers Hyderabad", correct: false }
        ]
    },
    {
        question: "In which year was Rohit Sharma appointed as India's full-time T20I captain?",
        answers: [
            { text: "2020", correct: false },
            { text: "2021", correct: true  },
            { text: "2019", correct: false },
            { text: "2018", correct: false }
        ]
    },
    {
        question: "Rohit Sharma is the only batsman to score how many double centuries in ODIs?",
        answers: [
            { text: "2", correct: false },  
            { text: "4", correct: false  },
            { text: "3", correct: true  },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which domestic team did Rohit Sharma represent in the Syed Mushtaq Ali Trophy?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Delhi", correct: false  },
            { text: "Karnataka", correct: false },
            { text: "Tamil Nadu", correct: false }  
        ]
    },
    {
        question: "Rohit Sharma's highest score in Test cricket is?",
        answers: [
            { text: "211", correct: false },
            { text: "212", correct: true  },
            { text: "264", correct: false },
            { text: "274", correct: false }
        ]
    },
    {
        question: "In which year did Rohit Sharma captain India to a T20 World Cup victory?",
        answers:[
            {text: "2021", correct: false },
            {text: "2024", correct: true  },
            {text: "2016", correct: false },
            {text: "2014", correct: false }
        ]
    },
    {
        question: "Rohit Sharma total international centuries across all formats is?",
        answers: [
            {text: "47",correct: false },
            {text: "49",correct: true  },
            {text: "48",correct: false },
            {text: "50",correct: false }

        ]
    },
    {
        question: "Rohit Sharma's mother and father name?",
        answers: [
            {text: "Gurunath Sharma and Purnima Sharma",correct: true},
            {text: "Ramesh Sharma and Roshini Sharma",correct: false},
            {text: "Sumit Sharma and Rani Sharma",correct: false},
            {text: "Prince Sharma and Bisut Sharma",correct: false}
        ]
    },

    {
        question: "Before becoming a regular opener, Rohit Sharma made his Test debut batting at which position in batting order?",
        answers: [
            {text: "4",correct: false},
            {text: "5",correct: false},
            {text: "6",correct: true},
            {text: "7",correct: false}
        ]
    },

    {
        question: "Rohit Sharma was first spotted by his childhood coach who later helped him get into cricket professionaly. What is his coach's name?",
        answers: [
            { text: "Dinesh Lad", correct: true },
            { text: "Ramakant Achrekar", correct: false  },
            { text: "Sandeep Patil", correct: false },
            { text: "Anil Kumble", correct: false }
        ]
    },

    {
        question: "Rohit Sharma's  Wife name is?",
        answers: [
            { text: "Ritika Sharma", correct: false },
            { text: "Anushka Sharma", correct: false  },
            { text: "Priyanka Sharma", correct: false },
            { text: "Ritika Sajdeh", correct: true }
        ]
    },
   
    {
        question: " Who is the biggest fan of Rohit Sharma in India?",
        answers: [
            {text: "Prince Singh",correct: false},
            {text: "Nitesh Yadav",correct: false},
            {text: "Sumit Chouhan",correct: true},
            {text: "Ayush Kumwer",correct: false}
        ]
    },

    {
        question: "Ye vala sawal hai personally Rohit Sharma ke fans ke liye, Jab Rohit tavadtod century marrta hai tab tum kya krte ho?",
        answers: [
            {text: "Man hi Man khus hote ho",correct: false},
            {text: "Jor Jor se chilla kr celebrate krte ho ",correct: false},
            {text: "Ya sabse pehle insta pe story lagate ho",correct: true},
            {text: "Ya Haters ki jalate ho..",correct: false}
        ]
    },
]


//bhai ye hum la rhe hai html se or unhe hum variable me store kr rhe hai


const timerElement = document.querySelector('.timer');
const timerbarElement = document.getElementById('timer-bar');

let questionNumberElement = document.getElementById('question-number');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


// isse hum question number or tumhara score dikhayenge

let currentQuestionIndex = 0;
let score = 0;
timerinterval = null;
isAnswered = false;


function showAnswer() {

 Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    })

}

// create a function to starttimer...

function startTimer() {

    let timeleft = 59;
    const totaltime = 59;
    timerElement.innerText = timeleft;
    timerbarElement.style.transition = 'none';
    timerbarElement.style.width = '100%';

    void timerbarElement.offsetWidth;  // Trigger a reflow to reset the transition
    timerbarElement.style.transition = `width ${totaltime}s linear`;
    timerbarElement.style.width = '0%';
    
    timerinterval = setInterval(() => {
        timeleft--;
        timerElement.innerHTML= timeleft;

        if(timeleft <= 0){
            clearInterval(timerinterval)
            timerElement.innerHTML = 0
            showNextQuestion()

            if(!isAnswered){
                showAnswer();
                setTimeout(showNextQuestion, 1000);
            }
        }

    }, 1000);

};


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct){
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    showAnswer();
    isAnswered = true;
    setTimeout(showNextQuestion, 1000);
}

// create a function to show options

function showOptions(currentquestion) {
    currentquestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);

        // this is for checking the answer
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}

// create a function to print next questions..


function resetstate(){

while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}

}


// create a function to show the question

function showQuestion() {
resetstate()
startTimer()
let currentquestion = questions[currentQuestionIndex];
let questionNumber = currentQuestionIndex + 1;
questionNumberElement.innerText = `Q ${questionNumber} of ${questions.length}`;
questionElement.innerHTML = currentquestion.question;
showOptions(currentquestion)

}

// this function will show the score when the quiz is over

function showscore(){

    timerElement.style.visibility = 'hidden';
    timerbarElement.style.visibility = 'hidden';
    questionNumberElement.style.visibility = 'hidden';
    clearInterval(timerinterval);
    resetstate();
    questionElement.innerHTML = `Your Score: ${score} out of ${questions.length}! <br> <br> Well Played Champ..`;
    answerButtonsElement.innerHTML = `<button class="btn-play-again" onclick="location.reload()">Play Again</button>`;
    questionNumberElement.style.visibility = 'hidden';


}

// this is for to show the next question...

function showNextQuestion(){
clearInterval(timerinterval)

if(currentQuestionIndex < questions.length){
showQuestion()
}
else{
    showscore();
}
    currentQuestionIndex++;
}

   
//create a functon to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showNextQuestion();
}
    
startQuiz();

const starscreen = document.querySelector('.start-screen');
const startbutton = document.getElementById('start-btn');
const quizapp = document.querySelector('.app');

startbutton.addEventListener('click', () => {
    starscreen.style.display = 'none';
    quizapp.style.display = 'block';
    startQuiz();
});