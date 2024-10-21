import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationValiderComponent } from './postulation-valider.component';

describe('PostulationValiderComponent', () => {
  let component: PostulationValiderComponent;
  let fixture: ComponentFixture<PostulationValiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostulationValiderComponent]
    });
    fixture = TestBed.createComponent(PostulationValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
