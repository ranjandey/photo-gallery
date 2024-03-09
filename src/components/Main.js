import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import {Link, Route} from 'react-router-dom';

class Main extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1>
                <Link to='/'> Photo Gallery</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>
                <Route path="/AddPhoto" render={() => (
                    <div>
                        <AddPhoto {...this.props}/>
                    </div>
                )}/>
                <Route path="/single/:id" render ={(params) =>(
                    <div>
                        <Single {...this.props} {...params}/>
                    </div>
                )}/>
            </div>
        )
    }
}

export default Main