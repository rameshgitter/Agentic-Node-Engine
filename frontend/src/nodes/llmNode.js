// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      leftHandles={[{ id: `${id}-system`, topPercent: 33 }, { id: `${id}-prompt`, topPercent: 66 }]}
      rightHandles={[{ id: `${id}-response` }]}
      className="node-llm"
      style={{ border: '2px solid var(--accent-llm)' }}
    >
      <div>
        <span>This is a Large Language Model node.</span><br />
        <span>It takes a prompt and optional system instructions.</span>
      </div>
    </BaseNode>
  );
};
