import { MarkerType, Edge, Node, Position } from "reactflow";
import { TInitialEdge, TInitialNode } from '../data';
import { connectivityComponents } from './getConnectivityComponents';
import { TEdgesMap } from './getEdgesMap';
import { EGraphEZIndexes } from '../enums/enums';

type TNodeWithLayer = TInitialNode & {
  layer: number;
  layerIndex: number;
  layerSize: {
    layerSize: number;
  },
}

export type TFinalNode = {
  id: string;
  data: {
    label: string;
    attributes: {
      nodeType: string;
    };
  };
  position: {
    x: number;
    y: number;
  };
  targetPosition?: Position;
  type?: 'input' | 'output' | 'custom';
  sourcePosition: Position;
  selected: false,
  zIndex?: number
}

const getFilteredNodes = (nodes: TInitialNode[], nodesMap: Map<string, TNodeWithLayer>) => {
  return nodes.filter((node) => {
    return !nodesMap.has(node.nodeId);
  });
};

export type TGetNextLayerReturnType = {
  finalLayer: number;
  // finalLayerSize: number;
};

const getNextLayer = (nodesMap: Map<string, TNodeWithLayer>, restNodes: TInitialNode[], restEdges: TInitialEdge[], layer: number)
  : TGetNextLayerReturnType => {
  if (restNodes.length === 0 || restEdges.length === 0) {
    return { finalLayer: layer - 1 };
  }
  let layerSize = {
    layerSize: 0
  };
  let layerIndex = 0;
  const connectedNodes = new Set();
  const usedEdges = new Set();
  restEdges.forEach((edge) => {
    const target = edge.target;
    const source = edge.source;
    if (nodesMap.has(target)) {
      usedEdges.add(target);
      connectedNodes.add(source);
    }
  });
  restNodes.forEach((node) => {
    if (connectedNodes.has(node.nodeId)) {
      const nodeId = node.nodeId;
      const nodeWithLayer: TNodeWithLayer = {
        ...node,
        layer,
        layerIndex,
        layerSize,
      };
      nodesMap.set(nodeId, nodeWithLayer);
      ++layerIndex;
      layerSize.layerSize++;
    }
  });
  const filteredNodes = getFilteredNodes(restNodes, nodesMap);
  const filteredEdges = restEdges.filter((edge) => {
    return !usedEdges.has(edge.target);
  });
  if (restNodes.length === filteredNodes.length) {
    const extraLayerSize = {
      layerSize: 0,
    }
    let extraLayerIndex = 0;
    restNodes.forEach((node) => {
      const nodeId = node.nodeId;
      const nodeWithLayer: TNodeWithLayer = {
        ...node,
        layer: -2,
        layerIndex: extraLayerIndex,
        layerSize: extraLayerSize,
      };
      nodesMap.set(nodeId, nodeWithLayer);
      ++extraLayerIndex;
      extraLayerSize.layerSize++;
    });
    return { finalLayer: layer - 1 };
  }
  return getNextLayer(nodesMap, filteredNodes, filteredEdges, layer + 1);
};

const getNodesMap = (nodes: TInitialNode[], edges: TInitialEdge[], initialLayer: number, targetsMap: TEdgesMap) => {
  const nodesMap: Map<string, TNodeWithLayer> = new Map();
  let layerIndex = 0;
  let layerSize = {
    layerSize: 0
  };
  nodes.forEach((node) => {
    //  || !targetsMap.has(node.nodeId)
    if (node.isFinal) {
      const nodeId = node.nodeId;
      const nodeWithLayer: TNodeWithLayer = {
        ...node,
        layer: initialLayer,
        layerIndex,
        layerSize,
      };
      nodesMap.set(nodeId, nodeWithLayer);
      layerSize.layerSize++;
      ++layerIndex;
    }
  });
  const filteredNodes = getFilteredNodes(nodes, nodesMap);
  const { finalLayer } = getNextLayer(
    nodesMap,
    filteredNodes,
    edges,
    initialLayer + 1,
    // layerSize.layerSize,
  );
  return { nodesMap, finalLayer };
};


export const getGraphsArray = (connectivityComponents: connectivityComponents, targetsMap: TEdgesMap) => {
  const initialLayer = 0;
  const result = connectivityComponents.map((connectivityComponent) => {
    const [nodes, edges] = connectivityComponent;
    const { nodesMap, finalLayer } = getNodesMap(nodes, edges, initialLayer, targetsMap);
    const selfConnectedNodes: Set<string> = new Set();
    let graphId: string = '';
    const mappedEdges = edges.map((edge) => {
      const target = edge.target;
      const source = edge.source;
      const finalEdge: Edge = {
        target,
        source,
        id: `${target}-${source}`,
        animated: true,
        zIndex: EGraphEZIndexes.DefaultEdgeZIndex,
        style: {
          stroke: "#a742f5",
          zIndex: EGraphEZIndexes.DefaultEdgeZIndex,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#a742f5"
        },
        data: {
          attributes: edge.attributes,
        }
      };
      if (target === source) {
        selfConnectedNodes.add(target);
      }
      return finalEdge as Edge;
    });
    const xStep = 250;
    const yStep = 100;
    const yShift = yStep / 2;
    const mappedNodes: Node[] = [];
    nodesMap.forEach((node) => {
      if (!graphId) {
        graphId = node.nodeId;
      }
      const finalNode: Node = {
        id: node.nodeId,
        data: {
          label: node.nodeName,
          attributes: node.attributes
        },
        position: {
          x: Math.abs(node.layer - finalLayer) * xStep,
          y: node.layerIndex * yStep - node.layerSize.layerSize * yShift
        },
        ...(node.layer !== finalLayer && {
          targetPosition: selfConnectedNodes.has(node.nodeId) ? Position.Bottom : Position.Left
        }),
        // убрали жопки
        // ...(node.layer === finalLayer && {
        //   type: "input"
        // }),
        // ...(node.layer === initialLayer && {
        //   type: "output"
        // }),
        // type: 'custom',
        sourcePosition: Position.Right,
        // draggable: false,
        selected: false,
        zIndex: EGraphEZIndexes.NodeZIndex,
      };
      mappedNodes.push(finalNode);
    });
    return { mappedEdges, mappedNodes, graphId };
  })
  return result;
}
