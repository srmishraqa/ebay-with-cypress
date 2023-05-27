export default {
    getLocatorForHomePageLogo() {
        return cy.get('#gh-logo')
    },

    getLocatorForShopByCategoryOnHome() {
        return cy.get('#gh-shop-a')
    },

    getLocatorForCellPhoneAndAccessorySubMenuItem() {
        return cy.xpath("//a[text()='Cell phones & accessories']")
    },

    getLocatorForSearchInputBox() {
        return cy.get('#gh-ac')
    },

    getLocatorForSearchBtn() {
        return cy.get('#gh-btn')
    },
}
