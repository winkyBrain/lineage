import { TEdgesMap } from './getEdgesMap';


// попытаться переписать на while
const checkAndAddIds = (result: Set<string>, nodesId: string[], edgesMap: TEdgesMap) => {
  if (nodesId) {
    nodesId.forEach((nodeId: string) => {
      if (!result.has(nodeId)) {
        result.add(nodeId);
        const connectionsId = edgesMap.get(nodeId);
        if (connectionsId) {
          let hasNewConnections = false;;
          for (const connectionId of connectionsId) {
            if (!hasNewConnections && !result.has(connectionId)) {
              hasNewConnections = true;
            }
          }
          if (hasNewConnections) {
            return checkAndAddIds(result, connectionsId, edgesMap);
          } else {
            return result;
          }
        }
      }
    })
  }
};

export const getSelectedNodesId = (initialNodeId: string, targetsMap: TEdgesMap, sourcesMap: TEdgesMap) => {
  const result: Set<string> = new Set();
  result.add(initialNodeId);
  checkAndAddIds(result, targetsMap.get(initialNodeId)!, targetsMap);
  checkAndAddIds(result, sourcesMap.get(initialNodeId)!, sourcesMap);
  return result;
}