import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonsterComponent } from './edit-monster.component';

describe('EditMonsterComponent', () => {
  let component: EditMonsterComponent;
  let fixture: ComponentFixture<EditMonsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMonsterComponent]
    });
    fixture = TestBed.createComponent(EditMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
