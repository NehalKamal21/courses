import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from "./components/header/header";
import { Spin } from "antd";

const HomePage = lazy(() => import('./routes/homePage'));
const CourseDetails = lazy(() => import('./routes/courseDetails'));
const Classroom = lazy(() => import('./routes/classroom'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<Spin size="large" className="spinner" />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/course/:id" component={CourseDetails} />
        <Route exact path='/course/:id/classroom' component={Classroom} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
