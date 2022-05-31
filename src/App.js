import './App.css';
import React from 'react';
import ServiceFilter from './components/ServiceFilter';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <div className="main-page">
      <ServiceFilter/>
      <ServiceAdd/>
      <ServiceList/>
    </div>
  );
}

