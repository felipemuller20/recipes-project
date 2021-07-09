import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <div>
      Pagina DoneRecipes
      <Header title="Receitas Feitas" />
      <div className="categoriesBTNRecipesDone">
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
    </div>
  );
}

export default DoneRecipes;
