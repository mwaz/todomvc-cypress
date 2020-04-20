const elements = {
    newTodo: () => cy.get('.new-todo'),
    clickCompleted : () => cy.get('.toggle'),
    clearCompleted : () => cy.get('.clear-completed'),
    todoLabel : () => cy.get('label'),
}

const actions = {
    addTodo: (todoName) => elements.newTodo().type(`${todoName}`),
    markCompleted: () => elements.clickCompleted().click(),
    clearCompleted: () => elements.clearCompleted().click(),
}

const expects = {
    checkTodoExists: (todoName) => elements.todoLabel().should('have.text', `${todoName}`)

}

module.exports = {
actions,
elements,
expects
}