import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './loginform';
import SelectForm from './selectform';
import InputForm1 from './inputform1';
import InputForm2 from './inputform2';
import InputForm3 from './inputform3';
import Quiz from './quiz';

export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Quiz} />
                    <Route path='/selectform' component={SelectForm} />
                    <Route path='/inputform1' component={InputForm1} />
                    <Route path='/inputform2' component={InputForm2} />
                    <Route path='/inputform3' component={InputForm3} />
                    <Route path='/quiz' component={Quiz} />
                </div>
            </BrowserRouter>
        );
    }
}