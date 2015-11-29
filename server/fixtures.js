if (Todos.find().count() === 0) {
    Todos.insert({"todo": "Погладить кота"});
    Todos.insert({"todo": "Помыть посуду"});
    Todos.insert({"todo": "This one already done", "done": true});
    Todos.insert({"todo": "Be awesome", "done": true});
    Todos.insert({"todo": "And one more", "done": true});
}