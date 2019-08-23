import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const usualColumn = ' col-md-6 col-sm-12';
        const classes = this.props.editorMaximized ?
            ['editorWrap col-12 maximized',
                'previewWrap d-none',
                'fa fa-compress'] :
            this.props.previewMaximized ?
                ['editorWrap d-none',
                    'previewWrap col-12 maximized',
                    'fa fa-compress'] :
                ['editorWrap' + usualColumn,
                    'previewWrap' + usualColumn,
                    'fa fa-arrows-alt'];
        return (
            <div className="App">
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={classes[0]} style={{'padding': 0}}>
                            <div className={!this.props.editorMaximized && !this.props.previewMaximized ? 'mr-md-1 mb-2 mb-md-0' : ''}>
                                <Toolbar name={'Editor'} icon={classes[2]} onClick={this.props.handleMaximizedEditor}/>
                                <Editor input={this.props.input} handleInputChange={this.props.handleInputChange}/>
                            </div>
                        </div>
                        <div className={classes[1]} style={{'padding': 0}}>
                            <div className={!this.props.editorMaximized && !this.props.previewMaximized ? 'ml-md-1 mt-2 mt-md-0' : ''}>
                                <Toolbar name={'Preview'} icon={classes[2]} onClick={this.props.handleMaximizedPreview}/>
                                <Preview input={this.props.input}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
