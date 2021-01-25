import * as React from 'react';
import { connect } from 'react-redux';
import DropZone from "./DropZone";
import '../css/Home.css'


const Home = () => (
    <div>
        <h1>Welcome to Video Maker</h1>
        <div className="content">
            <DropZone/>
        </div>
    </div>
);

export default connect()(Home);