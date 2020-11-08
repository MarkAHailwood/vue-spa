import Vue from 'vue'
import Category from '../../../src/theme/Category.vue'

describe('Category.vue', () => {
  it('should render the search result', () => {
    const CategoryConstructor = Vue.extend(Category)
    const comp = new CategoryConstructor({
      searchResultData: {
        searchResult: "no data available for that county"
      }
    }).$mount()
    console.log(comp)
  })
})
