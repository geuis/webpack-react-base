import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './index.style';

const App = () => {
  return (
    <Wrapper>
      The App Component
    </Wrapper>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
