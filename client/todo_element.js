Template.todoElement.events({
    'click a': function(e, tmpl) {
        var done = true;
        if (tmpl.data.done) done = false;

        Todos.update({"_id": tmpl.data._id},{$set: {"done": done}});
    }
});

Template.todoElement.helpers({
    'class': function() {
        if (this.done) {
            return "checked";
        }
    }
});