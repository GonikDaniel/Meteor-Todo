Template.todoElement.events({
    'click a': function(e, tmpl) {
        var done = true;
        if (tmpl.data.done) done = false;

        Todos.update({"_id": tmpl.data._id},{$set: {"done": done}});
    },
    'click .delete': function(e, tmpl) {
        if (!Meteor.userId()) {
            var error = document.querySelector('.bg-danger');
            error.innerHTML = "You can't remove it. Login first!";
            error.style.display = 'block';
            setTimeout(function(){
                error.style.display = 'none';
            }, 2000);
        } else {
            Todos.remove(this._id);
        }
    }
});

Template.todoElement.helpers({
    'class': function() {
        if (this.done) {
            return "checked";
        }
    }
});