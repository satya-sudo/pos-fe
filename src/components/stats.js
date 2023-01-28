import { Button } from "@mui/material";
import React,{useState} from "react";
import DataCard from "./dataCard";

import './styles/stats.css'
const Stats = (
  {closeStats,data}
) => {
  const [start,setstart] = useState(0);
  const [end,setend] = useState(20)
  const renderSentence = () => {
    const renderData = data.sentenceAnalysis.slice(start,end)
    return renderData.map(ele => <DataCard summary={ele.data} sentense={ele.sentence} />)
  }
  const paginate = (prev,next) => {
    const limit = 20
    console.log(prev,next)
    if (prev) {
      if (start > limit) {
        setstart(start - 20)
        setend(end -20)
      }
    }
    if (next) {
      if (limit + 20 < data.sentenceAnalysis.length){
        setstart(start 
          + 20)
      setend(end + 20)
      }
    }
  }
  return (
    <div className="stats-container">
      <div className="stats-header">
        <div>Text Summerization overview</div>
        <Button variant="contained" onClick={() => closeStats(true)} >CLose</Button>
      </div>
      <br/>
      <DataCard summary={data.summery} start={true}/>
      {
        renderSentence()
      }
      <div>
      {start !== 0 ? <Button onClick={()=>paginate(start !== 0,null)}>
          prev
        </Button>: null}
        {
          end <= data.sentenceAnalysis.length ?
          <Button onClick={()=>paginate(null,end <= data.sentenceAnalysis.length)}>
          next
        </Button>: null
        }
        
      </div>
    </div>
  )
}

export default Stats;