import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import GetLists from './classcomponent/GetLists';
import PostLists from './classcomponent/PostLists';
import HookCounter from './hookComponent/HookCounter';
import HookCount5 from './hookComponent/HookCount5';
import HookForm from './hookComponent/HookForm';
import HookArrays from './hookComponent/HookArrays';
import TitleUseEffect from './hookComponent/TitleUseEffect';
import HookConditonUseEffect from './hookComponent/HookConditonUseEffect';
import HookMousCoordinate from './hookComponent/HookMousCoordinate';
import ClassMouseMove from './classcomponent/ClassMouseMove';
import MouseContianer from './classcomponent/MouseContianer';
import HookInterval from './hookComponent/HookInterval';
import HookFetching from './hookComponent/HookFetching';
import HookFetchingDataOnClick from './hookComponent/HookFetchingDataOnClick';
import ComA from './hookComponent/ComA';
import CounterReducer from './hookComponent/CounterReducer';
import CounterReducerAdvanced from './hookComponent/CounterReducerAdvanced';

export const UserContext = React.createContext()
export const DeliverContext = React.createContext()

export const CountContext = React.createContext()

const initialValue = 0;

const reducer = (state, action) => {

    switch(action){
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'reseat':
            return initialValue
        default:
            return state
    }
}

function App() {
  const [newState, dispatch] = useReducer(reducer, initialValue)
  return (
    <div className="App">
      {/*<GetLists/>
      <PostLists/>
      <HookCounter/>
      <HookCount5/>
      <HookForm/>
      <HookArrays/>
      <TitleUseEffect/>
      <HookConditonUseEffect/>
      <HookMousCoordinate/>
      <ClassMouseMove/>
      <MouseContianer/>
      <HookInterval/>
      <HookFetching/>
      <HookFetchingDataOnClick/>
  <UserContext.Provider value={"Ahmad Shah"}>
    <DeliverContext.Provider value={"he is an engineer"}>
      <ComA/>
    </DeliverContext.Provider>
  </UserContext.Provider>
  <CounterReducer/>
      <CounterReducerAdvanced/>*/}
      <CountContext.Provider value={{countC:newState, dispatchC: dispatch}}>
          <ComA/>
      </CountContext.Provider>
      
    </div>
  );
}

export default App;
