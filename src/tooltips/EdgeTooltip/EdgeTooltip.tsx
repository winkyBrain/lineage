import Tippy from '@tippyjs/react';
import { edgeTooltipStyles, edgeLabelStyles } from '../../Graph/Graph';
import { DefaultTooltipRenderer } from '../DefaultTooltipRenderer/DefaultTooltipRenderer';
import styles from './styles.module.css'

type TEdgeTooltipProps = {
  data: any,
  TooltipRenderer?: (data: any) => JSX.Element,
}

export const EdgeTooltip = ({ data, TooltipRenderer = DefaultTooltipRenderer }: TEdgeTooltipProps) => {

  return (
    <Tippy content={
      <TooltipRenderer attributes={data.attributes} tooltipStyles={edgeTooltipStyles.value} />
    }
      duration={0}
      placement='top'
      maxWidth={500}
    >
      <button className={styles.edgeButton}
        style={edgeLabelStyles.value}
        onMouseEnter={() => {
          console.log('edge tooltip mounted');
        }}
        onMouseLeave={() => {
          console.log('edge tooltip unmounted');
        }}
      >
        ?
      </button>
    </Tippy>
  );
};
