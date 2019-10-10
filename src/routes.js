import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Post from './components/Post'

function RouteOne() {
    return <div>One!</div>
}

function RouteTwo(props) {
    console.log('RouteTwo', props)
    return (
        <div>
            Two!
        </div>
    )
}

export default (
    <Switch>
        <Route path="/one" exact component={RouteOne} />
        <Route path="/one/two" component={RouteTwo} />
        <Route path="/post" component={Post} />
    </Switch>
)

