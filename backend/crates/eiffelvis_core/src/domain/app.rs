use crate::query::GraphQuery;
use crate::{domain::types::BaseEvent, graph::*};

use uuid::Uuid;

pub trait EiffelGraph: Graph<Key = Uuid, Data = BaseEvent, EdgeData = String> {}
impl<T> EiffelGraph for T where T: Graph<Key = Uuid, Data = BaseEvent, EdgeData = String> {}

impl Key for Uuid {}

pub trait EiffelVisApp: EiffelGraph {
    fn push(&mut self, event: BaseEvent);
    fn graph(&self) -> &Self {
        self
    }
    fn get_event(&self, id: Uuid) -> Option<&BaseEvent>;
    fn dump<'a, T: From<&'a BaseEvent>>(&'a self) -> Vec<T>;
    fn get_subgraph_with_roots<'a, T: From<&'a BaseEvent>>(&'a self, roots: &[Uuid]) -> Vec<T>;
}

impl<G: EiffelGraph> EiffelVisApp for G {
    /// Inserts a new eiffel event into storage
    fn push(&mut self, event: BaseEvent) {
        let links = event.links.clone();
        self.add_node_with_edges(
            event.meta.id,
            event,
            links.into_iter().map(|link| (link.target, link.link_type)),
        );

        println!("Graph size: {}", self.node_count());
    }

    /// Looks up the event of given id
    fn get_event(&self, id: Uuid) -> Option<&BaseEvent> {
        Some(self.get(id)?.data())
    }

    /// Returns all current stored events
    fn dump<'a, T: From<&'a BaseEvent>>(&'a self) -> Vec<T> {
        self.items().map(|node| T::from(node.data())).collect()
    }

    fn get_subgraph_with_roots<'a, T: From<&'a BaseEvent>>(&'a self, roots: &[Uuid]) -> Vec<T> {
        roots
            .iter()
            .filter_map(|i| self.get(*i))
            .roots_for_graph(self)
            .map(|node| T::from(node.data()))
            .collect()
    }
}
