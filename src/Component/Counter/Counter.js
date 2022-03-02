import React from 'react'
import './counter.css'
function Counter() {
    const [time, settime] = React.useState(10);
    const [title, settitle] = React.useState('Let the Count down begin')
    const intervalref = React.useRef(null)

    const minutes = Math.floor(time/60)
    const seconds =  (time - minutes * 60).toString().padStart(2,'0');
    
    
     
    function startTimer() {
      if (intervalref.current !== null ) return   

    intervalref.current =  setInterval(() => {

         settime (prev => {
              if ( prev  >  0 ) {
    settitle(' doing great ')

                return prev - 1 

              } else {
                settime(0)
                settitle('Times Up')
              }
              
              
         })  
        }, 1000);

    }

   function  stopTimer() {
    if (intervalref.current === null ) return  
    clearInterval(intervalref.current)
    intervalref.current = null
   }
     
   function reset() {
    clearInterval(intervalref.current)
    intervalref.current = null
    settime(10)
    settitle('Start new Session')
   }

     return (
        <div className = 'Counter' >
            <h2> {title}     </h2>
          <div className = " title" >
      
          <span> {minutes} </span>
          <span> : </span>
          <span> {seconds} </span>
          
          </div>
          <div className = 'buttons' >
          <button onClick = {startTimer}   > Start </button>
          <button onClick = {stopTimer}  > Stop </button>
          <button onClick = {reset} > Reset </button>
          </div>
        </div>
    )
}

export default Counter
