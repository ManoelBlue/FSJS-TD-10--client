import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Context
import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Components:
import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

// Components with Context:
const CourseDetailWithContext =  withContext(CourseDetail);
const CreateCourseWithContext =  withContext(CreateCourse);
const UserSignUpWithContext =  withContext(UserSignUp);

const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => console.log(data));
  });

  return (
    <Router>
        <Header></Header>

        <main>
          <Switch>
            <Route exact to="/" component={Courses} />
            <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
            <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
            <Route to="/courses/:id" component={CourseDetailWithContext} />
            <Route to="signin" component={UserSignIn} />
            <Route to="signup" component={UserSignUpWithContext} />
            <Route to="signout" component={UserSignOut} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
