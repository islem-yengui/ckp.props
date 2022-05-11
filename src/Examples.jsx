import React from 'react'

const Examples = ({name}) => {
  return (
    <div>
      <h1> {name}</h1>
    </div>
  );
};
Examples.defaultProps = {
  name: 'islem'
};

export default Examples