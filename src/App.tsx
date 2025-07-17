import React from 'react';
import { Provider } from 'react-redux'; 
import RootNavigator from './navigation';
import { store } from './store';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log console
  return (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
  );
};

export default App;
