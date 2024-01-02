import { TNodeAttributes } from '../../data';

type TNodeTooltipRendererProps = {
  attributes: TNodeAttributes;
}

export const NodeTooltipRenderer = ({ attributes }: TNodeTooltipRendererProps) => {
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '2px',
      backgroundColor: 'white',
      padding: '2px 6px'
    }}>
      <span>{attributes.nodeType}</span>
    </div>
  )
};
