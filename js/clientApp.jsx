const MyTitle = props => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = () => {
  return React.createElement('div', {}, [
    React.createElement(MyTitle, {
      title: 'Game of Thrones',
      color: 'GreenYellow',
    }),
    React.createElement(MyTitle, {
      title: 'Narcos',
      color: 'YellowGreen',
    }),
    React.createElement(MyTitle, {
      title: 'Orange Is The New Black',
      color: 'LimeGreen',
    }),
    React.createElement(MyTitle, {
      title: 'Stranger Things',
      color: 'Lime',
    }),
  ]);
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
