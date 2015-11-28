Meteor.publish('todos', function() {
    return Todos.find({"userId": this.userId});
});