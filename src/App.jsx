import { useState, useSyncExternalStore } from 'react'
import './App.css'
import { useFormState } from 'react-dom'
let _userscore=0
let _computerscore=0
let _rounds=0
let _streak=0
function App(){
  let [computerMove,changecomputerMove]=useState("")
  let [userMove,changeUserMove]=useState("")
  let [userScore,setScore]=useState(0)
  let [computerScore,changeScore]=useState(0)
  let [winner,changeWinner]=useState("")
  let [totalround,changeround]=useState(0)
  let [streak, changeStreak]=useState(0)
  let [history, setHistory] = useState([])

  function handleClick(_usermove){
    let _winner=""
    let randomNumber=Math.random()
    let _computermove=""
    if(randomNumber<0.34){
      _computermove="Rock"
    }else if(randomNumber<0.64){
      _computermove="Scissor"
    }else{
      _computermove="Paper"
    }

    if(_computermove==_usermove){_winner="Draw"}
    else if(
      _computermove=="Rock" && _usermove=="Paper"||
      _computermove=="Paper" && _usermove=="Scissor"||
      _computermove=="Scissor" && _usermove=="Rock"
    ){
      _userscore++
      _winner="User"
      _streak++
    }else{
      _computerscore++
      _winner="Computer"
      _streak=0
    }
    _rounds++
    changecomputerMove(_computermove)
    changeUserMove(_usermove)
    setScore(_userscore)
    changeScore(_computerscore)
    changeWinner(_winner)
    changeround(_rounds)
    changeStreak(_streak)
    setHistory([...history, `You: ${_usermove} | Computer: ${_computermove} | ${_winner}`])
  }
  function resetScores(){
      _userscore=0
      _computerscore=0
      _rounds=0
      setScore(0)
      changeScore(0)
      changeround(0)
      changeStreak(0)
      setHistory([])
    }


  return (
    <div className="container">
  <h1 className="title">Rock Paper Scissor</h1>

  <div className="moves">
    <div className="move-box">
      <span>Computer</span>
      <h2>{computerMove}</h2>
    </div>
    <div className="move-box">
      <span>You</span>
      <h2>{userMove}</h2>
    </div>
  </div>

  <div className="score">
    <div className="score-box">
      <span>You</span>
      <h3>{userScore}</h3>
    </div>
    <div className="score-box">
      <span>Computer</span>
      <h3>{computerScore}</h3>
    </div>
  </div>

  <div className="winner">Winner: {winner}</div>

  <div className="buttons">
    <button onClick={()=>handleClick("Rock")}>Rock</button>
    <button onClick={()=>handleClick("Paper")}>Paper</button>
    <button onClick={()=>handleClick("Scissor")}>Scissor</button>
  </div>

  <button className="reset" onClick={resetScores}>Reset</button>
    <div className="statsRow">
  <h2 className='roundsPlayes'>Rounds Played: {totalround}</h2>
  <h2 className='userStreak'>User streak: {streak}</h2>
</div>
<div>
  <h3 className='History'>History</h3>
  {history.map((h, i) => <p key={i}>{h}</p>)}
</div>
</div>
  )
}
  

export default App
