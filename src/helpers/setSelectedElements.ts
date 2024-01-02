import {
  Node,
  Edge,
} from "reactflow";
import { ENodeColors } from '../enums/enums';

type TNodes = Node<any, string | undefined>[];
type TEdges = Edge<any>[];

type TSetSelectedElementsProps = {
  nodes: TNodes;
  edges: TEdges;
  setNodes: React.Dispatch<React.SetStateAction<TNodes>>;
  setEdges: React.Dispatch<React.SetStateAction<TEdges>>;
  selectedNodeId: string,
  selectedChain: Set<string>;
  isMultiSelect: boolean;
}

export const setSelectedElements = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  selectedNodeId,
  selectedChain,
  isMultiSelect,
}: TSetSelectedElementsProps): void => {
  if (isMultiSelect) {
    setNodes(nodes.map((node) => {
      const nodeIsSelected = selectedChain.has(node.id);
      return {
        ...node,
        selected: nodeIsSelected || node.selected,
        style: (nodeIsSelected && node.id === selectedNodeId) || node.style ? {
          backgroundColor: ENodeColors.Clicked
        } : undefined,
      };
    }));
    setEdges(edges.map((edge) => {
      const edgeIsSelected = (selectedChain.has(edge.target) && selectedChain.has(edge.source)) || edge.selected;
      return {
        ...edge,
        selected: edgeIsSelected,
      }
    }));
  } else {
    setNodes(nodes.map((node) => {
      const nodeIsSelected = selectedChain.has(node.id);
      return {
        ...node,
        selected: nodeIsSelected,
        style: nodeIsSelected && (node.id === selectedNodeId) ? {
          backgroundColor: ENodeColors.Clicked
        } : undefined,
      };
    }));
    setEdges(edges.map((edge) => {
      const edgeIsSelected = selectedChain.has(edge.target) && selectedChain.has(edge.source);
      return {
        ...edge,
        selected: edgeIsSelected,
      }
    }));
  }
}