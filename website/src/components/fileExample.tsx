import React, {RefObject} from "react";

class FileExample extends React.Component {
    contentElement: RefObject<HTMLDivElement>;

    state = {
        expanded: false,
        height: "20vh",
        overflow: "hidden"
    }

    constructor(props) {
        super(props);

        this.contentElement = React.createRef();
    }

    toggleExpanded() {
        event.preventDefault();

        if (this.state.expanded) {
            this.contentElement.current.scrollTo(0, 0);
        }
        this.setState(s => ({
            expanded: !s.expanded,
            height: s.expanded ? "20vh" : "65vh",
            overflow: s.expanded ? "hidden" : "auto"
        }))
    }

    render() {
        return <div className="file-example" style={{
            width: this.state.expanded ? "100%" : "70%"}}>
            <div className='file-example-header'>
                <a href='#' onClick={() => this.toggleExpanded()}>{this.state.expanded ? "Collapse" : "Expand"}</a>
                <span className='file-example-file-name'>{this.props.fileName}</span>
            </div>
            <pre className='file-example-content' style={{
                height: this.state.expanded ? "65vh" : "20vh",
                overflow: this.state.expanded ? "auto" : "hidden"
            }} ref={this.contentElement}>
                <div className='file-example-shadow' style={{display: this.state.expanded ? "none" : "initial"}}></div>
                <span>{this.props.children}</span>
        </pre>
        </div>
    }
}

export default FileExample;