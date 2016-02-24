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

var model = new Freezer({people:["Richard","Veronica","Ashton","Justin"]});
//When any change occurs in immutable data structure
model.on("update",function(m){
  model = m;
  view.model=model
})
//set model to js friendly version
model = model.get()
//set view's model
view.model = model;
