//Setup nicer functions
var eventbus = pubsub.create();
var publish = eventbus.publish;
var listen = eventbus;
var onEvent = Rx.Observable.fromEvent;

//Setup our views to pump through actions
var view = document.getElementById("view");
onEvent(document, 'action').subscribe(function(e){
  //send actions that bubble up through elements
  //to listeners of its name with data
  publish(e.detail.name,e.detail.data);
})

//Freeze that data
var model = new Freezer({people:["Richard","Veronica","Ashton","Justin"]});
//When any change occurs in immutable data structure, update root view's model
model.on("update",function(m){
  view.model=model.get()
})
//Set root view's model
view.model = model.get();

//Get router page-switcher and set selected route id based on #! style url
var router = document.getElementById("router");
page('/about', function(){
  router.selected = "about";
})
page('*', function(){
  router.selected = "default";
})
page({hashbang: true})
