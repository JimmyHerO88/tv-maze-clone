import useGetData from '../hooks/useGetData';
import Shows from './Shows';

const App = () => {
  const {data, loading} = useGetData('https://api.tvmaze.com/shows')
  
  return(
    <section className='container-fluid' style={{padding:"0px"}}>    
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
        <div className='row' style={{padding:"10px"}} >
          <div className="col-lg-9 col-md-9">
            <h1 className="fw-bold">Popular shows airing tonight</h1>
            <div className="row">
              {data.length !== 0 && data.map(show => (
                <div key={show.id} className="col-lg-2 col-md-2 col-sm-4 col-xs-6" style={{padding:"0px"}} >
                  <Shows  {...show} />
                </div>
              )).slice(0,30)} 
              {data.length === 0 && <p>No hay Shows</p>} 
            </div>            
          </div>
          <div className="col-lg-3 col-md-3">
            <aside>
              <h2>Schedule for Dec 21</h2>
            </aside>
          </div>                 
        </div>
      )}
    </section>
  );
}

export default App