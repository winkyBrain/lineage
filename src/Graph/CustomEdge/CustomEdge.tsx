import { getBezierPath, BaseEdge, EdgeProps, EdgeLabelRenderer } from "reactflow";
import { EGraphEZIndexes } from '../../enums/enums';
import { EdgeTooltip } from '../../tooltips/EdgeTooltip/EdgeTooltip';

export const CustomEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
  // id,
  data,
}: EdgeProps): JSX.Element => {
  const edgePathParams = {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  };

  // const showTooltip = useSignal(false);
  const [path, labelX, labelY] = getBezierPath(edgePathParams);
  // const { zoom } = useViewport();
  // const scale = 1 / zoom;
  // const buttonHeight = 20;
  // const buttonWidth = 20;
  // const tooltipId = `#${id}`;

  return (
    <>
      <BaseEdge path={path} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            zIndex: style?.zIndex === EGraphEZIndexes.DefaultEdgeZIndex ? EGraphEZIndexes.DefaultEdgeLabelZIndex : EGraphEZIndexes.EdgeLabelFirstZIndex,
            pointerEvents: "all"
          }}
          className="nodrag nopan"
        >
          <EdgeTooltip data={data} />
        </div>
      </EdgeLabelRenderer>
    </>
  )
};
