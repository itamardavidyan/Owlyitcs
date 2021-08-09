describe('My First Test', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')
    })

    it('Case 1', () => {
        cy.get('textarea').type('a b c d e')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 5)
    })

    it('Case 2', () => {
        cy.get('textarea').type('     ')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 0)
    })

    it('Case 3', () => {
        cy.get('textarea').type('a a a a a')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 1)
    })

    it('Case 4', () => {
        cy.get('textarea').type('a b b b a')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 2)
    })

    it('Case 5', () => {
        cy.get('textarea').type('Yaron Owlyitcs Owlyitcs Owlyitcs Elior Elior Elior')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 3)
        cy.get('#result').find('li:nth-child(1)').contains('Owlyitcs')
        cy.get('#result').find('li:nth-child(2)').contains('Elior')
        cy.get('#result').find('li:nth-child(3)').contains('Yaron')
    })

    it('Case 6', () => {
        cy.get('textarea').type(`
           Yaron    Owlyitcs
               Owlyitcs   Owlyitcs
               
               Elior Elior
                Elior   
                `)
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 3)
        cy.get('#result').find('li:nth-child(1)').contains('Owlyitcs')
        cy.get('#result').find('li:nth-child(2)').contains('Elior')
        cy.get('#result').find('li:nth-child(3)').contains('Yaron')
    })

    it('Case 7', () => {
        cy.get('textarea').type('aa bb bb cc cc cc dd dd dd dd ee ee ee ee ee')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 5)
        cy.get('#result').find('li:nth-child(1)').contains('ee')
        cy.get('#result').find('li:nth-child(2)').contains('dd')
        cy.get('#result').find('li:nth-child(3)').contains('cc')
        cy.get('#result').find('li:nth-child(4)').contains('bb')
        cy.get('#result').find('li:nth-child(5)').contains('aa')
    })


    it('Case 8', () => {
        cy.get('textarea').type('ff aa aa bb bb bb cc cc cc cc dd dd dd dd dd ee ee ee ee ee ee')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 5)
        cy.get('#result').find('li:nth-child(1)').contains('ee')
        cy.get('#result').find('li:nth-child(2)').contains('dd')
        cy.get('#result').find('li:nth-child(3)').contains('cc')
        cy.get('#result').find('li:nth-child(4)').contains('bb')
        cy.get('#result').find('li:nth-child(5)').contains('aa')
    })

    it('Case 9', () => {
        cy.get('textarea').type('nnn nnn \t \t \t  \\n \\n \n \\n \\n nnn nnn \t \t \t nnn')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 2)
        cy.get('#result').find('li:nth-child(1)').contains('nnn')
        cy.get('#result').find('li:nth-child(2)').contains('\\n')
    })

    it('Case 10', () => {
        cy.get('textarea').type('abcdef abcde abcd abc ab c ab abc abcd abcde abcdef')
        cy.get('#submitForm').click()

        cy.get('#result').find('li').should('have.length', 5)
    })
})