import Nav from "./Components/Nav"
import News from "./Components/News"
import { BrowserRouter as Router  , Route , Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element = {<News  category = "general" country = "in"/>}></Route>
      <Route path="/about" element = {<News  category = "general" country = "in"/>}></Route>
      <Route path="/business" element = {<News  category = "business" country = "in"/>}></Route>
      <Route path="/entertainment" element = {<News  category = "entertainment" country = "in"/>}></Route>
      <Route path="/health"  element = {<News  category = "health" country = "in"/>}></Route>
      <Route path="/science" element = {<News  category = "science" country = "in"/>}></Route>
      <Route path="/sports" element = {<News  category = "sport" country = "in"/>}></Route>
      <Route path="/technology" element = {<News  category = "technology" country = "in"/>}></Route>
    </Routes>
    </Router>
    </>
   
  );
}
News.defaultProps = {
  category : "general",
  country : "in"
}
export default App;
