describe('ebay UI Tests', () => {
    beforeEach(() => {
        // Code to run before each test case - before each it block
        cy.fixture('testData.json').then((testData) => {
            cy.visit(testData.url)
            cy.get('#gh-logo').should('be.visible')
        })
    })

    it('Access a Product via category after applying multiple filters', () => {
        cy.get('#gh-shop-a').click()
        cy.xpath("//a[text()='Cell phones & accessories']").click()
        cy.xpath("//span[text()='Cell Phones & Accessories']//parent::a").should('exist')
        cy.xpath("//span[text()='Cell Phones & Accessories']//parent::a").should('be.visible')
        cy.xpath("//a[text()='Cell Phones & Smartphones']").should('be.visible')
        cy.xpath("//a[text()='Cell Phones & Smartphones']").click()
        cy.xpath("//span[text()='Cell Phones & Smartphones']//parent::a").should('exist')
        cy.xpath("//span[text()='Cell Phones & Smartphones']//parent::a").should('be.visible')
        cy.xpath("(//span[text()='See All']//parent::button)[1]").click()

        //Apply screen size filter
        cy.xpath("//span[text()='Screen Size']//parent::div//span[text()='Screen Size']//parent::div").should('exist')
        cy.xpath("//span[text()='Screen Size']//parent::div//span[text()='Screen Size']//parent::div").click()
        cy.xpath("//span[text()='6 in or More']//parent::label//preceding-sibling::span").click()

        //Apply Price Range in USD
        cy.xpath("//div[@data-aspecttitle='price']").click()
        cy.xpath("//input[@aria-label='Minimum Value, US Dollar']").type(400)
        cy.xpath("//input[@aria-label='Maximum Value, US Dollar']").type(700)
        cy.wait(2000)
        cy.xpath("//div[@data-aspecttitle='price']").click()

        //Apply location Filter
        cy.xpath("//*[@id='c3-tray']//span[text()='$400 - $700']").should('be.visible')
        cy.xpath("//div[@data-aspecttitle='location']").click()
        cy.xpath("//*[text()='US Only']//parent::label//preceding-sibling::span").click()
        cy.xpath("//div[@data-aspecttitle='location']").click()

        //Validate all the filter details in modal
        cy.xpath("//*[@id='c3-tray']//span[text()='6 in or More']").should('be.visible')
        cy.xpath("//*[@id='c3-tray']//span[text()='US Only']").should('be.visible')
        cy.xpath("//*[@id='c3-tray']//span[text()='$400 - $700']").should('be.visible')
        cy.xpath("//button[@aria-label='Apply']").click()

        // Header Assertions
        cy.xpath('//h1//span')
            .invoke('text')
            .then((text) => {
                expect(text.replace(/\u00a0/g, ' ')).contain('6 Inch or More')
                expect(text.replace(/\u00a0/g, ' ')).contain('$400.00')
                expect(text.replace(/\u00a0/g, ' ')).contain('$700.00')
            })

        //Assert On filter applied
        cy.xpath("//span[contains(text(),'filters applied')]//parent::button").should('be.visible')
        cy.xpath("//span[contains(text(),'filters applied')]//parent::button").click()
        cy.xpath("//span[text()='Screen Size: 6 in or More']//parent::a").should('exist')
        cy.xpath("//span[text()='Price: $400.00 to $700.00']//parent::a").should('exist')
        cy.xpath("//span[text()='Item Location: US Only']//parent::a").should('exist')
    })
})
