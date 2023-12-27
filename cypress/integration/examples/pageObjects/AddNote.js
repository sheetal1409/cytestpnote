class AddNote {
    getAddNoteTextBox() {
        return cy.get('.noteInput')
    }

    clickButton() {
        return cy.get('.noteAddButton')
    }
}

export default AddNote