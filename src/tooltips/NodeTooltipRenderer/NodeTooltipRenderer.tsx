import { TNodeAttributes } from '../../data';

type TNodeTooltipRendererProps = {
  attributes: TNodeAttributes;
}

export const NodeTooltipRenderer = ({ attributes }: TNodeTooltipRendererProps) => {
  const keys = Object.keys(attributes);

  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '2px',
      backgroundColor: 'white',
      padding: '2px 6px'
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
