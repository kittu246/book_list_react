import { useLoaderData } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom";


const url ='https://www.googleapis.com/books/v1/volumes/';
export const loader = async({params}) =>{

    const{id} = params;

    const {data} = await axios(`${url}${id}`)
    console.log(data);


    return {data,id};



}


const Description = () => {

const {data,id} = useLoaderData();
const {volumeInfo}= data;

  return (
    <div className="description">
        <div className="leftBookDetails">
           <img src={volumeInfo.imageLinks.thumbnail}/>

        </div>
        <div className="rightBookDetails">
            <div className="header">
                <h1>{volumeInfo.title}</h1>
                <p style={{color:'lightgray'}}>Publised On: {volumeInfo.publishedDate}</p>
            </div>

            <div className="middleDetails">

            {volumeInfo.authors.map((item,index) => <p key={index}> {item} </p>)}
            
          
            
            <p id='details'>{volumeInfo.description}</p>
            <div>
                <div className='publisher'>
                <p>Publisher : {volumeInfo.publisher}</p>
                
                <p>Language : {volumeInfo.language}</p>
                </div>
                </div>   
                <div  className="links">
                    {/* <Link className="link"  to=''>Now Read</Link>
                    <Link className="link" to=''>More Info</Link> */}
                    <Link className="link" to='/'>Back Home</Link>

                </div>
            </div>

          

            
        </div>
    </div>
  )
}

export default Description