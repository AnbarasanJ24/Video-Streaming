import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>Page1</div>
    )
}

const Page2 = () => {
    return (
        <div>Page2</div>
    )
}

const App = () => {
    return <div>
        <BrowserRouter>
            <Route path="/page1" exact component={Page1} />
            <Route path="/page2" exact component={Page2} />
        </BrowserRouter>
    </div>
};

export default App;