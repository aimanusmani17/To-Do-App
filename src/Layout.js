import React from 'react';
import LayoutStyle from './Layout.module.css';

const Layout = () => {
  return (
    <>
    <div className={LayoutStyle.main}>
        
    <div className={LayoutStyle.header}>
        Header
    </div>

    <div className={LayoutStyle.content}>
        Content
    </div>

    <div className={LayoutStyle.footer} >
        Footer
    </div>
    </div>

    </>
  )
}

export default Layout