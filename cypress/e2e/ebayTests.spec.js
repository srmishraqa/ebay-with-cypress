import common from '../support/allFunctions/common'
import home from '../support/allFunctions/home'
import filterModal from '../support/allFunctions/filterModal'
import search from '../support/allFunctions/search'
import testData from '../support/testData/testData'

describe('ebay UI Tests', () => {
    beforeEach(() => {
        // Code to run before each test case - before each it block
        cy.fixture('settings.json').then((set) => {
            cy.visit(set.url)
            common.validateHomePageIsLoaded()
        })
    })

    it('Scenario - 1 , Access a Product via category after applying multiple filters', () => {
        //Navigate to Search by category > Electronics > Cell Phones & accessories
        home.navigateToCellPhoneAndAccessoriesPageAndValidatePageLoad()

        //After the page loads, click Cell Phones & Smartphones in the left hand side navigation section
        home.navigateToCellPhonesAndSmartPhonesPageAndValidatePageLoad()

        //Now, click – See All (appears under “Shop by brand” or “Shop by Network”)
        filterModal.navigateToFilterModalByClickingOnShopByBrandSeeAll()

        //Apply screen size filter
        filterModal.applyFilterOnScreenSize()

        //Apply Price Range in USD
        filterModal.applyFilterOnPrice(testData.priceFilterRange.minValueInUsd, testData.priceFilterRange.maxValueInUsd)

        //Apply location Filter
        filterModal.applyFilterOnLocation()

        //Validate all the filter details are displayed in modal itself in the bottom section and then click on apply button in the modal
        filterModal.validateAppliedFilterInTheModal(testData.appliedFilterArrayInTheModal)
        filterModal.applyFilter()

        // Assertions for Heading which appears applying all the filter criteria
        filterModal.validateFilteredPageHeaderPostApplyingFilterInTheModal(testData.filterHeaderArray)

        //Assert On filters applied button
        filterModal.validateFilterCriteriaPresentUnderFiltersAppliedBtn(testData.filtersAppliedArray)
    })

    it('Scenario - 2 , Access a Product via Search', () => {
        //Type any search string in the search bar. For example: MacBook.
        home.searchByKeyWordAndValidate(testData.searchKey)

        //Change the Search category. For example: Computers/Tablets & Networking and click Search.
        //Verify that the page loads completely.
        search.changeSearchCategoryAndClickOnSearchAndValidateTheResult(testData.searchKey)

        //Verify that the first result name matches with the search string.
        search.validateTheFirstResultMatchesWithSearchString(testData.searchKey)
    })
})
