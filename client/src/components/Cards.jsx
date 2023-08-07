import '../css/Cards.css'
import '../css/text.css'

function Cards() {
  return (
    <>
      <div id='card-section'>
        <div id='card-text'>
          <span className='heading2 bold high-emphasis'>
            <span className='accented'>By the</span> Numbers
          </span>
          <span id='card-main-description' className='paragraph low-emphasis'>
            Studies have been conducted to see the consumers' opinions about virtual meeting platforms. SCHD aims to fix the convenience of the users by providing help in the most head-breaking task of all: scheduling the meetings themselves.
          </span>
        </div>
        <div id='card-statistics'>
          <div className='card'>
            <span className='heading4 semibold high-emphasis'>30.4% with 10+ hours</span>
            <span className='paragraph low-emphasis'>The number of students and workers using virtual meeting platforms for 10+ hours has spiked up to 30.4% in 2020.</span>
          </div>
          <div className='card emphasized-card'>
            <span className='heading4 semibold high-emphasis'>New Tactics Needed</span>
            <span className='paragraph high-emphasis'>Only 25% of people think Zoom is convenient to use, much lower than that of Google Meet with 54%.</span>
          </div>
          <div className='card'>
            <span className='heading4 semibold high-emphasis'>Use Ease is Priority</span>
            <span className='paragraph low-emphasis'>85/100 people get attracted to a virtual meeting platform if its easy to use.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards