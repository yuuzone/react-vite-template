import React from 'react';
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import './global.less';
import DefaultLayout from './site/layout/DefaultLayout';

NProgress.configure({ showSpinner: false });
NProgress.start();

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout />
  </React.StrictMode>,
  document.getElementById('root'),
  () => { 
    NProgress.done(); 
  }
);