import { TNodeAttributes } from '../../data';

type TNodeTooltipRendererProps = {
  attributes: TNodeAttributes;
}

export const NodeTooltipRenderer = ({ attributes }: TNodeTooltipRendererProps) => {
  const keys = Object.entries(attributes);

  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '6px',
      backgroundColor: 'white',
      padding: '2px 6px',
      display: 'flex', // хардкод
      flexDirection: 'column', // хардкод
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
    }}>
      {keys.map(([key, value]) => {
        return (
          <span key={key}>{key}: {value}</span>
        );
      })}
    </div>
  )
};
