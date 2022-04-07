import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { deleteQuestion } from "../../store/question";

export default function SettingsButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const deletePost = e => {
    e.preventDefault();
    dispatch(deleteQuestion(postId));
    history.push('/');
  }

  return (
    <>
      <button onCLick={openMenu}>
        <i className='fa-solid fa-ellipsis' />
      </button>
      {showMenu && (
        <ul className='settings-dropdown'>
          <li>
            <button className='delete-post-btn' onClick={deletePost}>Delete Question</button>
          </li>
        </ul>
      )}
    </>
  )
}
