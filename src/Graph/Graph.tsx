import ReactFlow, {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  MiniMap,
} from "reactflow";
import { useSignal } from "@preact/signals-react";
import "reactflow/dist/style.css";
import { CustomEdge } from "./CustomEdge/CustomEdge";
import { SelectionChangeLogger } from "./SelectionChangeLogger/SelectionChangeLogger";
import { TEdgesMap } from '../helpers/getEdgesMap';
import { getSelectedNodesId } from '../helpers/getSelectedNodesId';
import { setSelectedElements } from '../helpers/setSelectedElements';
import { NodeTooltip } from '../tooltips/NodeTooltip/NodeTooltip';
import { CustomNode } from './CustomNode/CustomNode';
import { EGraphEZIndexes } from '../enums/enums';
import styles from './styles.module.css'
import { ToggleComponent } from './SettingsPanel/SettingsPanel';
import { TConfig } from '../index';

type TGraphProps = {
  mappedNodes: Node[];
  mappedEdges: Edge[];
  targetsMap: TEdgesMap;
  sourcesMap: TEdgesMap;
  config: TConfig;
}

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const defaultEdgeOptions = {
  type: 'custom',
  stroke: '#a742f5',
}

const Graph = ({ mappedNodes, mappedEdges, targetsMap, sourcesMap, config }: TGraphProps): JSX.Element => {
  const [nodes, setNodes, onNodesChange] = useNodesState(mappedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mappedEdges);
  const hoveredNode = useSignal<Node | null>(null);
  const isEdgesFirst = useSignal(false);

  const minimapNodeColor = (node: Node): string => {
    if (node.data.clicked) {
      return config.nodeColors.clicked;
    }
    if (node.selected) {
      return config.nodeColors.selected;
    }
    return config.nodeColors.default;
  }

  const onEdgeClick = (_: any, edge: Edge) => {
    console.log(edge);
  };

  const onNodeClick = (event: React.MouseEvent, selectedNode: Node) => {
    const selectedNodeId = selectedNode.id;
    const selectedChain = getSelectedNodesId(selectedNodeId, targetsMap, sourcesMap);
    setSelectedElements({
      nodes,
      edges,
      setNodes,
      setEdges,
      selectedNodeId,
      selectedChain,
      isMultiSelect: event.ctrlKey,
      nodeColors: config.nodeColors,
    });
  };

  const onPaneClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.stopPropagation();
    setNodes(mappedNodes);
  }

  const onNodeMouseEnter = (_event: React.MouseEvent, node: Node) => {
    hoveredNode.value = (node);
  };

  const onNodeMouseLeave = (_event: React.MouseEvent, _node: Node) => {
    hoveredNode.value = (null);
  };

  const setIsEdgesFirst = () => {
    isEdgesFirst.value = !isEdgesFirst.value;
    setEdges(edges.map((edge) => {
      return {
        ...edge,
        style: {
          ...edge.style,
          zIndex: isEdgesFirst.value ? EGraphEZIndexes.EdgeFirstZIndex : EGraphEZIndexes.DefaultEdgeZIndex,
        },
        zIndex: isEdgesFirst.value ? EGraphEZIndexes.EdgeFirstZIndex : EGraphEZIndexes.DefaultEdgeZIndex,
      }
    }));
  };

  return (
    <div style={{ height: '50%', border: '1px solid black', borderRadius: '5px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        nodesConnectable={false}
        nodesDraggable={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeClick={onEdgeClick}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        multiSelectionKeyCode={"ControlLeft"}
        minZoom={0.2}
        maxZoom={5}
        fitView
      // attributionPosition="bottom-left"
      >
        <ToggleComponent toggled={isEdgesFirst} label='Edges first' setIsEdgesFirst={setIsEdgesFirst} />
        <MiniMap nodeColor={minimapNodeColor} zoomable pannable className={styles.miniMap} />
        <SelectionChangeLogger />
        <NodeTooltip hoveredNode={hoveredNode} />
      </ReactFlow>
    </div>
  );
};

export default Graph;
