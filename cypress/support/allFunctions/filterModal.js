import locCellPhonesAndSmartPhonesSelector from '../locators/cellPhoneAndSmartPhoneSelector'
import locFilterModalSelector from '../locators/filterModalSelector'

export default {
    navigateToFilterModalByClickingOnShopByBrandSeeAll() {
        locCellPhonesAndSmartPhonesSelector.getLocatorForShopByBrandSeeAllLink().should('exist')
        locCellPhonesAndSmartPhonesSelector.getLocatorForShopByBrandSeeAllLink().click()
    },

    applyFilterOnScreenSize() {
        locFilterModalSelector.getLocatorForScreenSizeLeftSideItem().should('exist')
        locFilterModalSelector.getLocatorForScreenSizeLeftSideItem().click()
        locFilterModalSelector.getLocatorForSixInchOrMoreRadio().click()
    },

    applyFilterOnPrice(minValueInUSD, maxValueInUSD) {
        locFilterModalSelector.getLocatorForPriceLeftSideItem().should('exist')
        locFilterModalSelector.getLocatorForPriceLeftSideItem().click()
        locFilterModalSelector.getLocatorForMinPriceInput().type(minValueInUSD)
        locFilterModalSelector.getLocatorForMaxPriceInput().type(maxValueInUSD)
        cy.wait(2000)
        locFilterModalSelector.getLocatorForPriceLeftSideItem().click()
    },

    applyFilterOnLocation() {
        locFilterModalSelector.getLocatorForLocationLeftSideItem().click()
        locFilterModalSelector.getLocatorForUSOnlyLocationRadio().click()
        locFilterModalSelector.getLocatorForLocationLeftSideItem().click()
    },

    applyFilter() {
        locFilterModalSelector.getLocatorForApplyBtnInModal().should('exist')
        locFilterModalSelector.getLocatorForApplyBtnInModal().click()
    },

    validateAppliedFilterInTheModal(inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            locFilterModalSelector.getLocatorForAppliedFilterInTheModal(inputArray[i]).should('exist')
            locFilterModalSelector.getLocatorForAppliedFilterInTheModal(inputArray[i]).should('be.visible')
        }
    },

    validateFilteredPageHeaderPostApplyingFilterInTheModal(inputArray) {
        locFilterModalSelector
            .getFilteredPageHeader()
            .invoke('text')
            .then((text) => {
                for (let i = 0; i < inputArray.length; i++) {
                    expect(text.replace(/\u00a0/g, ' ')).contain(inputArray[i])
                }
            })
    },

    validateFilterCriteriaPresentUnderFiltersAppliedBtn(inputArray) {
        locFilterModalSelector.getLocatorForFiltersAppliedButton().should('be.visible')
        locFilterModalSelector.getLocatorForFiltersAppliedButton().click()
        for (let i = 0; i < inputArray.length; i++) {
            locFilterModalSelector
                .getLocatorOfEachFilterCriteriaAfterClickingOnFiltersAppliedBtn(inputArray[i])
                .should('exist')
        }
    },
}
