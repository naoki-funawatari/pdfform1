import React from 'react';

export default class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <button>フォーム　その１</button>
                <br />
                <button>フォーム　その２</button>
            </div>
        );
    }
}
