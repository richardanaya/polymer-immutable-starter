//Setup nicer functions
var publish = pubsub.publish;
var listen = pubsub.subscribe;
var onEvent = Rx.Observable.fromEvent;

//Setup our views to pump through actions
var view = document.getElementById("view");
onEvent(document, 'action').subscribe(function(e){
  //send action to listeners of its name with data
  publish(e.detail.name,e.detail.data);
})

var model = Immutable({people:["Richard","Veronica","Ashton","Justin"]});
listen("updateModel").subscribe(function(m){
  model = m;
  view.model=model
})
view.model = model;
