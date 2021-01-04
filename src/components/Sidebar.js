import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import avatar from './avatar.png';

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div className='sidebar-container' style={{position: 'fixed'}}>
                    <img src={avatar} className='avatar' alt="Avatar" />
                    {
                        SidebarItems.map((item, index)=> {
                            return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                            );
                        })
                    }

                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
        </>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  text-align: center;
  background: #cf3d2a;
  
  .sidebar-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
  
  .avatar {
      width: 180px;
      border-radius: 180px;
      border: solid 10px rgba(255,255,255,0.2);
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  margin: 4px 12px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
    text-transform: uppercase;
    opacity: ${props => props.active ? "1" : "0.7"};
  }
  
  p:hover {
    cursor:pointer;
    opacity: 1;
  }
  
`;