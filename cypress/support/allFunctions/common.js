import locHomePageSelector from '../locators/homePageSelector'

export default {
    validateHomePageIsLoaded() {
        locHomePageSelector.getLocatorForHomePageLogo().should('be.visible')
    },
}
