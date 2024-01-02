import { TInitialEdge } from '../data';
import { EMapEdgesKeys } from '../enums/enums';

export type TEdgesMap = Map<string, string[]>;

export const getEdgesMap = (edges: TInitialEdge[], key: EMapEdgesKeys, key2: EMapEdgesKeys): TEdgesMap => {
  const map: TEdgesMap = new Map();
  edges.forEach((edge) => {
    const target = edge[key];
    if (!map.has(target)) {
      map.set(target, []);
    }
    const currentEdges = map.get(target) as string[];
    currentEdges.push(edge[key2]);
    map.set(target, currentEdges);
  });
  return map;
};