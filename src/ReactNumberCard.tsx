import React, { ComponentPropsWithoutRef } from 'react';

export interface ReactNumberCardProps {
  numberText: string | number;

  labelText: string;

  color: string;

  darkTheme?: boolean;

  wrapperProps?: Omit<ComponentPropsWithoutRef<'div'>, 'style'>;

  numberProps?: Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

  labelProps?: Omit<ComponentPropsWithoutRef<'div'>, 'className'>;
}

export function ReactNumberCard(props: ReactNumberCardProps) {
  const { color, darkTheme, labelProps, labelText, numberProps, numberText, wrapperProps } = props;
  const borderBottomColor = color;
  const darkClass = darkTheme ? 'dark' : '';
  return (
    <div
      className={ `react-number-card ${ darkClass }` }
      style={ { borderBottom: `solid 0.5rem ${ borderBottomColor }` } }
      { ...wrapperProps }
    >
      <span className="number" { ...numberProps }>{ numberText }</span>
      <span className="label" { ...labelProps }>{ labelText }</span>
    </div>
  );
}

