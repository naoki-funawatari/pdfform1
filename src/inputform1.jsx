import React from 'react';
import { Link } from 'react-router-dom';

export default class InputForm1 extends React.Component {
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
                <Link to='/inputform2'>
                    <button>Ⅱ．●●●●●●●●</button>
                </Link>
            </div>
        );
    }
}
