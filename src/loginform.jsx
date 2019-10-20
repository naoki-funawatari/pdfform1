import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <input type="text" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <Link to='/selectform'>
                    <button>ログインする</button>
                </Link>
            </div >
        );
    }
}
