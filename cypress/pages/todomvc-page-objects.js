
const elements = {
    newTodo: () => cy.get('.new-todo'),
    clickCompleted : () => cy.get('.toggle'),
    clearCompleted : () => cy.get('.clear-completed'),
    todoLabel : () => cy.get('label'),
    todoList: () => cy.get('.todo-list')
}

const actions = {
    addTodo: (todoName) => elements.newTodo().type(`${todoName}`),
    markCompleted: () => {
        elements.clickCompleted().click();
        elements.todoLabel().should('have.css', 'text-decoration-line', 'line-through');
    },
    clearCompleted: () =>  {
        elements.clearCompleted().click();
        elements.todoList().should('not.have.descendants', 'li');
    },
}

const expects = {
    checkTodoExists: (todoName) => elements.todoLabel().should('have.text', `${todoName}`),
    checkUncompletedTodo: () => elements.clickCompleted().should('not.be.checked')

}

module.exports = {
actions,
elements,
expects
}