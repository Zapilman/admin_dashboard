import React from 'react';

import { Button } from '_ui/src/components/Button';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Button title="qqqq" fullWidth />
      <Button title="qqqq" fullWidth />
      <Button title="qqqq" fullWidth />
      <Button title="qqqq" fullWidth />
      <Button title="qqqq" fullWidth />
    </aside>
  );
};

export default Sidebar;
