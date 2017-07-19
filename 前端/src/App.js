import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/Header';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';


class App extends Component {
  constructor(){
    super();
    this.state={
      comments:[]
    }
    this.submitCommentHandler=this.submitCommentHandler.bind(this);
  }
  componentWillMount(){
    console.log("组件将要加载");
  }
  componentWillUnMount(){
    console.log("组件将要卸载");
  }
  componentDidMount(){
    //在react 如果想进行ajax数据交互通常在虚拟DOM元素加载完成之后来做操作
    console.log("组件已经加载完成");
    var _this=this;
    $.ajax({
      url:'http://127.0.0.1:3100/api/comments',
      type:'GET',
      success:function(data){

        setTimeout(function(){
          _this.setState({comments:data});
        },2000);
        
      }
    })

  }
     
  submitCommentHandler(data){
    console.log(this);
    var _this = this;

      $.ajax({
        url:"http://127.0.0.1:3100/api/comments",
        type:"POST",
        data:data,
        success:function(datas){
          _this.setState({comments:datas})
        }
      })
      

  }

  render() {
    

    return (
      <div className='app'>
        <Header />
        <div className="row container-fluid">
          <div className="col-lg-6">
           <CommentList comments={this.state.comments} />
          </div>
          <div className="col-lg-6">
              <CommentForm submitComment={this.submitCommentHandler} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
