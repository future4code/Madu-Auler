import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import FeedPage from '../pages/FeedPage'
import PostPage from '../pages/PostPage'


const Router = ({ setRightButtonText }) => {
    return (

        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/signup">
                <SignUpPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/feed">
                <FeedPage />
            </Route>
            <Route exact page="/post/:id">
                <PostPage />
            </Route>
            <Router>
                <div>Error</div>
            </Router>
        </Switch>

    )
}

export default Router