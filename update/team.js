listen("addPerson").subscribe(function(data){
  var group = data.group;
  var name = data.name;
  group.set("people",group.people.concat([name]));
})

listen("removePerson").subscribe(function(data){
  var group = data.group;
  var index = data.index;
  group.set("people",group.people.splice(index,1));
})
