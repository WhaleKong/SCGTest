import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import SCG from './SCG'
import './App.css'


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <h2 className='tc'>Welcome to TeamSCG</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light-green">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link f5 b"> Home </Link></li>
                            <li><Link to={'/SCG'} className="nav-link f5 b">SCG</Link></li>
                        </ul>
                    </nav>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/SCG' component={SCG} />
                    </Switch>

                    <footer class="page-footer font-small blue">


                        <div class="footer-copyright text-center py-3  bg-light-green">Create By WhaleKong
                        </div>


                    </footer>
                </div>
            </Router>
        );
    }

}

export default App;