import React from 'react';

const App = () => {
  return (
    <div>
      <Title name="React" />
      <SubTitle />
    </div>
  );
};

const Title = props => (
  <h1>{props.name}</h1>
);

//Function needs no arguments, so in App <SubTitle /> has no other code inside
function SubTitle() {
  return <p>A JavaScript library for building user interfaces.</p>;
}

export default App;