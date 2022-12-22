import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="m-3 mx-auto">
        <form className="d-flex justify-content-center">
            <Link className="navbar-brand d-flex" to="/">
                <img src="./public/image/tvm-header-logo.png" alt="" className='img-fluid' style={{maxWidth:"150px", marginRight:"1rem"}} />
            </Link>
            <input className="form-control  form-control-sm" type="search" placeholder="Search Shows and People" style={{width:"300px"}} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    <div className="m-3 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container-fluid" >            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/shows">Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/networks">Networks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/showdetail">Show</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Articules</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Calendar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Countdown</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Header