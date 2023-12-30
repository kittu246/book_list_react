import { useLoaderData } from "react-router-dom"
import axios from "axios"
import BookContainer from "../components/BookContainer";

export const loader = async({request}) =>{

    const url = new URL(request.url);
  

    const searchTerm = url.searchParams.get('search') || 'harry+potter';

    const fetchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    const {data} = await axios(fetchUrl);

    return {bookData:data.items,searchTerm}
}
const Landing = () => {

    const {bookData,searchTerm} = useLoaderData()

    console.log(bookData);

   
    if(bookData.length == 0){
        return <div>No books with searched Title </div>
    }

  
  return (
    <div>
        <BookContainer bookData={bookData} />
    </div>
  )
}

export default Landing