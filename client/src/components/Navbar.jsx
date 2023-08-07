import '../css/Navbar.css'
import '../css/text.css'
import filler_logo from '../assets/images/filler-logo.png'

function Navbar(props) {

  const links = JSON.parse(props.links)

  return (
    <>
      <nav id='navbar'>
        <div id='navbar-container'>
          <a href="/">
            <img id='navbar-logo' src={filler_logo}></img>
          </a>
          <div id='navbar-links'>
            {links.map(link => <a href={link[1]} className={link[2]}>{link[0]}</a>)}
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.defaultProps = {
  links: "[[\"Connect\", \"/connect\", \"medium paragraph primary-cta\"]]"
}

export default Navbar