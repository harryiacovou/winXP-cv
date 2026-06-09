import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import WinXP from 'WinXP';

const App = () => {
  return (
    <>
      <WinXP />
      <Analytics />
    </>
  );
};

export default App;
