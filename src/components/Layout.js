import React from 'react';
import Sidebar from "./Sidebar";
import styled from 'styled-components'

function Layout(props) {
    return (
        <div>
            <Main>
                <Sidebar history={props.history}/>
                <div className='main-content'>
                    {props.children}
                </div>
            </Main>
        </div>
    );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  
  .main-content {
      margin-left: 50px;
      margin-right: 50px;
      width: 100%;
  }
  .main-content h1 {
      font-size: 72px;
      text-transform: uppercase;
      margin-bottom: 0;
  }
  .main-content h2 {
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .main-content h3 {
      text-transform: uppercase;
  }
  .main-content h4 {
      color: grey;
      margin: 0;
  }
  .main-content p {
      line-height: 24px;
      color: grey;
  }
  .main-content span.orange {
      color: #cf3d2a;
  }
  .award ul li {
      list-style: none;
  }
  .award ul li .svg-inline--fa {
      color: gold;
      margin-right: 5px;
  }
  .content {
      margin-top: 50px;
      width: 100%;
  }
  .skill {
      display: flex;
  }
  .skill .svg-inline--fa {
      color: green;
      margin-right: 5px;
  }
  .skill div {
      width: 50%;
  }
  .experience {
      position: relative;
      margin-bottom: 30px;
  }
  .experience h3 {
      margin-bottom: 10px;
  }
  .experience .date {
      position: absolute;
      right: 0;
      top: 0;
      color: #cf3d2a;
      font-size: 14px;
      margin: 0;
  }
`;

export default Layout;