import React from 'react';
import logo from '../logo.svg';
export default function Header(props){
	return(
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="javascript:;">
                    <img alt="" src={logo} width='40'/>
                    
                  </a>
                  <h4 className='fs'>欢迎大家来参加我做的评论框</h4>

                </div>
              </div>
          </nav>
		)
}