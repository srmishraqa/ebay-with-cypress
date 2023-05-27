export default {
    getLocatorForCellPhoneAndSmartPhonePageHeader() {
        return cy.xpath("//span[text()='Cell Phones & Smartphones']//parent::a")
    },

    getLocatorForShopByBrandSeeAllLink() {
        return cy.xpath("(//span[text()='See All']//parent::button)[1]")
    },
}
