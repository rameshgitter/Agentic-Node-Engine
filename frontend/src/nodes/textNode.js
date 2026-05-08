// textNode.js

import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState(['input']);
  const textareaRef = useRef(null);

  // Parse variables from text enclosed in {{variable}}
  useEffect(() => {
    // Regex matches {{variable}} but we only want the variable part
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    let matches;
    const foundVars = new Set();
    
    while ((matches = regex.exec(currText)) !== null) {
      if (matches[1]) {
        foundVars.add(matches[1]);
      }
    }
    
    const varArray = Array.from(foundVars);
    setVariables(varArray);
  }, [currText]);

  // Handle auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset to auto to calculate new height
      textareaRef.current.style.height = Math.max(40, textareaRef.current.scrollHeight) + 'px';
      
      // Update the node's explicit size if it grows significantly?
      // React Flow usually handles node dimensions implicitly if we let the DOM expand,
      // but modifying width dynamically could be done by also checking content length.
      // We'll let text wrap or set a CSS width that can grow.
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const leftHandles = variables.map((v, i) => ({
    id: `${id}-var-${v}`,
    topPercent: variables.length === 1 ? 50 : 20 + (60 / (variables.length - 1)) * i
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      leftHandles={leftHandles}
      rightHandles={[{ id: `${id}-output` }]}
      className="node-text"
      style={{ border: '2px solid var(--accent-text)', width: Math.max(200, currText.length * 5) }} // Width scales mildly with text
    >
      <label className="vs-label" style={{ width: '100%', height: '100%' }}>
        Text:
        <textarea
          ref={textareaRef}
          className="vs-input"
          value={currText}
          onChange={handleTextChange}
          style={{ 
            resize: 'none', 
            overflow: 'hidden', 
            width: '100%',
            minHeight: '40px',
            fontFamily: 'inherit'
          }}
        />
      </label>
    </BaseNode>
  );
};
