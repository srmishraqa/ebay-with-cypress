export default {
    getLocatorForCellPhonesAndAccessoriesPageHeader() {
        return cy.xpath("//span[text()='Cell Phones & Accessories']//parent::a")
    },

    getLocatorForCellPhoneAndSmartPhoneLeftSideMenuLink() {
        return cy.xpath("//a[text()='Cell Phones & Smartphones']")
    },
}
