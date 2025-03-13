import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazeInicioComponent } from './interfaze-inicio.component';

describe('InterfazeInicioComponent', () => {
  let component: InterfazeInicioComponent;
  let fixture: ComponentFixture<InterfazeInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazeInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
