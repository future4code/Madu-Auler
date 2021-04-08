
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Matches from './pages/Matches'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/matches" exact component={Matches} />
      </Switch>
    </Router>




  );
}

export default App;