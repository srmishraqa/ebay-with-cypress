import locHomePageSelector from '../locators/homePageSelector'
import locPhoneAndAccessoriesSelector from '../locators/cellPhoneAndAccessoriesSelector'
import locCellPhonesAndSmartPhonesSelector from '../locators/cellPhoneAndSmartPhoneSelector'
import locSearchResult from '../locators/searchResultSelector'

export default {
    navigateToCellPhoneAndAccessoriesPageAndValidatePageLoad() {
        locHomePageSelector.getLocatorForShopByCategoryOnHome().click()
        locHomePageSelector.getLocatorForCellPhoneAndAccessorySubMenuItem().click()
        locPhoneAndAccessoriesSelector.getLocatorForCellPhonesAndAccessoriesPageHeader().should('exist')
        locPhoneAndAccessoriesSelector.getLocatorForCellPhonesAndAccessoriesPageHeader().should('be.visible')
    },

    navigateToCellPhonesAndSmartPhonesPageAndValidatePageLoad() {
        locPhoneAndAccessoriesSelector.getLocatorForCellPhoneAndSmartPhoneLeftSideMenuLink().should('be.visible')
        locPhoneAndAccessoriesSelector.getLocatorForCellPhoneAndSmartPhoneLeftSideMenuLink().click()
        locCellPhonesAndSmartPhonesSelector.getLocatorForCellPhoneAndSmartPhonePageHeader().should('exist')
        locCellPhonesAndSmartPhonesSelector.getLocatorForCellPhoneAndSmartPhonePageHeader().should('be.visible')
    },

    searchByKeyWordAndValidate(searchKeyword) {
        locHomePageSelector.getLocatorForSearchInputBox().type(searchKeyword)
        cy.wait(2500)
        locHomePageSelector.getLocatorForSearchBtn().click()
        cy.wait(2500)
        locSearchResult.getLocatorForSearchResultHeaderBasedOnSearchKeyword(searchKeyword).should('be.visible')
    },
}
