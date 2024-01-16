import Tippy from '@tippyjs/react';
import { EdgeTooltipRenderer } from '../EdgeTooltipRenderer/EdgeTooltipRenderer';
import styles from './styles.module.css'

type TEdgeTooltipProps = {
  data: any,
  TooltipRenderer?: (data: any) => JSX.Element,
}

export const EdgeTooltip = ({ data, TooltipRenderer = EdgeTooltipRenderer }: TEdgeTooltipProps) => {
  const buttonHeight = 20;
  const buttonWidth = 20;

  return (
    <Tippy content={
      <TooltipRenderer attributes={data.attributes} />
    }
      duration={0}
      placement='top'
      maxWidth={500}
    >
      <button className={styles.edgeButton}
        style={{
          height: `${buttonHeight}px`,
          width: `${buttonWidth}px`,
        }}
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
