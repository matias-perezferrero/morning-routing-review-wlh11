import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

function StepOne(props) {
    return (
        <div>
            <h2>stepOne!</h2>
            <input name="email" placeholder="email" onChange={(e) => props.handleChange(e)} />
            <button><Link to="/post/two">Next Step</Link></button>
        </div>
    )
}

class Post extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: ''
        }
    }

    handleChange = (e) => {
        let { name } = e.target
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = () => {
        if (!this.state.email) {
            alert('please fill in email')
        } else {
            alert('submitted info!')
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Post</h1>
                <Switch>
                    <Route path="/post/one" render={(props) => {
                        return (
                            <StepOne {...props} handleChange={this.handleChange} />
                        )
                    }} />
                    <Route path="/post/two"
                        render={(props) => {
                            return (
                                <StepTwo {...props} handleChange={this.handleChange} />
                            )
                        }} />
                    <Route path='/post/two' component={StepTwo} />
                </Switch>
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}


function StepTwo(props) {
    return (
        <div>
            <h2>stepTwo!</h2>
            <input name="name" placeholder="name" onChange={(e) => props.handleChange(e)} />
            <Link to="/post/one"><button>Go Back</button></Link>
        </div>
    )
}

export default Post