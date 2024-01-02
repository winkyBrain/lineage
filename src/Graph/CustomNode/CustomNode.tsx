import { Handle, NodeProps, Position } from 'reactflow';

export const CustomNode = ({ data }: NodeProps) => {
  console.log('node render');
  return (
    <div style={{
      border: '1px solid black',
      padding: '5px 10px',
    }}>
      <span>{data.label}</span>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  )
}