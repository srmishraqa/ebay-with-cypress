import locSearchResult from '../locators/searchResultSelector'
import locHomePageSelector from '../locators/homePageSelector'

export default {
    changeSearchCategoryAndClickOnSearchAndValidateTheResult(searchKeyword) {
        locSearchResult.getLocatorForComputerTabletsNetworkingCategory().click()
        cy.wait(2500)
        locSearchResult.getLocatorForSearchResultHeaderBasedOnSearchKeyword(searchKeyword).should('be.visible')
    },

    validateTheFirstResultMatchesWithSearchString(searchString) {
        locSearchResult.getLocatorForTheFirstItemHeaderFromSearchResult().should('exist')
        locSearchResult
            .getLocatorForTheFirstItemHeaderFromSearchResult()
            .invoke('text')
            .then((text) => {
                expect(text.replace(/\u00a0/g, ' ').toLowerCase()).contain(searchString.toLowerCase())
            })
    },
}
