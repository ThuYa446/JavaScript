const quizquestion = [
    {
        question:'The core assumption of globalists is that',
        a:'Globalisation does not exist',
        b:'Globalisation is bad for everyone',
        c:'Globalisation favours the rich',
        d:'Globalisation theoretically increases choice of consumer goods for all',
        answer:'d'
    },
    {
        question:'The core assumption of alter-globalists is that',
        a:'Globalisation benefits all equally',
        b:'Globalisation leads to greater global justice',
        c:'Globalisation is malign, encouraging the rich to become even richer',
        d:'Globalisation benefits minorities',
        answer:'b'
    },
    {
        question:'The core assumption of globalisation sceptics is that',
        a:'Globalisation affects all the world uniformly',
        b:'Globalisation explains world trading patterns',
        c:'Global institutions play an effective role in global governance',
        d:'Globalisation is piecemeal and fragmented in its impact and effects',
        answer:'d'
    },
    {
        question:'International governmental organisations are',
        a:'Key players in global governance',
        b:'Irrelevant to global governance',
        c:'Important in bringing about improved justice and equality',
        d:'Irrelevant in a world dominated by states',
        answer:'a'
    },
    {
        question:'Globalisation affects IR by',
        a:'Increasing the importance of borders between countries',
        b:'Reducing the importance of borders between countries',
        c:'Increasing migration between countries',
        d:'Reducing migration between countries',
        answer:'d'
    }

]
let questionindex = 0;
let score = 0;

const radioEls = document.querySelectorAll(".quiz");
const quiz = document.getElementById('quiz');
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitbtn");

function loadQuestion(){
    deselectanswers();
    question.innerHTML = (questionindex+1)+'. '+ quizquestion[questionindex].question;
    a_text.innerHTML = quizquestion[questionindex].a;
    b_text.innerHTML = quizquestion[questionindex].b;
    c_text.innerHTML = quizquestion[questionindex].c;
    d_text.innerHTML = quizquestion[questionindex].d;
}

function getSelected(){
    let answer = undefined;
    radioEls.forEach((radioEl) =>{
        if(radioEl.checked){
            answer = radioEl.id;
        }
    })
    return answer;
}

function deselectanswers(){
    radioEls.forEach((radioEl) =>{
       radioEl.checked = false;
    })
}

loadQuestion();
submitBtn.addEventListener('click',() => {

    const answer = getSelected();
    if(answer){
        if( answer === quizquestion[questionindex].answer){
           score++;
        }
        questionindex++;
        if(questionindex<quizquestion.length){
            loadQuestion();
        }else{
            quiz.innerHTML ="<h2>Congratulation! You answered correctly at "+score+"/"+quizquestion.length+" questions. </h2>"
        }
    }
    
})