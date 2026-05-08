// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      rightHandles={[{ id: `${id}-value` }]}
      className="node-input"
      style={{ border: '2px solid var(--accent-input)' }}
    >
      <label className="vs-label">
        Name:
        <input 
          className="vs-input"
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
        />
      </label>
      <label className="vs-label">
        Type:
        <select 
          className="vs-select"
          value={inputType} 
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
