import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
// const History = ReactRouter.History;

import LoginForm from './loginform';
import SelectForm from './selectform';
import InputForm1 from './inputform1';
import InputForm2 from './inputform2';
import InputForm3 from './inputform3';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={LoginForm} />
                    <Route path='/selectform' component={SelectForm} />
                    <Route path='/inputform1' component={InputForm1} />
                    <Route path='/inputform2' component={InputForm2} />
                    <Route path='/inputform3' component={InputForm3} />
                </div>
            </BrowserRouter>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(
    <App message="Hello React!" />,
    app
);
