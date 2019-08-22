import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';

function App() {
    return (
        <div className="App">
            <Toolbar />
            <Editor />
            <Toolbar />
            <Preview />
        </div>
    );
}

export default App;
