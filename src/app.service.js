import axios from 'axios'

axios.defaults.baseURL = 'https://environment.data.gov.uk/'

const appService = {
  getPosts (county) {
    return new Promise((resolve) => {
      axios.get(`/flood-monitoring/id/floods?county=${county}`).then(response => {
        resolve(response.data)
      })
    })
  },
  logData (data) {
    console.log(data) // eventually ran short of time to log data - intention was to write it as a JSON or CSV file and update upon every search
    // let dataToSave = JSON.stringify(data)
    // fs.writeFileSync("data.json", dataToSave)
  }
}

export default appService
