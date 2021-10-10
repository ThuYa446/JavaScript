const mealEl = document.getElementById("meals");
const favMeals = document.getElementById("fav-meals");
const searchText = document.getElementById("searchText");
const searchBtn = document.getElementById("search");
const popupinfo = document.getElementById("popup-menu");
const closeBtn = document.getElementById("close-popup");
const mealinfoEl =  document.getElementById("meal-info");

getRandomMeal();
fetchFavMeal();

async function getRandomMeal(){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal,true);
}

async function getMealById(id){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    const respData = await resp.json();
    const mealData = respData.meals[0];
    return mealData;
}

async function getMealBySearch(term){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+term);
    const respData = await resp.json();
    const mealData = respData.meals;
    return mealData;
}

function addMeal(randomMeal,random=false){
    const mealdiv = document.createElement("div")
    mealdiv.classList.add("meal");
    mealdiv.innerHTML = `
    <div class="meal-header">
        ${random? `
            <span class="random">Random Recipe</span>
        `:''}
        <img src="${randomMeal.strMealThumb}" alt="${randomMeal.strMeal}"/>
    </div>
    <div class="meal-body">
        <h4> ${randomMeal.strMeal}</h4>
        <button class="fav-btn">
            <i class="fas fa-heart"></i>
        </button>
    </div>`;

    const meal = mealdiv.querySelector(".meal-body .fav-btn");
    meal.addEventListener("click",()=>{
        if(meal.classList.contains("active")){
            removeMealFromLS(randomMeal.idMeal);
            meal.classList.remove("active")
        }else{
            addMealToLS(randomMeal.idMeal);
            meal.classList.add("active");
        }
      // meal.classList.toggle("active");

      fetchFavMeal();
    })

    mealdiv.addEventListener("click",(event) =>{
        
        if(!event.target.classList.contains("fas")){
            showMealInfo(randomMeal);
        }
    })

    mealEl.appendChild(mealdiv);
}

function addMealToLS(mealId){
   const mealIds = getMealFromLS();
   localStorage.setItem("mealIds",JSON.stringify([...mealIds,mealId]))
}

function getMealFromLS(){
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
    return mealIds===null? []: mealIds;
}

function removeMealFromLS(mealId){
   const mealIds = getMealFromLS();
   localStorage.setItem("mealIds",JSON.stringify(mealIds.filter((id) => 
       id !== mealId )));
}

async function fetchFavMeal(){
    favMeals.innerHTML = '';
    const mealIds = getMealFromLS();
    for(let i=0;i<mealIds.length;i++){
        const mealData = await getMealById(mealIds[i]);
        if(i>5){
            favMeals.style.height = "380px";
        }
        addMealToFav(mealData);
    }
}

function addMealToFav(mealData){
    const mealEl = document.createElement("li")
    mealEl.innerHTML = `
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-times"></i></button>
    `;
    const clear = mealEl.querySelector(".clear");
    clear.addEventListener('click',() => {
        removeMealFromLS(mealData.idMeal);
        fetchFavMeal();
    });
    mealEl.addEventListener("click", (event) =>{
        if(!event.target.classList.contains("fas")){
            showMealInfo(mealData);
        }
    })
    favMeals.appendChild(mealEl);
}

searchBtn.addEventListener("click",async () =>{
    mealEl.innerHTML = "";
    const term = searchText.value;
    const meals = await getMealBySearch(term);
    if(meals){
        meals.forEach((meal) =>{
            addMeal(meal,true);
        })
    }
})

searchText.addEventListener("keyup",async (event) =>{
    console.log(event)
    if(event.keyCode === 13){
        
        mealEl.innerHTML = "";
        const term = searchText.value;
        const meals = await getMealBySearch(term);
        if(meals){
            meals.forEach((meal) =>{
                addMeal(meal,true);
            })
        }
    }
})

function showMealInfo(mealData){
    mealinfoEl.innerHTML = "";
    const mealsEl = document.createElement("div");
    const ingredient = [];
    const measure = [];
    for(let i=1;i<=20;i++){
        if(mealData["strIngredient"+i]){
            ingredient.push(`${mealData["strIngredient"+i]}`);
            measure.push(`${mealData["strMeasure"+i]}`);
        }else{
            break;
        }
    }
    mealsEl.innerHTML = `
    <h1>${mealData.strMeal} </h1>
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}"/>
    <h3 style="text-align:center;"> Ingredients: </h3>
    <div class="instruction">
        <ol>
            ${ingredient.map(ing =>
                `<li> ${ing}</li>` ).join("")}
        </ol>
        <ul style="list-style-type:none;">
            ${measure.map(measure =>
                `<li><span style="font-weight:bold;">--></span> ${measure}</li>` ).join("")}
        </ul>   
    </div>
    <h3 style="text-align:center;"> Instruction: </h3>
    <p>${mealData.strInstructions}</p>
    `;
    mealinfoEl.appendChild(mealsEl);
    popupinfo.classList.remove('hidden');
}

closeBtn.addEventListener('click',()=>{
    popupinfo.classList.add('hidden');
})