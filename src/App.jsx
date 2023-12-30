// import Navbar from "./components/Navbar"
// import { useState,useEffect } from "react"
// import axios from "axios";
// import BookContainer from "./components/BookContainer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {HomeLayout,Description,Landing} from './pages';
import SinglePageError from "./pages/SinglePageError";
import { loader as LandingLoader } from "./pages/Landing";
import {loader as DescriptionLoader} from './pages/Description'

function App() {

  // const[userSearch,setUserSearch] = useState('');
  // const[bookData,setBookData] = useState([]);
  // const[isLoading,setIsLoading] = useState(true);
  // console.log(userSearch);

//   const fetchBooks = async() =>{


//     const searchTerm ={userSearch} || 'harry+potter';

//     const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

//   try{

//     const {data} = await axios(url);
//     console.log(data.items);
//     setBookData(data.items);

//   }
//   catch(error){

//     console.log(error.response)

//   }
    
//   setIsLoading(false);


// }

//   useEffect(()=>{
//     fetchBooks()
// },[userSearch])

 const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<SinglePageError/>,
    children:[{
      index:true,
      element:<Landing/>,
      loader:LandingLoader,
      errorElement:<SinglePageError/>,
    },
    {
      path:'description/:id',
      element:<Description/>,
      loader:DescriptionLoader,
      errorElement:<SinglePageError/>,
    },

  ]
  }
  

 ])


  return (
    <>
    {/* <Navbar setUserSearch={setUserSearch} />
    {
      isLoading ? <div>Loading...</div> : <BookContainer bookData={bookData}/>
    } */}

    <RouterProvider router={router}/>
    </>
  )
}

export default App
