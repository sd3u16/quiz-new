import React, { useEffect } from 'react'
import Button from './Button'
function Question (props) {


    

    const[selected, setSelected] = React.useState('')

    
   

    useEffect(()=>{

        let volo = []
        let hero = 0;
        props.correct.forEach((m)=>{
            volo.push(Object.values(m)[0])
        })

        volo.forEach((v)=>{
            if(props.correct_answers.includes(v)){
                hero+=1
                console.log(hero)
            }
        })

        props.nuro(hero)


    }, [selected])
    
    let answerObjects = []

   

    const [active, setActive] = React.useState();

    
   
  

    


    let incorrecto = props.content.incorrect;

    incorrecto.map((incor)=>{
        answerObjects.push(
            {'incor': incor}
        )
    })

    answerObjects.push({"correct":props.content.correct})

    

    function btnos(){
        answerObjects.forEach(productButton => {
            productButton.addEventListener('click', e => {
              let button = e.currentTarget;
              productButtons.forEach(btn => btn !== button && btn.classList.remove('selected'));
              button.classList.toggle('selected');
            });
          });
    }


  return (
    <div className='qest'> 
        
        <h3 className='qest_3'>{props.content.question}</h3>

        <div className="btns">
            {props.shuffled.map((a, index)=>{
                
                return <button style={a=== selected && !props.check ? { backgroundColor: '#D6DBF5' } : props.check? a===selected? a===props.content.correct? {backgroundColor:'#94D7A2'} : {backgroundColor: '#F8BCBC', opacity: "50%"}:a===props.content.correct? {backgroundColor: "#94D7A2"} : {opacity: "50%"} : {}} onClick={() => {
                    
                    
                    
                    props.setCorrect(res=> {
                      
                       let newState = [...res]
                       newState.forEach((an)=>{
                        if(props.content.question in an){
                               let index = newState.indexOf(an)
                               if(a === props.content.correct){
                                    //
                               }
                               newState[index][props.content.question] = a;
                        }
                       })
                       return newState
                    
                    })

                    
                    
                    setSelected(a)
                    setActive(index)}}>{a}</button>
            })}
        </div>

        
        
    </div>


  )
}

export default Question