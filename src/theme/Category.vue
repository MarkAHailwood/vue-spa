<template>
  <div>
    <h5>Enter your county below to search for flood data:</h5>
    <div class="field">
      <div class="control">
        <input class="input is-info"  type="text" v-model="county" placeholder="Enter County Here">
      </div>
    </div>
    <div>
      <button v-on:click="loadPosts(county)" class="button is-info">Check flooding in my area</button>
    </div>
    <h3>Search Result:</h3>
      <div>
        {{ searchResult }}
      </div>
    </div>
</template>
<script>
import appService from "../app.service.js";
import fs from "../app.service.js";

export default {
  data() {
    return {
      county: "",
      searchResult: ""
    };
  },
  methods: {
    loadPosts(county) {
      appService.getPosts(county).then((data) => {
        this.showVal = data.meta.licence
        this.searchResult =
          data.items.length == 0
            ? "no data available for that county"
            : data.items[0].message
        this.saveSearch(this.searchResult)
      })
    },
    saveSearch(searchData){
      appService.logData(searchData)
    }
  },
};
</script>
