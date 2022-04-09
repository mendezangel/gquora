import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './script.js';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const user = useSelector(state => state.session.user);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = () => {
  //     setShowMenu(false);
  //   };

  //   document.addEventListener('click', closeMenu);

  //   return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="dropdown" data-dropdown>
        <button className='user-icon-btn link' >
          <i className="fas fa-user-circle fa-xl" data-dropdown-button />
        </button>
        <div className="dropdown-menu">
          <ul className="profile-dropdown">
            <li>{user?.username}</li>
            <li>{user?.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
      {/*       
       */}
    </>
  );
}

export default ProfileButton;