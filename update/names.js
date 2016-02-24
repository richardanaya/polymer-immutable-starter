listen("jumbleNames").subscribe(function(model){
  var m = model.merge({people:[Math.random(),Math.random(),Math.random()]})
  publish("updateModel",m);
})
