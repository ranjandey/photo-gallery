import React, {Component} from 'react';
import Post from './Post'; 
import {Link} from 'react-router-dom';


class PhotoWall extends Component{

    render(){
        return (
            <div>
            <Link className="addIcon" to='/AddPhoto'></Link>
            <div className='photoGrid'>
                {this.props.posts
                .sort((x,y)=> y.id - x.id)
                .map((post,id) => <Post key={id} post={post} {...this.props} id={id}/>)}
            </div>
            </div>
        )
    }

}

export default PhotoWall;