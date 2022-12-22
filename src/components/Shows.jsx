import { Link } from 'react-router-dom'

const Shows = ({name, image, id}) => {
  return (
      <Link className='text-decoration-none' to={`/showdetail/${id}`}>
        <div className="card" style={{padding:"0px"}}>
          <div className="item">
            <img src={image.medium} alt={name} className="card-img-top" />
            <div className="card-body">
                <p className='card-title'>{name}</p>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default Shows