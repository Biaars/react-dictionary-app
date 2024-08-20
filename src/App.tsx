import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import ResultList from './components/ResultList';


export const InputContext = React.createContext({
  inputValue: "",
  setInputValue: (value: string) => {}
});

function App() {
  const [inputValue, setInputValue] = useState("example");
  const value = {inputValue, setInputValue}
  
  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
        <ResultList />
      </div>
    </InputContext.Provider>
  );
}

export default App;
