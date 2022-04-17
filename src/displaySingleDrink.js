import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) =>{
    hideLoading()
    const singleDrink = getElement('.single-drink');
    const drink = data.drinks[0];
    //name,description,ingredients,image
    const {strInstructions:description,strDrink:name,strDrinkThumb:image} = drink;
    document.title = `${name} Cocktail`
    
    // lista de ingredientes
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ]

    const img = getElement('.drink-img');
    const drinkName = getElement('.drink-name');
    const descriptionDrink = getElement('.drink-desc');
    img.src = image;
    drinkName.textContent = name;
    descriptionDrink.textContent = description

    const ingredients = getElement('.drink-ingredients');
    ingredients.innerHTML = list.map((item)=>{
        if(!item) return;
        return `<li><i class="fas fa-check" style="color:#49a6e9; font-size:14px " ></i> ${item}</li>`
    }).join('');




    
}

export default displayDrink