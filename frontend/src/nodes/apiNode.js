// apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="API Request"
      leftHandles={[{ id: `${id}-params` }]}
      rightHandles={[{ id: `${id}-response` }]}
      className="node-api"
      style={{ border: '2px solid var(--accent-api)' }}
    >
      <label className="vs-label">
        Endpoint URL:
        <input 
          className="vs-input"
          type="text" 
          value={endpoint} 
          onChange={(e) => setEndpoint(e.target.value)} 
        />
      </label>
      <label className="vs-label">
        Method:
        <select 
          className="vs-select"
          value={method} 
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
