
export interface ReactNumberCardProps {
  numberText: string | number;

  labelText: string;

  color: string;
}

export function ReactNumberCard(props: ReactNumberCardProps) {
  const { numberText } = props;
  return (
    <div className="react-number-card">{ numberText }</div>
  )
}

