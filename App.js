import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

// const store = createStore(friendReducer);
const middleware = [reduxThunk];
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(friendReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    // ...
  }

  render() {
    return (
      <Provider store={ store }>
        <AppNavigator
          screenProps={ {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
          } }
        />
      </Provider>
    );
  }
}


/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>MY FIRST  APP TEST FOR REDUX !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
