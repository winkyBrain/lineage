import { Signal } from '@preact/signals-react';
import {
  NodeToolbar, Position, Node
} from "reactflow";
import { NodeTooltipRenderer } from '../NodeTooltipRenderer/NodeTooltipRenderer';

type TNodeTooltipProps = {
  hoveredNode: Signal<Node | null>,
  TooltipRenderer?: (data: any) => JSX.Element,
}

export const NodeTooltip = ({ hoveredNode, TooltipRenderer = NodeTooltipRenderer }: TNodeTooltipProps): JSX.Element | null => {
  if (!hoveredNode.value) {
    return null;
  }

  const attributes = hoveredNode.value.data.attributes;

  return (
    <NodeToolbar isVisible position={Position.Left} nodeId={hoveredNode.value.id}>
      <TooltipRenderer attributes={attributes} />
    </NodeToolbar>
  );
};
