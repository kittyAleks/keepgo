import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {persistor, store} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
