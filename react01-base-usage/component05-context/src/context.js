import React from 'react';
const context = React.createContext('default-data');
const { Provider, Consumer } = context;
export { Provider, Consumer }
export default context;