listen("jumbleNames").subscribe(function(model){
  var m = model.set("people",[Math.random(),Math.random(),Math.random()]);
})
