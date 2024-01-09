import Graph from './Graph/Graph';
import { nodes, edges } from './data';
import { getGraphsArray } from './helpers/getGraphsArray';
import { getConnectivityComponents } from './helpers/getConnectivityComponents';
import { getEdgesMap } from './helpers/getEdgesMap';
import { EMapEdgesKeys } from './enums/enums';
import { TConfig } from './index';

// const styles = { display: 'flex', flexDirection: 'column', height: "100%" };
type TAppProps = {
  config: TConfig
}

const App = ({ config }: TAppProps) => {
  const targetsMap = getEdgesMap(edges, EMapEdgesKeys.Source, EMapEdgesKeys.Target);
  const sourcesMap = getEdgesMap(edges, EMapEdgesKeys.Target, EMapEdgesKeys.Source);
  const connectivityComponents = getConnectivityComponents(nodes, edges);
  const graphsArray = getGraphsArray(connectivityComponents, targetsMap);

  return (
    <>
      {graphsArray.map((graph) => {
        return (
          <Graph
            key={graph.graphId}
            mappedNodes={graph.mappedNodes}
            mappedEdges={graph.mappedEdges}
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
