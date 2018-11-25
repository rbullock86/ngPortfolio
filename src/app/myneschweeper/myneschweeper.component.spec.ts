import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyneschweeperComponent } from './myneschweeper.component';

describe('MyneschweeperComponent', () => {
  let component: MyneschweeperComponent;
  let fixture: ComponentFixture<MyneschweeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyneschweeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyneschweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
