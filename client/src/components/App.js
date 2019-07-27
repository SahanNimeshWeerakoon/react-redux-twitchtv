import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <div>
                    <Link path="/" component={StreamList} />
                    <Link path="/streams/new" component={StreamCreate} />
                    <Link path="/streams/delete" component={StreamDelete} />
                    <Link path="/streams/edit" component={StreamEdit} />
                    <Link path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App