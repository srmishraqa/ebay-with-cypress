export default {
    getLocatorForSearchResultHeaderBasedOnSearchKeyword(text) {
        return cy.xpath(`//span[@class='BOLD' and text()='${text}']`)
    },

    getLocatorForComputerTabletsNetworkingCategory() {
        return cy.xpath("//span[text()='Computers/Tablets & Networking']//parent::a")
    },

    getLocatorForTheFirstItemHeaderFromSearchResult() {
        return cy.xpath("(//li[starts-with(@id,'item')]//div[contains(@class,'item__title')]/span)[1]")
    },
}
