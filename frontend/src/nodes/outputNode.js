// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode 
      id={id} 
      title="Output" 
      leftHandles={[{ id: `${id}-value` }]} 
      className="node-output"
      style={{ border: '2px solid var(--accent-output)' }}
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
          value={outputType} 
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
