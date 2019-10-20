import React from 'react';
import { Link } from 'react-router-dom';

export default class InputForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Link to='/selectform'>
                    <button>帳票選択へ</button>
                </Link>
                <br />
                <Link to='/inputform1'>
                    <button>Ⅰ．●●●●●●●●</button>
                </Link>
                <br />
                <Link to='/inputform3'>
                    <button>Ⅲ．●●●●●●●●</button>
                </Link>
            </div>
        );
    }
}
