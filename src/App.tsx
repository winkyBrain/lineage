import Graph from './Graph/Graph';
import { nodes, edges } from './data';
// import { testNodes as nodes, testEdges as edges } from './data2';
import { getGraphsArray } from './helpers/getGraphsArray';
import { getConnectivityComponents } from './helpers/getConnectivityComponents';
import { getEdgesMap } from './helpers/getEdgesMap';
import { EGraphEZIndexes, EMapEdgesKeys } from './enums/enums';
import { TConfig, TEdgeStyles } from './index';
import { Edge, Node } from 'reactflow';

// const styles = { display: 'flex', flexDirection: 'column', height: "100%" };
type TAppProps = {
  config: TConfig
}

const getStyledNodes = (nodes: Node[], nodeStyle: React.CSSProperties) => {
  return nodes.map((node) => {
    return {
      ...node,
      style: nodeStyle,
    }
  });
};

const getStyledEdges = (edges: Edge[], edgeStyle: TEdgeStyles) => {
  return edges.map((edge) => {
    return {
      ...edge,
      style: {
        ...edgeStyle,
        zIndex: EGraphEZIndexes.DefaultEdgeZIndex,
      }
    }
  });
};

const App = ({ config }: TAppProps) => {
  const targetsMap = getEdgesMap(edges, EMapEdgesKeys.Source, EMapEdgesKeys.Target);
  const sourcesMap = getEdgesMap(edges, EMapEdgesKeys.Target, EMapEdgesKeys.Source);
  const connectivityComponents = getConnectivityComponents(nodes, edges);
  const graphsArray = getGraphsArray(connectivityComponents, targetsMap);

  return (
    <>
      {graphsArray.map((graph) => {
        const styleNodes = getStyledNodes(graph.mappedNodes, { ...config.commonNodeStyles, ...config.defaultNodeStyles });
        const styledEdges = getStyledEdges(graph.mappedEdges, config.edgeStyles);
        return (
          <Graph
            key={graph.graphId}
            mappedNodes={styleNodes}
            mappedEdges={styledEdges}
            targetsMap={targetsMap}
            sourcesMap={sourcesMap}
            config={config}
          />
        )
      })}
    </>
  );
};

export default App;
