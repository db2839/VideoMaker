import * as React from 'react';
import { Alert } from 'reactstrap';
import '../css/DropZone.css'

export default class DropZone extends React.Component {

    dragOver = (e) => {
        e.preventDefault();
    }

    dragEnter = (e) => {
        e.preventDefault();
    }

    dragLeave = (e) => {
        e.preventDefault();
    }

    fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);

        if (files.length) {
            this.handlefiles(files)
        }
    }

    validateFile = (file) => {
        const validTypes = ['audio/mpeg', 'video/mp4', 'video/mpeg'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    handlefiles = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            if (this.validateFile(files[i])) {
                alert("Valid File Type");
            } else {
                alert("Invalid File Type");
            }
        }
    }

    render(): React.ReactElement {
        return (
            <div className="container">
                <div className="dropContainer"
                    onDragOver={this.dragOver}
                    onDragEnter={this.dragEnter}
                    onDragLeave={this.dragLeave}
                    onDrop={this.fileDrop}>
                    <div className="drop-message">
                        <div className="upload-icon"></div>
                            Drag & Drop files here or click to upload
                    </div>
                </div>
            </div>
        )
    }
}
