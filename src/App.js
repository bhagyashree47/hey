
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <nav  className="fixed-bottom">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item"><Link to={'/page1'} className="nav-link"> Page1 </Link></li>
                            <li class="page-item"><Link to={'/page2'} className="nav-link"> Page2 </Link></li>
                            <li class="page-item"><Link to={'/page3'} className="nav-link"> Page3 </Link></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/page1' component={Page1} />
                        <Route path='/page2' component={Page2} />
                        <Route path='/page3' component={Page3} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;