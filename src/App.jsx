import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { nanoid } from 'nanoid'
import Question from './Question'

function App() {


  const[questions, setQuestions] = useState([])

  const[check, setcheck] = useState(false)

  const[finished, setFinished] = useState(false)

  const[correct, setCorrect] = useState([])

  const[nuro, setNuro] = useState(0)


  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
} 

 

  useEffect(()=>{
     let isFull = true;
     let volos = []
     correct.forEach((a)=>{
        volos.push(Object.values(a)[0])
     })

     volos.forEach((v)=>{
        if(v === ""){
          isFull = false;
        }
     })

     console.log(isFull)
     console.log(volos)
     
     if(isFull){
      let btne = document.getElementById('checkin')
      if(btne){
        console.log(btne)
        btne.disabled = false;
        btne.style.opacity  = '100%'
        btne.addEventListener("click", function() {
          setFinished(true)
          setcheck(true)
        });
      }
     }
     
     
      
     

     

  }, [correct])


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

  


  function fetchData(){
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res=>res.json())
      .then(data=>{

        let objon = []
        let all = []
        let correct_answers = []
        data.results.map((res)=>{

            
            let core = {}
            let correct = decodeHtml(res.correct_answer);
            let incorrect = res.incorrect_answers.map((h)=>{
              return decodeHtml(h)
            });
            let question = decodeHtml(res.question)
            let id = nanoid()
            core[question] = ""
            objon.push(core)
            correct_answers.push(correct)
            all.push({correct: decodeHtml(correct), incorrect: incorrect, question: decodeHtml(question), id:id,correct_answers: correct_answers, shuffled: shuffleArray([...incorrect, correct])})
        })

        setQuestions(all)
        setCorrect(objon)
      })

      
      
        
      
  }

  

  return (
    questions.length > 0 ?
    
    <div className='maino maino-2'>
    {questions.map((q)=>{
     return <Question nuro={setNuro} correct_answers = {q.correct_answers} correct={correct} setCorrect={setCorrect} finish = {finished} shuffled={q.shuffled} check={check} content = {q}/>
    })}

    {finished === false? <button id="checkin" style={{opacity: '50%'}} disabled={true} onClick={()=>{
      
      setFinished(true)
      setcheck(true)}} className="btn-start check">Check answers
    </button>
    :
    <div className='finish-box'>You scored {nuro}/{questions.length} correct answers <button onClick={()=>{
      setcheck(false)
      setCorrect([])
      setFinished(false)
      setQuestions([])}} className='btn-start'>Play again</button></div>}

    
    
    
    
    
     
    
    
  </div>


    
    
    
    :
    <main className='maino '>

      <h1 className='maino_h2'>Quizzical</h1>
      <p className='maino_p'>Some description if needed</p>
      <button onClick={fetchData} className="btn-start">Start quiz</button>
    </main>

   
  )
}

export default App
