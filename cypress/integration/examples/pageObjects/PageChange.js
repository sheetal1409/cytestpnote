class PageChange {
    clickPreviousPage() {
        return cy.get('.App > :nth-child(5)')
    }
    clickNextPage() {
        return cy.get('.App > :nth-child(7)')

    }
}

export default PageChange