import { ReactNumberCard } from '../src'
import React from 'react';
export function App() {
  return (
    <div style={ { width: '10rem', height: '10rem' } }>
      <ReactNumberCard color="red" numberText="1,234" labelText="Hello" />
    </div>
  );
}
