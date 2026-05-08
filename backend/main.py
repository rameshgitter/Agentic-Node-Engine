from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    data = json.loads(pipeline)
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Build adjacency list
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        # React Flow might allow edges to unknown nodes if node was deleted but edge remains,
        # but safely we check if source exists
        if source in adj:
            adj[source].append(target)
            
    visited = {}
    is_dag = True
    
    def dfs(node_id):
        nonlocal is_dag
        if not is_dag:
            return
            
        if visited.get(node_id) == 1:
            is_dag = False
            return
        if visited.get(node_id) == 2:
            return
            
        visited[node_id] = 1
        for neighbor in adj.get(node_id, []):
            dfs(neighbor)
        visited[node_id] = 2
        
    for node in nodes:
        if visited.get(node['id']) is None:
            dfs(node['id'])
            
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
