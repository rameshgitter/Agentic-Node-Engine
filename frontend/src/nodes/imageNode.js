// imageNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');

  return (
    <BaseNode
      id={id}
      title="Image Viewer"
      leftHandles={[{ id: `${id}-url` }]}
      className="node-image"
      style={{ border: '2px solid #2dd4bf' }}
    >
      <label className="vs-label">
        Image URL:
        <input 
          className="vs-input"
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="https://..."
        />
      </label>
      {url && (
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={url} 
            alt="Preview" 
            style={{ maxWidth: '100%', maxHeight: 80, borderRadius: 4, objectFit: 'contain' }}
            onError={(e) => e.target.style.display = 'none'}
            onLoad={(e) => e.target.style.display = 'block'}
          />
        </div>
      )}
    </BaseNode>
  );
};
