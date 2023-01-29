import React from "react";
import ChartWrapper from "./chart";
import './styles/dataCard.css'
import Chip from '@mui/material/Chip';

const dataCard = ({
  sentense,summary,start
}) => {
  const getData = () => {
    const arrayData = Object.entries(summary)
    const series = []
    const labels = []
    if (!sentense) {
      arrayData.forEach(ele => {series.push(ele[1]); labels.push(ele[0])})
      return {labels,series}
    }
    arrayData.forEach(ele => {series.push(ele[1].count); labels.push(ele[0])})

    return {labels,series}
  }
  const mapSentence = (sentense,summary) => {
    const sentenseWord = Object.entries(summary)
    let ChipData = []
    
    sentenseWord.forEach(ele => {
      console.log(ele[1].elements)
      ChipData = [...ChipData,...ele[1].elements?ele[1].elements.map(eleData=><Chip size="small" className={ele[0]} label={eleData}/>):[]]
    })
    return ChipData;
  }
  if (!sentense && !start) { return null}
  return (<div className="dataCard-container">
    {
      start ? <div className="dataCard-text">Distribution of Parts of Speach on the Whole Text</div> : null
    }
    <div className="dataCard-visualize">
      <ChartWrapper data={getData()} width={sentense? 300: 500} height={sentense?300:500}/>
      <div className="sentence-data">
      {sentense ? <div>{sentense}</div>:null}
      <div className="chip-stack">
      {mapSentence(null,summary)}

      </div>
      </div>
      
    </div>
  </div>)
}

export default dataCard;