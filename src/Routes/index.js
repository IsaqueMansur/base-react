import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* import { toast } from 'react-toastify'; */

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routers() {
  /* toast.success('Toast');
  toast.error('Toast');
  toast.info('Toast'); */
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}
