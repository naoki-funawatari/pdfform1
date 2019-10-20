import React from 'react';
import { Link } from 'react-router-dom';

export default class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Link to='/inputform1'>
                    <button>フォーム　その１</button>
                </Link>
                <br />
                <button>フォーム　その２</button>
            </div>
        );
    }
}
