import heapq
from typing import List, Tuple, Dict, Optional, Callable, TypeVar, Set

# Definimos un tipo genérico para los nodos (puede ser tupla, string, objeto, etc.)
T = TypeVar('T')

class PriorityQueue:
    """Una cola de prioridad simple usando heapq."""
    def __init__(self):
        self.elements: List[Tuple[float, T]] = []
    
    def empty(self) -> bool:
        return not self.elements
    
    def put(self, item: T, priority: float):
        heapq.heappush(self.elements, (priority, item))
    
    def get(self) -> T:
        return heapq.heappop(self.elements)[1]

def reconstruct_path(came_from: Dict[T, Optional[T]], start: T, goal: T) -> List[T]:
    """Reconstruye el camino desde el objetivo hasta el inicio usando el diccionario de procedencia."""
    current: T = goal
    path: List[T] = []
    
    # Si el objetivo no fue alcanzado (no está en el mapa), retornamos lista vacía
    if goal not in came_from:
        return []
        
    while current != start:
        path.append(current)
        current = came_from[current] # type: ignore
    path.append(start)
    path.reverse()
    return path

def a_star_search(
    start: T,
    goal: T,
    neighbors_fn: Callable[[T], List[T]],
    cost_fn: Callable[[T, T], float],
    heuristic_fn: Callable[[T, T], float]
) -> Tuple[List[T], Dict[T, float]]:
    """
    Implementación del algoritmo A* (A-Star).
    
    Args:
        start: Nodo inicial.
        goal: Nodo objetivo.
        neighbors_fn: Función que dado un nodo, devuelve una lista de sus vecinos.
        cost_fn: Función que devuelve el costo de moverse de un nodo a su vecino (g_score).
        heuristic_fn: Función que estima el costo desde un nodo hasta el objetivo (h_score).
        
    Returns:
        Una tupla (camino, costos_acumulados).
    """
    frontier = PriorityQueue()
    frontier.put(start, 0)
    
    came_from: Dict[T, Optional[T]] = {}
    cost_so_far: Dict[T, float] = {}
    
    came_from[start] = None
    cost_so_far[start] = 0
    
    while not frontier.empty():
        current: T = frontier.get()
        
        if current == goal:
            break
        
        for next_node in neighbors_fn(current):
            new_cost = cost_so_far[current] + cost_fn(current, next_node)
            
            if next_node not in cost_so_far or new_cost < cost_so_far[next_node]:
                cost_so_far[next_node] = new_cost
                priority = new_cost + heuristic_fn(next_node, goal)
                frontier.put(next_node, priority)
                came_from[next_node] = current
    
    path = reconstruct_path(came_from, start, goal)
    return path, cost_so_far

