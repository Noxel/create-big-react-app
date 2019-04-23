import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import { Switch } from 'react-router';
import NotFound from './NotFound';
import ModalLearn from '../component/ModalLearn';

export default () => {
    return (
        <>
            {/* Route */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>

            {/* Modal */}
            <ModalLearn />
        </>
    );
};
