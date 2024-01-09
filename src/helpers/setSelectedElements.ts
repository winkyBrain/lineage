import {
  Node,
  Edge,
} from "reactflow";
import { TNodeColors } from '../index';

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
  nodeColors: TNodeColors,
}

export const setSelectedElements = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  selectedNodeId,
  selectedChain,
  isMultiSelect,
  nodeColors,
}: TSetSelectedElementsProps): void => {
  if (isMultiSelect) {
    setNodes(nodes.map((node) => {
      const isClickedNode = node.id === selectedNodeId;
      const nodeIsSelected = selectedChain.has(node.id) || node.selected;
      return {
        ...node,
        selected: nodeIsSelected,
        style: (nodeIsSelected && node.id === selectedNodeId) || node.data.clicked ? {
          backgroundColor: nodeColors.clicked
        } : nodeIsSelected ? { backgroundColor: nodeColors.selected } : undefined,
        data: { ...node.data, clicked: node.data.clicked || isClickedNode }
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
      const isClickedNode = node.id === selectedNodeId;
      const nodeIsSelected = selectedChain.has(node.id);

      return {
        ...node,
        selected: nodeIsSelected,
        style: nodeIsSelected && (isClickedNode) ? {
          backgroundColor: nodeColors.clicked
        } : nodeIsSelected ? { backgroundColor: nodeColors.selected } : undefined,
        data: { ...node.data, clicked: isClickedNode }
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