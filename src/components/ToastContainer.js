import React from 'react';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <div className="app-container">
            <HeroForm />
            <HeroList />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default App;
