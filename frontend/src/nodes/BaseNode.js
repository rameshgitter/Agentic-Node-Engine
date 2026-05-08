import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  leftHandles = [],
  rightHandles = [],
  children,
  style = {},
  className = '',
}) => {
  return (
    <div className={`vs-node ${className}`} style={style}>
      {leftHandles.map((h, i) => (
        <Handle
          key={`left-${i}-${h.id || h}`}
          type="target"
          position={Position.Left}
          id={h.id || `${id}-left-${i}`}
          style={{ top: `${h.topPercent ?? (leftHandles.length === 1 ? 50 : 20 + (60 / (leftHandles.length - 1)) * i)}%` }}
        />
      ))}

      <div className="vs-node-header">
        <span>{title}</span>
      </div>

      <div className="vs-node-body">
        {children}
      </div>

      {rightHandles.map((h, i) => (
        <Handle
          key={`right-${i}-${h.id || h}`}
          type="source"
          position={Position.Right}
          id={h.id || `${id}-right-${i}`}
          style={{ top: `${h.topPercent ?? (rightHandles.length === 1 ? 50 : 20 + (60 / (rightHandles.length - 1)) * i)}%` }}
        />
      ))}
    </div>
  );
};
