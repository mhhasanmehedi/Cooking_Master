const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?';

const getMealData = meal => {
    const url = `${apiBase}f=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}


// Submit button event handler
document.getElementById('submit').addEventListener('click', () => {
    const inputMeal = document.getElementById('input-meal').value;
    getMealData(inputMeal);
})


// Display Meal 
const displayMeal = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealInfo = `
                    <img onclick="displayMealDetail('${meal.strMeal}')" src="${meal.strMealThumb}">
                    <h3>${meal.strMeal}</h3>                    
                `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

}


// Display Meal Details
const displayMealDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals))
}


// Render info 
const renderMealInfo = meal => {
    const mealDiv = document.getElementById('meal-div');
    mealDiv.innerHTML = `
    <img src="${meal[0].strMealThumb}">
    <h2>${meal[0].strMeal}</h2>
    <p>Ingredients </p>
    <ul>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient1}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient2}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient3}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient4}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient5}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient6}</li>
        <li><i class="fas fa-check-square"></i>${meal[0].strIngredient7}</li>
    </ul>    
    `
}


