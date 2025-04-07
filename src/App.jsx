import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetails from "./pages/BookDetails"
import AddBook from "./pages/AddBook"
import BrowseBooks from "./pages/BrowseBooks"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/browse" element ={<BrowseBooks />}/>
      <Route path="/add" element ={<AddBook />}/>
      <Route path="/books/:id" element ={<BookDetails />}/>
      <Route path="/browse/:category" element={<BrowseBooks />} />
      <Route path="*" element ={<NotFound />}/>
    </Routes>    
    </>
  )
}
export default App