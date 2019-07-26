import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return (
        <div>
            Page One<br />
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    )
}
const PageTwo = () => {
    return (
        <div>
            <div>
                Page Two<br />
                <Link to="/">Navigate to page one</Link>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App