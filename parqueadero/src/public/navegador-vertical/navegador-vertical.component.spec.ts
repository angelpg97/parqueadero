import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorVerticalComponent } from './navegador-vertical.component';

describe('NavegadorVerticalComponent', () => {
  let component: NavegadorVerticalComponent;
  let fixture: ComponentFixture<NavegadorVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegadorVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegadorVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
