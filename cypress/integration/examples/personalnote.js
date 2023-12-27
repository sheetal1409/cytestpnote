
import AddNote from "./pageObjects/Addnote"
import PageChange from "./pageObjects/PageChange"
describe("Suite to test personal note", function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })


    })
    it("Access personal note page", function () {
        // cy.visit("https://master--jade-bubblegum-7b3c8f.netlify.app/")
        cy.visit(Cypress.env('url'))
        const addnewNote = new AddNote()
        const page = new PageChange()
        let pageNum
        addnewNote.getAddNoteTextBox().type(this.data.newNote)
        addnewNote.clickButton()
        page.clickNextPage().click()
        cy.PageNum().should('contain', 2)

        // Click checkdone on an item sent by user 
        cy.CheckDone(this.data.ItemtoDone)

        cy.RemoveItem(this.data.ItemtoDelete)
    })



})