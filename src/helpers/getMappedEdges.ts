import { TInitialEdge } from '../data';
import { EMapEdgesKeys } from '../enums/enums';

export type TInitialEdgesMap = Map<string, TInitialEdge[]>;

export const getMappedEdges = (edges: TInitialEdge[], key: EMapEdgesKeys): TInitialEdgesMap => {
  const map: TInitialEdgesMap = new Map();
  edges.forEach((edge) => {
    const target = edge[key];
    if (!map.has(target)) {
      map.set(target, [edge]);
    } else {
      const currentEdges = map.get(target) as [TInitialEdge];
      currentEdges.push(edge);
      map.set(target, currentEdges);
    }
  });
  return map;
};