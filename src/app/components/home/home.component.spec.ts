import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponect } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponect;
  let fixture: ComponentFixture<HomeComponect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponect ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
