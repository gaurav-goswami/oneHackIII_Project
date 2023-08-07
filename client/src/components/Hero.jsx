import '../css/Hero.css'
import '../css/text.css'
import hero from '../assets/images/hero-image.svg'

function Hero() {
  return (
    <>
      <div id='hero-section'>
        <div id='hero-content'>
          <div id='intro'>
            <span id='intro-header' className='paragraph flair bold'>Learn how we are</span>
            <div id='intro-title'>
              <span className='heading1 bold high-emphasis'>Helping Students</span>
              <span className='heading1 bold high-emphasis'>Sched the Unwanted</span>
            </div>
            <span id='intro-subtitle' className='low-emphasis paragraph'>
              <span className='high-emphasis semibold'>SCHED</span> helps in reducing literary migranes by eliminating the need to schedule meetings manually! 
            </span>
          </div>
          <div id='hero-cta'>
              <a href='/connect' className='primary-cta paragraph semibold high-emphasis'>Connect</a>
            </div>
        </div>
        <img src={hero} id='hero'/>
      </div>
    </>
  )
}

export default Hero