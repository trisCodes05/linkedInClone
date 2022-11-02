import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgests() {
    const newsArticle = (heading, subtitle) =>(
        <div className='widgets_aritcle'>
            <div className='widgets_articleLeft'>
            <FiberManualRecordIcon/>
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Coding is funn! ","Top views-9999")}
        {newsArticle("Corona virus India updates","new cases-10000")}
        {newsArticle("Bit coin breaks $88k","Crypto-7000 readers")}
        {newsArticle("Is readux too good?","Top readers-9999")}
        {newsArticle("Tesla hits new heights","Top sells-500")}
    </div>
   
  )
}

export default Widgests