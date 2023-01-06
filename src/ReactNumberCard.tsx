import React, {ComponentPropsWithoutRef} from 'react';


export interface ReactNumberCardProps {
  numberText: string | number;

  labelText: string;

  color: string;

  wrapperProps?: Omit<ComponentPropsWithoutRef<"div">, "style">;
}

export function ReactNumberCard(props: ReactNumberCardProps) {
  const { color, labelText, numberText, wrapperProps } = props;
  return (
    <div className="react-number-card-wrapper" style={ { background: color } } { ...wrapperProps }>
      <div className="react-number-card">
        <span className="number">{ numberText }</span>
        <span className="label">{ labelText }</span>
      </div>
    </div>
  )
}

