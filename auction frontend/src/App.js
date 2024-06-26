import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuctionList from './AuctionList';
import Auction from './Auction';

function App() {
    return (
        <Router>
              <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/register">Register</Link>
                        </li>
                        <li>
                        <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route exact path="/" element={<AuctionList />} />
                <Route path="/auction/:id" element={<Auction />} />
            </Routes>
        </Router>
    );
}

export default App;
