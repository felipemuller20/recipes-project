import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ currentMeal }) {
  const mealObj = Object.entries(currentMeal);
  const ingredientsArray = mealObj.filter((meal) => (
    meal[0].includes('Ingredient') && meal[1]
  ));
  const measureArray = mealObj.filter((meal) => {
    const xablau = meal[1] !== ' ' && meal[1] !== null;
    return meal[0].includes('Measure') && xablau;
  });

  console.log(ingredientsArray);
  console.log(measureArray);

  return (
    <ul>
      {ingredientsArray.map((ingredient, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {`${ingredient[1]} - ${measureArray[index][1]}`}
        </li>
      ))}
    </ul>
  );
}

IngredientsList.propTypes = {
  currentMeal: PropTypes.object,
}.isRequired;

export default IngredientsList;
