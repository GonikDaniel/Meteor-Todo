function errorShow(msg) {
    var error = document.querySelector('.bg-danger');
    error.innerHTML = msg;
    error.style.display = 'block';
    setTimeout(function(){
        error.style.display = 'none';
    }, 2000);
}

Template.todoElement.events({
    'click a': function(e, tmpl) {
        e.preventDefault();
        if (Meteor.userId()) {
            var done = true;
            if (tmpl.data.done) done = false;

            Todos.update({"_id": tmpl.data._id},{$set: {"done": done}});
        } else {
            errorShow("You can't check it. Login first!");
        }
    },
    'click .delete': function(e, tmpl) {
        if (!Meteor.userId()) {
            errorShow("You can't remove it. Login first!");
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