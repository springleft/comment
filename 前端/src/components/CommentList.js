import React from 'react';
import CommentItem from './CommentItem';


export default function CommentList(props){
	
	
	  let lists=props.comments.map((ele,index)=>{
		return (
			<CommentItem
				key={index}
				author={ele.author}
				comment={ele.comment}
			/>
		);
	})
		return(
            <div className="panel panel-default">
            	<div className="panel-heading">我是不一样的title</div>
            	<div className="srcoll">
             	<ul className="list-group">
              	   {lists}
		        </ul>
		        </div>
		    </div>
            );
	
}