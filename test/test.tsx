import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { ReactNumberCard } from '../src';

test('Test React Number Card number', () => {
  const component = render(<ReactNumberCard numberText="1,234" labelText="Hello" color="#fff" />);
  const numberText = component.getByText('1,234' as any);
  expect(numberText.classList.contains('number')).toBe(true);
});

test('Test React Number Card label', () => {
  const component = render(<ReactNumberCard numberText="1,234" labelText="Hello" color="#fff" />);
  const numberText = component.getByText('Hello' as any);
  expect(numberText.classList.contains('label')).toBe(true);
});

test('Test React Number Card number card', () => {
  const component = render(<ReactNumberCard numberText="1,234" labelText="Hello" color="#fff" />);
  const numberCard = component.container.firstElementChild;
  expect(numberCard.classList.contains('react-number-card')).toBe(true);
});

test('Test React Number Card dark', () => {
  const component = render(<ReactNumberCard numberText="1,234" labelText="Hello" color="#fff" darkTheme />);
  const numberCard = component.container.firstElementChild;
  expect(numberCard.classList.contains('dark')).toBe(true);
});
