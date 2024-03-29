// 해야할 일 Todo 클래스
class Todo {
constructor(context, isDone = false) {
this.context = context;
this.isDone = isDone;
}
// methods
// changeState - 상태를 변경
changeState() {
this.isDone = this.isDone === false ? true : false;
}
}

// TodoManager 클래스
class TodoManager {
constructor(todos = []) {
this.todos = todos;
}
// methods
// addItem - 할 일을 저장
addItem(todo) {
this.todos.push(todo);
}
// getItems - 할 일의 목록을 보여줌
get getItem() {
return this.todos;
}
// getLeftTodoCount - 할 일의 남은 갯수
get getLeftTodoCount() {
return this.todos.filter(todo => todo.isDone === false).length;
}
}

const todo_rutin = new TodoManager();

todo_rutin.addItem(new Todo("스킨로션 바르기"));