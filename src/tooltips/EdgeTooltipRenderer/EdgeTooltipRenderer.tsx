import { TEdgeAttributes } from '../../data';

type TEdgeTooltipRenderer = {
  attributes: TEdgeAttributes,
}

export const EdgeTooltipRenderer = ({ attributes }: TEdgeTooltipRenderer) => {
  const keys = Object.keys(attributes);

  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '2px',
      backgroundColor: 'white',
      padding: '2px 6px',
    }}>
      {keys.map((key: string) => {
        return (
          // @ts-ignore
          <span key={key}>{key}: {attributes[key]}</span>
        );
      })}
    </div>
  )
};
