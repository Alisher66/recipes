
class RecipesCard {
    constructor(recipes) {
        this.recipes = recipes;
        this._addContainer();
    }
    _addContainer = function() {
        this.box = document.createElement("div");
        this.box.classList.add("box");
        document.body.insertAdjacentElement("afterbegin", this.box);
    }

    addHtml = async function () {
        let tempArr = await this.recipes;
        let arr = [];
        tempArr.forEach(el => {
            arr.push(this._cards({...el}))
        });
        this.box.innerHTML = arr.join("")
        this._removeCard();
    }

    _removeCard = function() {
        const btns = document.querySelectorAll(".remove")
        let i = 0;
        btns.forEach(btn =>{
            btn.addEventListener("click", e =>{
                const currentButton = e.currentTarget;
                currentButton.closest('.small').remove();
                i++;
                if(i == btns.length){
                    this.box.remove();
                }
            })
        })  
    }

    _cards = function({title, ingredients, photoUrl, tags}) {
        return `
            <div class="small">
                <article class="recipe">
                    ${this._showImage(photoUrl)}
                    <div class="recipe-content">
                        ${this._showTags(tags)}
    
                        <h1 class="recipe-title"><a href="#">${title}</a></h1>
    
                        <p class="recipe-desc">${ingredients.slice(0, 200)}...</p>
    
                        <button class="remove" type="button">
                            Remove
                        </button>
    
                    </div>
                </article>
            </div>
        `
    }
    
    _showImage(imgUrl) {
        if(!imgUrl) return "";

        return `
            <div class="pizza-box">
                <img src="${imgUrl}" width="1500" height="1368" alt="">
            </div>
        `; 
    }
    
    _showTags = function(tags) {
        if(!tags) return "";
        let tempTags = tags.split(",");
        let str = "";
        tempTags.forEach(tag=>{
            str += `<span class="recipe-tag">${tag}</span>\n`
        });

        return `
            <p class="recipe-tags">
                ${str}
            </p>
        `;
    }

}

export {RecipesCard}
