import React,{useEffect,useState} from 'react'
import Bookcomponent from './component/Bookcomponent'
import './Book.css'

function App() {
  
  const [books, setbooks] = useState([])


useEffect(() => {

  async function fetchData() {
    const response = await fetch('https://book-club-json.herokuapp.com/books')
    const books = await response.json()
    setbooks(books)

  }

  fetchData()
  }, [])
   
  
 let bini =  books.map((e) => {
    console.log(e);
     return      <Bookcomponent key = {e.id}  image = {e.image} published = {e.published}  author = {e.author} />

   
     })



  return (
      

    <div className = 'bini'>
  
      {bini}
     
    </div>

  )
}
export default App;
