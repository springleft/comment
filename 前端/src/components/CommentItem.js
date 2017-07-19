import React from 'react'


export default class CommentItem extends React.Component{


	render(){
		return (
			<li className="list-group-item">
                    <p>评论者：{this.props.author}</p>
                    <p>内容：</p>
                    <p>{this.props.comment}</p>
                    
		          </li>
		)	
	}
}