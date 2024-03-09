import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Post extends Component{

    render(){
        const post = this.props.post;
        return(
            <figure className='figure'>
                <Link to={`/single/${post.id}`}><img className='photo' src={post.imageLink} alt={post.description}/></Link>
                <figcaption><p>{post.description}</p></figcaption>
                <div className='button-container'>
                <button onClick={() =>{
                    this.props.removePost(this.props.id)
                    this.props.history.push('/')
                }}>Remove</button>
                <Link className='button' to={`/single/${post.id}`}>
                    <div className='comment-count'>
                        <div className='speech-bubble'></div>
                        {
                            this.props.comments[post.id] ? this.props.comments[post.id].length : 0
                        }
                    </div>
                </Link>
                </div>
            </figure>
        )
    }

}

export default Post;