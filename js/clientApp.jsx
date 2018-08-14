import React from 'react';
import { render } from 'react-dom';

const MyTitle = props => (
  <div>
    <h1 style={{ color: props.color }}>{props.title}</h1>
  </div>
);

// Composite component: a component made up of other components
const MyFirstComponent = () => (
  <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="GreenYellow" />
    <MyTitle title="Narcos" color="YellowGreen" />
    <MyTitle title="Orange Is The New Black" color="LimeGreen" />
    <MyTitle title="Stranger Things" color="Lime" />
  </div>
);

render(<MyFirstComponent />, document.getElementById('app'));
