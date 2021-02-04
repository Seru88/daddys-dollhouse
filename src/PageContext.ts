import React from 'react';
const PageContext = React.createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);
export default PageContext;
