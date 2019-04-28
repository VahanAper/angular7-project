import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe1',
      'Long description1',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe(
      'A test Recipe2',
      'Long description2',
      'https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2-500x375.jpg',
      [
        new Ingredient('Meat2', 2),
        new Ingredient('French Fries2', 30),
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    // A hack to get new referance
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.getRecipes()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
