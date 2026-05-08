// mathNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  return (
    <BaseNode
      id={id}
      title="Math Operation"
      leftHandles={[{ id: `${id}-val1` }, { id: `${id}-val2` }]}
      rightHandles={[{ id: `${id}-result` }]}
      className="node-math"
      style={{ border: '2px solid var(--accent-math)' }}
    >
      <label className="vs-label">
        Operation:
        <select 
          className="vs-select"
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="Add">Add (+)</option>
          <option value="Subtract">Subtract (-)</option>
          <option value="Multiply">Multiply (*)</option>
          <option value="Divide">Divide (/)</option>
        </select>
      </label>
    </BaseNode>
  );
};
