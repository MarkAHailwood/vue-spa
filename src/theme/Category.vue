<template>
  <div>
    <h5>Enter your county below to search for flood data:</h5>
    <div class="field">
      <div class="control">
        <input class="input is-info"  type="text" v-model="county" placeholder="eg.: Surrey">
      </div>
    </div>
    <div>
      <button v-on:click="loadPosts(county)" class="button is-info">Check flooding in my area</button>
    </div>
    <h3>Search Result:</h3>
      <div>
        {{ searchResultMessage }}
        {{ searchResultData }}
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
      searchResultMessage: "",
      searchResultData: ""
    };
  },
  methods: {
    loadPosts(county) {
      appService.getPosts(county).then((data) => {
        this.searchResultMessage =
          data.items.length == 0
            ? "no data available for that county"
            : "Message: " + data.items[0].message
        this.searchResultData =
          data.items.length == 0
            ? "no Status Reason available for that county"
            : "Status Reason: " + (data.items[0].statusReason == undefined ? "no status reason available." : data.items[0].statusReason)
        this.saveSearch(this.searchResultMessage)
      })
    },
    saveSearch(searchData){
      appService.logData(searchData) // route to services file, executes a console.log. I intended saving as a csv, then reading and updating in native javascript, however I have run out of time.
    }
  },
};
</script>
