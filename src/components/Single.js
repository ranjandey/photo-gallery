import React, {Component} from 'react';
import Post from './Post';
import Comment from './Comment';

class Single extends Component{

    render(){
        const {match, posts} = this.props
        const id =Number( match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = posts.findIndex((post) => post.id === id)
        return (
            <div className='single-photo'>
                <Post  post ={post} {...this.props} id={index}/>
                <Comment addComment ={this.props.addComment} comments ={comments} id ={id}/>
            </div>
        )
    }

}

export default Single;