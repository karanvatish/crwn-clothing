import React from 'react';
import DirectoryMenu from '../../Containers/DirectoryMenu/DirectoryMenu';

import './homepage.styles.scss';

const HomepageComponent = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu />
  </div>
);

export default HomepageComponent;