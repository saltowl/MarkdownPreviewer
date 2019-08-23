import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.handleInputChange(e.target.value);
    }
    render() {
        return (
            <textarea id={'editor'} onChange={this.handleChange} value={this.props.input}/>
        );
    }
}

export default Editor;