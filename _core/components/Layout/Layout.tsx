import React, { FC, PropsWithChildren } from 'react';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
