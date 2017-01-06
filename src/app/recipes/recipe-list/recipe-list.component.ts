import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dummy', 'Dummy Description', 'http://www.loupiote.com/photos_m/2229369620-store-dummy-vienna.jpg');
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
      this.recipeSelected.emit(recipe);
  }
}
