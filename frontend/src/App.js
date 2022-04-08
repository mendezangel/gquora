import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from './components/HomePage';
import NewQuestionForm from "./components/NewQuestionForm";
import SingleQuestionCard from "./components/SingleQuestionCard";
import EditDeletePage from "./components/SingleQuestionCard/EditDeletePage";
import EditQuestionForm from "./components/EditQuestionForm";
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/questions/new'>
            <NewQuestionForm />
          </Route>
          <Route path='/questions/:questionId' exact>
            <SingleQuestionCard />
          </Route>
          <Route path='/questions/:questionId/edit-delete-page' exact>
            <EditDeletePage />
          </Route>
          <Route path='/questions/:questionId/edit' exact>
            <EditQuestionForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
