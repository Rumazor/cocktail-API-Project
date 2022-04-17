import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({drinks})=>{
    const title = getElement('.title');
    const sectionDOM = getElement('.section-center');
    
    
    if(!drinks){
        //hide loading
        hideLoading();
        title.textContent = 'Sorry, no drinks match your Search';
        sectionDOM.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink)=>{
        const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink

        return `
        <a href="./drink.html">
        <article class="cocktail" data-id="${id}">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        </article>
    </a>`
    }).join('');
    //hide loading
    hideLoading()
    title.textContent = '';
    sectionDOM.innerHTML = newDrinks;
    return sectionDOM;
}


export default displayDrinks;