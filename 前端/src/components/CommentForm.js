import React from 'react';


export default class CommentForm extends React.Component{
	constructor(props){
		//初始化操作通常在这里
		console.log("初始化了");
		super(props);
		this.state={
			author:'',
            comment:''
		}
	}
	commentHandler(e){
		e.preventDefault();
		this.props.submitComment({author:this.state.author,comment:this.state.comment})
	   
	}
    
	authorHandler(p){

    this.setState({author:p.target.value})
  }
    textHandler(p){

    this.setState({comment:p.target.value})
  }
	render(){
		
		return(
             <form className="panel panel-default" onSubmit={this.commentHandler.bind(this)}>
                  <div className="panel-heading">请你输入你的吐槽</div>
                  <div className="container-fluid">
		          <div className="form-group">
		            <label htmlFor="author">作者</label>
		            <input type="text" className="form-control" id="author" placeholder="" onChange={this.authorHandler.bind(this)} value={this.state.author} />
		          </div>
		          <div className="form-group">
		            <label htmlFor="comment">吐槽内容</label>
		            <input type="text" className="form-control" id="comment" placeholder="" onChange={this.textHandler.bind(this)} value={this.state.comment}/>
		          </div>

		          <button type='submit' className='btn btn-info'>提交数据</button>
		          </div>

        </form>
             			);
	}
}