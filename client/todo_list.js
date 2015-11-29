
Meteor.subscribe('todos');

Template.todoList.helpers({
    'todos': function() {
        return Todos.find();
    }
});

Template.todoList.events({
    'keypress #todo-input': function(e, tmpl) {
        if (e.which === 13 && e.currentTarget.value !== '') {
            if (Meteor.userId() && Todos.insert({"todo": e.currentTarget.value, "userId": Meteor.userId()})) {
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
    }
});