/// <reference types="cypress" />
import TodoPageObjects from '../pages/todomvc-page-objects';

describe('Todo MVC tests', () => {
    beforeEach( () => cy.visit('http://todomvc-app-for-testing.surge.sh/') )
    it('should be able to addd a new todo to the list', () => {
       
        TodoPageObjects.actions.addTodo('cleanhouse{enter}');
        TodoPageObjects.expects.checkTodoExists('cleanhouse');
        TodoPageObjects.actions.markCompleted();

    })
})
