import { Signal } from '@preact/signals-react';
import {
  NodeToolbar, Position, Node
} from "reactflow";
import { DefaultTooltipRenderer } from '../DefaultTooltipRenderer/DefaultTooltipRenderer';
import { TTooltipStyles } from '../../index';

type TNodeTooltipProps = {
  hoveredNode: Signal<Node | null>,
  TooltipRenderer?: (data: any) => JSX.Element,
  tooltipStyles: TTooltipStyles,
}

export const NodeTooltip = ({ hoveredNode, TooltipRenderer = DefaultTooltipRenderer, tooltipStyles }: TNodeTooltipProps): JSX.Element | null => {
  if (!hoveredNode.value) {
    return null;
  }

  const attributes = hoveredNode.value.data.attributes;

  return (
    <NodeToolbar isVisible position={Position.Left} nodeId={hoveredNode.value.id}>
      <TooltipRenderer attributes={attributes} tooltipStyles={tooltipStyles} />
    </NodeToolbar>
  );
};
