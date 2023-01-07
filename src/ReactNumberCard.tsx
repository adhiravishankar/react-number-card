import React, { ComponentPropsWithoutRef } from 'react';


export interface ReactNumberCardProps {
  numberText: string | number;

  labelText: string;

  color: string;

  wrapperProps?: Omit<ComponentPropsWithoutRef<'div'>, 'style'>;
}

export function ReactNumberCard(props: ReactNumberCardProps) {
  const { labelText, numberText, wrapperProps } = props;
  const color = props.color ?? randomColor();
  return (
    <div className="react-number-card" style={ { borderBottom: `solid 0.5rem ${ color }` } }>
      <span className="number">{ numberText }</span>
      <span className="label">{ labelText }</span>
    </div>
  );
}

