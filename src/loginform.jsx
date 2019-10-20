import React from 'react';

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
                <button>ログインする</button>
            </div>
        );
    }
}
