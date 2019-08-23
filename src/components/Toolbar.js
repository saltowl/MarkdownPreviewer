import React from 'react';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'row toolbar pl-2 pr-2 pt-1 pb-1'} style={{'align-items': 'center', 'justify-content': 'space-between', 'margin': 0}}>
                <div>{this.props.name}</div>
                <i className={this.props.icon} onClick={this.props.onClick} />
            </div>
        );
    }
}

export default Toolbar;