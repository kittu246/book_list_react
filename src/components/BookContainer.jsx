
import Book from './Book'

const BookContainer = ({bookData}) => {
    
  return (
    <div className='bookContainer'>
    {bookData.map((bookItem,index)=> {
        
    return <Book key={bookItem.id} bookItem={bookItem}/> })}

    </div>
  )
}

export default BookContainer