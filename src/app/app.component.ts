import { Component } from '@angular/core';
import { Monster } from './models/monster';
import { MonsterService } from './services/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  monsters:Monster[] = [];
  monsterToEdit?: Monster;


  constructor(private monsterService: MonsterService){}

  ngOnInit() : void{
    this.monsterService.getMonsters().subscribe((result: Monster[])=>(this.monsters = result));

  }

  updateMonsterList(monsters: Monster[]){
    this.monsters = monsters;
  }

  initNewMonster(){
    this.monsterToEdit = new Monster();
  }

  editMonster(monster: Monster){
    this.monsterToEdit = monster;
  }
  
}
