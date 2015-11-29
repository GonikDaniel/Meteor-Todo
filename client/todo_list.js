Meteor.subscribe('todos');

Template.todoList.helpers({
    'todos': function () {
        if (Session.get("hideCompleted")) {
            // If hide completed is checked, filter tasks
            return Todos.find({done: {$ne: true}}, {sort: {createdAt: -1}});
        } else {
            // Otherwise, return all of the tasks
            return Todos.find();
        }
    },
    hideCompleted: function () {
        return Session.get("hideCompleted");
    },
    incompleteCount: function () {
        return Todos.find({done: {$ne: true}}).count();
    }
});

Template.todoList.events({
    'keypress #todo-input': function(e, tmpl) {
        if (e.which === 13 && e.currentTarget.value !== '') {
            if (Meteor.userId() && Todos.insert({"todo": e.currentTarget.value, "userId": Meteor.userId(), createdAt: new Date()})) {
                e.currentTarget.value = '';
            } else {
                e.currentTarget.value = '';
                var error = document.querySelector('.bg-danger');
                error.innerHTML = "You can't add tasks right here. Login first!";
                error.style.display = 'block';
                setTimeout(function(){
                    error.style.display = 'none';
                }, 2000);
            }
        }
    },
    "change .hide-completed input": function (event) {
        Session.set("hideCompleted", event.target.checked);
    }
});