// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        const pipelineData = { nodes, edges };
        
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify(pipelineData));

            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Pipeline Analysis:\nNumber of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs Directed Acyclic Graph (DAG): ${data.is_dag}`);
            } else {
                alert("Error submitting pipeline: " + response.statusText);
            }
        } catch (error) {
            console.error(error);
            alert("Error connecting to backend");
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
