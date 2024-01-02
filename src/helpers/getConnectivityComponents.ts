import { TInitialEdge, TInitialNode } from '../data';
import { EMapEdgesKeys } from '../enums/enums';
import { getMappedEdges, TInitialEdgesMap } from '../helpers/getMappedEdges';

export type connectivityComponents = [TInitialNode[], TInitialEdge[]][];

const getConnectedNodes = (unusedNodes: Set<string>, mappedTargets: TInitialEdgesMap, mappedSources: TInitialEdgesMap) => {
  const connectedNodes: Set<string> = new Set();
  const firstKey = unusedNodes.keys().next().value;
  connectedNodes.add(firstKey);
  unusedNodes.delete(firstKey);
  let prevIterationNodes: Set<string> = connectedNodes;
  while (firstKey) {
    const currentIterationNodes: Set<string> = new Set();
    prevIterationNodes.forEach((nodeId) => {
      mappedSources.get(nodeId)?.map((edge: TInitialEdge) => {
        return edge.target;
      })
        .filter((nodeId: string) => {
          return !connectedNodes.has(nodeId);
        })
        .forEach((nodeId: string) => {
          currentIterationNodes.add(nodeId);
        })
      mappedTargets.get(nodeId)?.map((edge: TInitialEdge) => {
        return edge.source;
      })
        .filter((nodeId: string) => {
          return !connectedNodes.has(nodeId);
        })
        .forEach((nodeId: string) => {
          currentIterationNodes.add(nodeId);
        })
      currentIterationNodes.forEach((nodeId: string) => {
        connectedNodes.add(nodeId);
        unusedNodes.delete(nodeId);
      })
    });
    prevIterationNodes = currentIterationNodes;
    if (currentIterationNodes.size === 0) {
      break;
    }
  }
  return connectedNodes;
}

export const getConnectivityComponents = (nodes: TInitialNode[], edges: TInitialEdge[]): connectivityComponents => {
  const connectivityComponents: connectivityComponents = [];

  const mappedTargets = getMappedEdges(edges, EMapEdgesKeys.Target);
  const mappedSources = getMappedEdges(edges, EMapEdgesKeys.Source);
  const mappedNodes: Map<string, TInitialNode> = new Map();
  const unusedNodes: Set<string> = new Set();
  nodes.forEach((node) => {
    const nodeId = node.nodeId;
    mappedNodes.set(nodeId, node);
    unusedNodes.add(nodeId);
  })

  while (unusedNodes.size !== 0) {
    const nodesIds = getConnectedNodes(unusedNodes, mappedTargets, mappedSources);
    const currentEdges = edges.filter((edge) => {
      return nodesIds.has(edge.source) || nodesIds.has(edge.target);
    })
    const connectedNodes: TInitialNode[] = [];
    nodesIds.forEach((nodeId: string) => {
      const currentNode = mappedNodes.get(nodeId) as TInitialNode;
      connectedNodes.push(currentNode);
    })
    connectivityComponents.push([connectedNodes, currentEdges]);
  }
  return connectivityComponents;
};
