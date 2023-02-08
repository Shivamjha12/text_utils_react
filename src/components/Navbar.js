import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
  < >
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">{props.navitem1} <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">{props.navitem2}</Link>
            </li>
            </ul>
        </div>
        <div className={`form-check form-switch mx-3 my-2 bg-${props.mode}`} >
            <button type="button" id="changemodeButton" onClick={props.changeMode} className="btn btn-dark"> Enable {props.mode==='light'?'dark':'light'} Mode</button>
        </div>
    </nav>
  </>
  )
}

Navbar.propTypes = { 
    title: PropTypes.string,
    navitem1: PropTypes.string.isRequired,
    navitem2: PropTypes.string,
}
Navbar.defaultProps = {
    title: "Title",
    navitem1: "NavItem",
    navitem2: "NavItem"
}