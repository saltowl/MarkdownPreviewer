import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  return `
    <a href="${href}" title="${title}" target="_blank">${text}</a>
  `;
};

marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: true
});

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id={'preview'} dangerouslySetInnerHTML={{__html: marked(this.props.input)}} className={'p-3'}/>
        );
    }
}

export default Preview;