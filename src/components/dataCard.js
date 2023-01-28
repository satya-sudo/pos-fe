import React from "react";
import ChartWrapper from "./chart";
import './styles/dataCard.css'

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
    const sentenseWord = sentense.split(' ')
    
    sentenseWord.map(ele => {
      let element;
      if (summary.noun.elements.includes(ele) ){
        element = <div className="noun">` ${ele}`</div>
        console.log("a")
      } else if (summary.verb.elements.includes(ele) ){
        element = <div className="verb">` ${ele}`</div>
      } else if (summary.adj.elements.includes(ele) ){
        element = <div className="adject">` ${ele}`</div>
      } else if (summary.adv.elements.includes(ele) ){
        element = <div className="adverb">` ${ele}`</div>
      } else {
        element = <div >` ${ele}`</div>
      }
      return  element;
    })
    return sentenseWord;
  }
  if (!sentense && !start) { return null}
  return (<div className="dataCard-container">
    {
      start ? <div className="dataCard-text">Distribution of Parts of Speach on the Whole Text</div> : null
    }
    <div className="dataCard-visualize">
      <ChartWrapper data={getData()} width={sentense? 300: 500} height={sentense?300:500}/>
      {sentense ? <div>{sentense}</div>:null}
    </div>
  </div>)
}

export default dataCard;