import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe1',
      'Long description1',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
    ),
    new Recipe(
      'A test Recipe2',
      'Long description2',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
    ),
    new Recipe(
      'A test Recipe3',
      'Long description3',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
    ),
  ];

  getRecipes() {
    // A hack to get new referance
    return this.recipes.slice();
  }
}
