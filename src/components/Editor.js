import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <textarea id={'editor'}/>
        );
    }
}

export default Editor;