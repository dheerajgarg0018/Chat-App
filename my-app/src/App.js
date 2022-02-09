import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/chat" component={Chatpage} exact />
    </div>
  );
}

export default App;
