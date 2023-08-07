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
            Participants from all over the world came to take part in STEMist Hacks 2.0, where they learned web-dev and Python, and bonded through game nights!
          </span>
          <div id='card-cta'>
            <a href='#' className='secondary-cta paragraph semibold dark-accented'>2022 Devpost &#62;</a>
            <a href='#' className='paragraph semibold low-emphasis'>Discord Server &#62;</a>
          </div>
        </div>
        <div id='card-statistics'>
          <div className='card'>
            <span className='heading4 semibold high-emphasis'>$256,000+ in prizes</span>
            <span className='paragraph low-emphasis'>Thanks to our gracious sponsors, we were able to offer out over 256,000 USD in prizes, with 2,000 in cash</span>
          </div>
          <div className='card emphasized-card'>
            <span className='heading4 semibold high-emphasis'>$256,000+ in prizes</span>
            <span className='paragraph high-emphasis'>Thanks to our gracious sponsors, we were able to offer out over 256,000 USD in prizes, with 2,000 in cash</span>
          </div>
          <div className='card'>
            <span className='heading4 semibold high-emphasis'>$256,000+ in prizes</span>
            <span className='paragraph low-emphasis'>Thanks to our gracious sponsors, we were able to offer out over 256,000 USD in prizes, with 2,000 in cash</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards