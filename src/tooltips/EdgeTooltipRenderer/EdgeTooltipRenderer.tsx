import { TEdgeAttributes } from '../../data';

type TEdgeTooltipRenderer = {
  attributes: TEdgeAttributes,
}

export const EdgeTooltipRenderer = ({ attributes }: TEdgeTooltipRenderer) => {
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '2px',
      backgroundColor: 'white',
      padding: '2px 6px',
    }}>
      <span>{attributes.appId}</span>
    </div>
  )
};
