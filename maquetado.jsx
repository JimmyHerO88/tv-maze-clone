<section className='container-fluid' style={{padding:"0px"}}>
    <div>
        {/* header */}
        <div className="m-3 mx-auto">
            <form className="d-flex justify-content-center">
                <a className="navbar-brand d-flex" href="#">
                    <img src="./public/image/tvm-header-logo.png" alt="" className='img-fluid' style={{maxWidth:"150px", marginRight:"1rem"}} />
                </a>
                <input className="form-control  form-control-sm" type="search" placeholder="Search Shows and People" style={{width:"300px"}} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        {/* menu */}
        <div className="m-3 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-fluid" >            
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Networks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Web Channels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Articules</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Countdown</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* spiner */}
    <div className='d-flex justify-content-center align-items-center' style={{ height: "600px" }}>
        <div className="spinner-grow text-light" style={{width: "5rem", height: "5rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>

    <div className='row'>
        <div className="col-lg-10">
            <h1 className="fw-bold">Popular shows airing tonight</h1>
            {shows.length !== 0 && shows.map(show => (
                <div key={show.id} className="col-lg-2 col-md-3 col-sm-6 col-xs-6" >
                <Shows  {...show} />
                </div>
            )).slice(0,6)} 
            {shows.length === 0 && <p>No hay Shows</p>  }
        </div>
        <div className="col-lg-2">
            <aside></aside>
        </div>
              
    </div>

</section>