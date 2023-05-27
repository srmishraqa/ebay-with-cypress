export default {
    getLocatorForScreenSizeLeftSideItem() {
        return cy.xpath("//span[text()='Screen Size']//parent::div//span[text()='Screen Size']//parent::div")
    },

    getLocatorForSixInchOrMoreRadio() {
        return cy.xpath("//span[text()='6 in or More']//parent::label//preceding-sibling::span")
    },

    getLocatorForPriceLeftSideItem() {
        return cy.xpath("//div[@data-aspecttitle='price']")
    },

    getLocatorForMinPriceInput() {
        return cy.xpath("//input[@aria-label='Minimum Value, US Dollar']")
    },

    getLocatorForMaxPriceInput() {
        return cy.xpath("//input[@aria-label='Maximum Value, US Dollar']")
    },

    getLocatorForLocationLeftSideItem() {
        return cy.xpath("//div[@data-aspecttitle='location']")
    },

    getLocatorForUSOnlyLocationRadio() {
        return cy.xpath("//*[text()='US Only']//parent::label//preceding-sibling::span")
    },

    getLocatorForAppliedFilterInTheModal(text) {
        return cy.xpath(`//*[@id='c3-tray']//span[text()='${text}']`)
    },

    getLocatorForApplyBtnInModal() {
        return cy.xpath("//button[@aria-label='Apply']")
    },

    getFilteredPageHeader() {
        return cy.xpath('//h1//span')
    },

    getLocatorForFiltersAppliedButton() {
        return cy.xpath("//span[contains(text(),'filters applied')]//parent::button")
    },

    getLocatorOfEachFilterCriteriaAfterClickingOnFiltersAppliedBtn(text) {
        return cy.xpath(`//span[text()='${text}']//parent::a`)
    },
}
