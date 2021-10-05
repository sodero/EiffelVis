var searchIndex = JSON.parse('{\
"eiffelvis":{"doc":"Combines all individual eiffelvis_* libraries into the …","t":[3,12,11,11,12,11,11,11,11,11,5,12,12,12,12,11,11,11],"n":["Cli","address","borrow","borrow_mut","chunk_size","clap","fmt","from","from_clap","into","main","max_chunks","port","rmq_uri","timeout","try_from","try_into","type_id"],"q":["eiffelvis","","","","","","","","","","","","","","","","",""],"d":["Command line options","HTTP host address","","","Maximum amount of events a single chunk will hold","","","","","","Starts all the services that make up EiffelVis.","Maximum amount of chunks stored in memory","HTTP host port","AMQP URI","AMQP reconnect timeout","","",""],"i":[0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],"f":[null,null,[[]],[[]],null,[[],["app",3]],[[["formatter",3]],["result",6]],[[]],[[["argmatches",3]]],[[]],[[]],null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"Cli"]]},\
"eiffelvis_core":{"doc":"The <em>core</em> logic library for eiffelvis.","t":[0,0,0,3,11,11,11,11,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12],"n":["app","graph_storage","types","EiffelVisApp","borrow","borrow_mut","dump_events","dump_lean_events","from","get_event","graph","into","new","push","try_from","try_into","type_id","ChunkedGraph","borrow","borrow_mut","fmt","from","get","index","into","is_empty","iter","len","new","push","try_from","try_into","type_id","BaseData","BaseEvent","BaseLink","BaseMeta","LeanEvent","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","data","default","default","default","default","deserialize","deserialize","deserialize","deserialize","deserialize","edges","eq","equivalent","event_type","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","id","id","into","into","into","into","into","link_type","links","meta","ne","partial_cmp","serialize","serialize","serialize","serialize","serialize","target","time","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","version"],"q":["eiffelvis_core","","","eiffelvis_core::app","","","","","","","","","","","","","","eiffelvis_core::graph_storage","","","","","","","","","","","","","","","","eiffelvis_core::types","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["eiffelvis core api","DAG storage implementations","eiffelvis shared types, e.g. events","Mainly a wrapper struct around backing event storage, …","","","Returns all stored sevents.","Returns all stored events in lean format, useful if only …","","Looks up the event of given id","Returns the underlying event store implementation","","","Inserts a new eiffel event into storage","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,5,6,3,4,5,6,3,4,5,6,7,7,5,5,4,3,4,5,6,7,3,4,5,6,7,7,4,7,3,4,5,6,7,5,6,6,5,5,3,4,5,6,7,5,4,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,4],"f":[null,null,null,null,[[]],[[]],[[],[["baseevent",3],["vec",3,["baseevent"]]]],[[],[["vec",3,["leanevent"]],["leanevent",3]]],[[]],[[["uuid",3]],[["option",4,["baseevent"]],["baseevent",3]]],[[],["chunkedgraph",3]],[[]],[[["usize",15]]],[[["baseevent",3]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,[[]],[[]],[[["formatter",3]],["result",6]],[[]],[[],[["node",3],["option",4,["node"]]]],[[["graphindex",3]],[["node",3],["option",4,["node"]]]],[[]],[[],["bool",15]],[[],["graphiterator",3]],[[],["usize",15]],[[["usize",15]]],[[["vec",3]],["option",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["basedata",3]],[[],["basemeta",3]],[[],["baselink",3]],[[],["baseevent",3]],[[],["leanevent",3]],[[]],[[]],[[]],[[]],[[]],[[["baselink",3]],["ordering",4]],null,[[],["basedata",3]],[[],["basemeta",3]],[[],["baselink",3]],[[],["baseevent",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,[[["baselink",3]],["bool",15]],[[],["bool",15]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[["baseevent",3]]],null,null,[[]],[[]],[[]],[[]],[[]],null,null,null,[[["baselink",3]],["bool",15]],[[["baselink",3]],[["option",4,["ordering"]],["ordering",4]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null],"p":[[3,"EiffelVisApp"],[3,"ChunkedGraph"],[3,"BaseData"],[3,"BaseMeta"],[3,"BaseLink"],[3,"BaseEvent"],[3,"LeanEvent"]]},\
"eiffelvis_gen":{"doc":"A library for generating mock eiffel events that actually …","t":[0,0,3,3,3,3,3,3,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["event_set","generator","Event","EventBorrow","EventSet","EventSetBuilder","Link","LinkBorrow","LinkTargets","add_event","add_event_set","add_link","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","build","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","default","default","default","default","events","fmt","fmt","fmt","from","from","from","from","from","from","from","get_event","get_link","into","into","into","into","into","into","link","link_count","links","multiple_allowed","name","name","new","new","new","targets","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","version","vzip","vzip","vzip","vzip","vzip","vzip","with_link","with_req_link","with_target","EventGenerator","Iter","borrow","borrow","borrow_mut","borrow_mut","default","from","from","into","into","into_iter","iter","new","next","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip"],"q":["eiffelvis_gen","","eiffelvis_gen::event_set","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","eiffelvis_gen::generator","","","","","","","","","","","","","","","","","","","","","",""],"d":["Types that are used to describe Events.","Generator that stamps out events.","Describes and Eiffel Event. Note: as of yet, the <code>data</code> …","Proxy type that represents a borrowed Event obtained from …","EventSet allows you to describe the types of eiffel …","Provides a way to construct the otherwise non …","Describes an Event link","Proxy type that represents a borrowed Link obtained from …","Represents the 2 states of what a Link can target, either …","Adds an Event to the event set. Note: Event names are …","Adds an existing event set, this is useful when want to …","Adds a Link to the event set. Note: Link names are …","","","","","","","","","","","","","Gives quick access to EventSetBuilder.","Consumes the builder and returns a EventSet. Fails if an …","","","","","","","","","","","","","Provides an iterator over the events present in this set.","","","","","","","","","","","Returns the Event that matches the given name.","Returns the Link that matches the given name.","","","","","","","","","Returns an iterator over the links of this event.","","","","Creates a new Link with given name. <code>allow_many</code> hints to …","Creates a new Event with given name and version, see …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Builder function that adds a non required link by name to …","Builder function that adds a <strong>required</strong> link by name to …","Builder function that adds a target to self.","Holds on to all the data needed to generate a infinite …","","","","","","","","","","","","Creates a new <strong>infinite</strong> event iterator. Every Iter made …","Constructs a new EventGenerator,","Yields a new event, fails if no events could be created …","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,1,1,1,2,3,4,1,5,6,2,3,4,1,5,6,2,1,3,4,5,6,3,4,5,6,2,3,4,1,2,2,3,4,2,3,3,4,1,5,6,2,2,2,3,4,1,5,6,5,5,5,6,5,6,3,4,1,6,3,4,5,6,2,3,4,1,5,6,2,3,4,1,5,6,2,3,4,1,5,6,5,2,3,4,1,5,6,4,4,3,0,0,7,8,7,8,7,7,8,7,8,8,7,7,8,7,8,7,8,7,8,7,8],"f":[null,null,null,null,null,null,null,null,null,[[["event",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["eventsetbuilder",3]],[[],[["option",4,["eventset"]],["eventset",3]]],[[],["link",3]],[[],["event",3]],[[],["eventborrow",3]],[[],["linkborrow",3]],[[]],[[]],[[]],[[]],[[],["eventset",3]],[[]],[[],["event",3]],[[],["eventsetbuilder",3]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],[["option",4,["eventborrow"]],["eventborrow",3]]],[[["str",15]],[["linkborrow",3],["option",4,["linkborrow"]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],[["linkborrow",3],["option",4,["linkborrow"]]]],[[],["usize",15]],[[]],[[],["bool",15]],[[],["str",15]],[[],["str",15]],[[["bool",15]]],[[]],[[]],[[],["option",4]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["str",15]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["iter",3]],[[["usize",15],["eventset",3]]],[[],["option",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]]],"p":[[3,"EventSetBuilder"],[3,"EventSet"],[3,"Link"],[3,"Event"],[3,"EventBorrow"],[3,"LinkBorrow"],[3,"EventGenerator"],[3,"Iter"]]},\
"eiffelvis_http":{"doc":"An HTTP frontend for eiffelvis_core","t":[5],"n":["app"],"q":["eiffelvis_http"],"d":["Takes an eiffelvis app and binds the http server on the …"],"i":[0],"f":[[[["rwlock",3,["eiffelvisapp"]],["string",3],["u16",15],["arc",3,["rwlock"]]]]],"p":[]},\
"eiffelvis_stream":{"doc":"A simple library that hides away all the details and …","t":[0,0,3,11,11,11,11,11,11,11,11,11,11],"n":["ampq","gen","AmpqStream","borrow","borrow_mut","from","into","new","next","try_from","try_into","type_id","vzip"],"q":["eiffelvis_stream","","eiffelvis_stream::ampq","","","","","","","","","",""],"d":["Provides an event stream from an ampq connection","Provides an event stream produced by eiffelvis_gen","","","","","","","Yields the next message. Returns None on failure, …","","","",""],"i":[0,0,0,1,1,1,1,1,1,1,1,1,1],"f":[null,null,null,[[]],[[]],[[]],[[]],[[["cow",4,["str"]],["str",15]]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]]],"p":[[3,"AmpqStream"]]},\
"event_sender":{"doc":"","t":[3,5,11,11,11,12,12,11,11,11,5,12,12,11,11,11,12,11],"n":["Cli","app","borrow","borrow_mut","clap","count","exchange","from","from_clap","into","main","routing_key","seed","try_from","try_into","type_id","url","vzip"],"q":["event_sender","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","",""],"i":[0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],"f":[null,[[]],[[]],[[]],[[],["app",3]],null,null,[[]],[[["argmatches",3]]],[[]],[[],["result",6]],null,null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,[[]]],"p":[[3,"Cli"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};