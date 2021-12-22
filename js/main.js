import { Data } from "./data.js"
import { RecipesCard } from "./components.js"

const api = new Data();
const recipes = api.loadData();

const card1 = new RecipesCard(recipes);

card1.addHtml();









