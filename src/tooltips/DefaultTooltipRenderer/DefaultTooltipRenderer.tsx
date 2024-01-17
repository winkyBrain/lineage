import { TTooltipStyles } from '../../index';
import { TNodeAttributes } from '../../data';

type TNodeTooltipRendererProps = {
  attributes: TNodeAttributes;
  tooltipStyles: TTooltipStyles;
}

export const DefaultTooltipRenderer = ({ attributes, tooltipStyles }: TNodeTooltipRendererProps) => {
  const keys = Object.entries(attributes);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      ...tooltipStyles,
    }}>
      {keys.map(([key, value]) => {
        return (
          <span key={key}>{key}: {value}</span>
        );
      })}
    </div>
  )
};
