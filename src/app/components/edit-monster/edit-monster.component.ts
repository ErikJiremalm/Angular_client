import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-edit-monster',
  templateUrl: './edit-monster.component.html',
  styleUrls: ['./edit-monster.component.css']
})
export class EditMonsterComponent {
  @Input() monster?: Monster
  @Output() monsterUptated = new EventEmitter<Monster[]>();


  constructor(private monsterService: MonsterService){}

  ngOnInit(): void {

  }
  updateMonster(monster:Monster){
    this.monsterService.
    updateMonsters(monster)
    .subscribe((monsters: Monster[] ) => 
    this.monsterUptated.emit(monsters));
  }
  deleteMonster(monster:Monster){
    this.monsterService.
    deleteMonsters(monster)
    .subscribe((monsters: Monster[] ) => 
    this.monsterUptated.emit(monsters));
  }
  createMonster(monster:Monster){
    this.monsterService.
    createMonsters(monster)
    .subscribe((monsters: Monster[] ) => 
    this.monsterUptated.emit(monsters));
  }
}
