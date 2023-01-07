import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';

import { ReactNumberCard } from '../src';

test('Test React Number Card', () => {
  render(<ReactNumberCard numberText="1,234" labelText="Hello" color="#fff" />);
});
