import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams, Link, Redirect } from "react-router-dom";

export default function SettingsButton() {
  const { questionId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) return (<Redirect to='/login' />);
  // const handleClick = () => {
  //   return (
  //     // <Redirect to={`/questions/${questionId}/edit-delete-page`} />
  //     history.push(`/questions/${questionId}/edit-delete-page`)
  //   );
  // }

  return (
    <>
      <Link to={`/questions/${questionId}/edit-delete-page`} className='settings-button'>
        <i className='fa-solid fa-ellipsis fa-2xl fa-inverse' />
      </Link>
    </>
  )
}
