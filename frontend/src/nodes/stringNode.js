// stringNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const StringNode = ({ id, data }) => {
  const [str, setStr] = useState(data?.str || '');

  return (
    <BaseNode
      id={id}
      title="String Literal"
      rightHandles={[{ id: `${id}-output` }]}
      className="node-string"
      style={{ border: '2px solid var(--text-muted)' }}
    >
      <label className="vs-label">
        Value:
        <input 
          className="vs-input"
          type="text" 
          value={str} 
          onChange={(e) => setStr(e.target.value)} 
          placeholder="Enter text..."
        />
      </label>
    </BaseNode>
  );
};
