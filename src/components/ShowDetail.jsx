import {useParams} from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import EpisodiosList from './EpisodiosList'

const ShowDetail = () => {
    
    const {idShow} = useParams()
    console.log(idShow);
    const {data:show, loading} = useGetData(`https://api.tvmaze.com/shows/${idShow}`)
    const {data:episode, loading2} = useGetData(`https://api.tvmaze.com/shows/${idShow}/episodebynumber?season=1&number=1`)
    const {data, loading3} = useGetData(`https://api.tvmaze.com/shows/${idShow}/episodes?specials=1`)
    //console.log(show);
    return (
        <section className='container-fluid'>
            {
                loading && 
                <div className='d-flex justify-content-center align-items-center' style={{ height: "600px" }}>
                <div className="spinner-grow text-light" style={{width: "5rem", height: "5rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            }
            {
                !loading && (
                <div className="row">
                    <h1 className='my-5'>{show.name}</h1>
                    <div className='col-lg-8 col-md-8'>
                        <div className="row" >
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" >
                                <img className='img-fluid' src={show.image.original} alt={show.name}  /> 
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                                {show.summary}
                            </div>
                        </div>
                        <div className="col-12" style={{marginTop:"3rem"}}>
                            <h2 >Previous Episode</h2>
                            <h3 className='text-info'>{episode.name}</h3>
                            <p className='blockquote'>{episode.summary}</p>
                            <h2>Cast</h2>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <aside>
                            <div className='p-5 bg-white text-dark border border-5'>
                                <p className='fs-1'>Show Info</p>
                                <p >
                                    <strong className='fs-5'>Network: </strong>{show.network.webChannel} {show.network.dvdCountry} <br/> 
                                    <strong className='fs-5'>Schedule: </strong>{show.schedule.days} {show.schedule.time}<br/> 
                                    <strong className='fs-5'>Status: </strong>{show.status}<br/> 
                                    <strong className='fs-5'>Show Type: </strong>{show.type}<br/> 
                                    <strong className='fs-5'>Genres: </strong>{show.genres}<br/> 
                                    <strong className='fs-5'>Oficial site: </strong><a href={show.officialSite}>{show.officialSite}</a><br/> 
                                    <strong className='fs-5'>Average: </strong>{show.rating.average}
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>                
            )}
        </section>
    )
}

export default ShowDetail