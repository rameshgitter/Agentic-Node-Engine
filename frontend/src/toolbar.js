// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-container">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='math' label='Math' />
            <DraggableNode type='string' label='String' />
            <DraggableNode type='api' label='API' />
            <DraggableNode type='condition' label='Condition' />
            <DraggableNode type='image' label='Image' />
        </div>
    );
};
