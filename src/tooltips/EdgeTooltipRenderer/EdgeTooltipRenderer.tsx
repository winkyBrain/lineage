import { TEdgeAttributes } from '../../data';

type TEdgeTooltipRenderer = {
  attributes: TEdgeAttributes,
}

export const EdgeTooltipRenderer = ({ attributes }: TEdgeTooltipRenderer) => {
  const keys = Object.entries(attributes);

  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '6px',
      backgroundColor: 'white',
      padding: '2px 6px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {keys.map(([key, value]) => {
        return (
          <span key={key}>{key}: {value}</span>
        );
      })}
    </div>
  )
};
