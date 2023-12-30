import { Link } from "react-router-dom"

const Book = ({bookItem}) => {

    const {id,title,volumeInfo} =bookItem
  return (
    <div className="bookCard">
        <div className="cardLeft">
            <img src={volumeInfo?.imageLinks?.thumbnail} />
        </div>
        <div className="cardRight">
            {volumeInfo.title.length >40 ?<h4>{`${volumeInfo.title.substring(0,40)}...`}</h4> :<h4>{volumeInfo.title}</h4> }
            {volumeInfo && volumeInfo.description ?
            volumeInfo.description.length >100 ? <p>{`${volumeInfo.description.substring(0, 200)}...`}</p> :<p>{volumeInfo.description}</p> 
            :<p>No Description</p>
          }
            
            <Link className="link" style={{position:"absolute",bottom:"20px",right:'20px'}} to={`/description/${id}`}> More Details </Link>
        </div>
    </div>
  )
}

export default Book