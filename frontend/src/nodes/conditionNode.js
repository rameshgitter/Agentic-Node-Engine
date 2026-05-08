// conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || '==');

  return (
    <BaseNode
      id={id}
      title="Condition"
      leftHandles={[{ id: `${id}-left` }, { id: `${id}-right` }]}
      rightHandles={[{ id: `${id}-true`, topPercent: 33 }, { id: `${id}-false`, topPercent: 66 }]}
      className="node-condition"
      style={{ border: '2px solid #fbbf24' }}
    >
      <label className="vs-label">
        Operator:
        <select 
          className="vs-select"
          value={operator} 
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="==">Equals (==)</option>
          <option value="!=">Not Equals (!=)</option>
          <option value=">">Greater Than (&gt;)</option>
          <option value="<">Less Than (&lt;)</option>
        </select>
      </label>
    </BaseNode>
  );
};
