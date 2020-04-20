/// <reference types="cypress" />
import TodoPageObjects from '../pages/todomvc-page-objects';

describe('Todo MVC tests', () => {
    
    beforeEach( () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        TodoPageObjects.actions.addTodo('cleanhouse{enter}');
    })
    it('should be able to add a new todo to the list', () => {
       
        TodoPageObjects.expects.checkTodoExists('cleanhouse');
        TodoPageObjects.expects.checkUncompletedTodo();
        TodoPageObjects.actions.markCompleted();
    });

    it('should mark a todo as completed', () => {
        TodoPageObjects.expects.checkUncompletedTodo();
        TodoPageObjects.actions.markCompleted();
    });

    it('should clear completed Todos', () => {
        TodoPageObjects.actions.markCompleted();
        TodoPageObjects.actions.clearCompleted();
    })

})
