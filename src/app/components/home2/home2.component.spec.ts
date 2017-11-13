import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2Componect } from './home2.component';

describe('HomeComponent', () => {
  let component: Home2Componect;
  let fixture: ComponentFixture<Home2Componect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2Componect ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2Componect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
