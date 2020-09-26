import React from 'react';
import Layout from '../container/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../pages/Routing'

export default function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <Routes />
      </Layout>
    </BrowserRouter>

  );
}
