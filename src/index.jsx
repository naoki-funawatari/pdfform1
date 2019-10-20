import React from 'react';
import ReactDOM from 'react-dom';

// import ReactRouter from 'react-router';
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
// const History = ReactRouter.History;

// import LoginForm from 'D:/Projects/pdfform1/src/loginform.jsx';
// import SelectForm from 'D:/Projects/pdfform1/src/selectform.jsx';
import LoginForm from './loginform.jsx';
import SelectForm from './selectform.jsx';

// var Routes = (
//     <Route path="/" component={Index}>
//         <IndexRoute component={Top} />
//         <Route path="/login" component={Top} />
//         <Route path="/select" component={Main}>
//             <IndexRoute component={Body} />
//             <Route path="/userbox" component={UserBox} />
//         </Route>
//     </Route>
// );

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <LoginForm />
                <SelectForm />
            </div>);
    }
}

const app = document.getElementById('app');

ReactDOM.render(
    <App message="Hello React!" />,
    app
);
