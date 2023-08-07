import '../css/text.css'
import '../css/Schedule.css'
import Navbar from '../components/Navbar.jsx'

function Schedule() {
  return (
    <>
      <Navbar links='[]'/>
      <div id='schedule-page'>
        <span className='heading2 bold high-emphasis'>What do you want to schedule?</span>
        <div id='prompt-type'>
          <div className='grid-container'>
            <span className='paragraph low-emphasis'>Write your desired schedule here:</span>
            <textarea id='prompt-textarea' className='paragraph'></textarea>
          </div>
          <div className='grid-container'>
            <span className='paragraph low-emphasis'>Or choose from the choices below:</span>
            <div id='prompt-choices'>
              <a className='secondary-cta prompt-button dark' role="button">A banana talk that goes for 45 minutes every Friday</a>
              <a className='secondary-cta prompt-button dark' role="button">A monthly meeting for Sunshine Co.</a>
              <a className='secondary-cta prompt-button dark' role="button">A weekly podcast entitled "More or Less, Caffeine"</a>
            </div>
          </div>
        </div>
        <a className='primary-cta semibold' role="button">Schedule</a>
      </div>
    </>
  );
}

export default Schedule
