import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] =[new Recipe('A Test Recipe','This is a sample test','https://www.danishfoodlovers.com/wp-content/uploads/2022/09/Butter-chicken-3.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1')
  ,new Recipe('A Second Recipe','This is a second test','https://www.danishfoodlovers.com/wp-content/uploads/2022/09/Butter-chicken-3.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1')];
  constructor(){ }

}