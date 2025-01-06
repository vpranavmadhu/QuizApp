import React, { use, useState } from 'react'
import {data} from './data'
import './quizstyle.css'
export default function Quizapp() {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState('');
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const correctAnswer = ['Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1'];

  const handleNext = ()=>{
    if(index<data.length-1) {
      if(correctAnswer[index] === option) {
        setScore(score + 1);
      }
       setIndex(index + 1)
    setOption(null);
    }  else {
      setFinished(true);
    }
   
  }
  if(finished) {

    return (
      <div className='scorePage'>
    <h3>Quiz Finished</h3>
    <h3>Your score is {score} out of {data.length}</h3>

    </div>
    )
  }  

  const handleSelect = (optn)=>{
    setOption(optn);
  }

  return (
    <div className='quiz'>
        <h1>{data[index].Question}</h1>
        <ul>
          <li  className= {option === 'Option1'? 'selected':''} 
          onClick={()=>{handleSelect('Option1')}}>{data[index].Option1}</li>
          <li 
          className= {option === 'Option2'? 'selected':''}
          onClick={()=>{handleSelect('Option2')}}>{data[index].Option2}</li>
          <li className= {option === 'Option3'? 'selected':''}
          onClick={()=>{handleSelect('Option3')}}>{data[index].Option3}</li>
          <li className= {option === 'Option4'? 'selected':''} 
          onClick={()=>{handleSelect('Option4')}}>{data[index].Option4}</li>
        </ul>

        <button onClick={handleNext} disabled={!option}>NEXT</button>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
  )
}
