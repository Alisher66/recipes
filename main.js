import {Data} from "./data.js"

const api = new Data();
const recipes = api.loadData()

recipes.then(console.log)




