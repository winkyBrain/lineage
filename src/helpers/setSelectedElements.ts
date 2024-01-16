import {
  Node,
  Edge,
} from "reactflow";
import { TConfig } from '../index';

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
  config: TConfig,
}

export const setSelectedElements = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  selectedNodeId,
  selectedChain,
  isMultiSelect,
  config,
}: TSetSelectedElementsProps): void => {
  if (isMultiSelect) {
    setNodes(nodes.map((node) => {
      const isClickedNode = node.id === selectedNodeId;
      const nodeIsSelected = selectedChain.has(node.id) || node.selected;
      return {
        ...node,
        selected: nodeIsSelected,
        style: {
          ...node.style,
          ...((nodeIsSelected && isClickedNode) || node.data.clicked ?
            config.clickedNodeStyles
            : nodeIsSelected ? config.selectedNodeStyles : config.defaultNodeStyles),
        },
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
        style: {
          ...node.style,
          ...(nodeIsSelected && isClickedNode ?
            config.clickedNodeStyles
            : nodeIsSelected ? config.selectedNodeStyles : config.defaultNodeStyles),
        },
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