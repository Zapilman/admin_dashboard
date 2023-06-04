import React, { FC, PropsWithChildren } from 'react';

import styles from './CenterContainer.module.scss';

const CenterContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CenterContainer;
