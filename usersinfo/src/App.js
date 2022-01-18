
import './App.css';
import Users from './users/Users';
import Home from './users/Home';
import AddUser from './users/AddUser';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/adduser" element={<AddUser />}>
          </Route>
          <Route path="/users" element={<Users />}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
