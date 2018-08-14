import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoptionComponent } from './listoption.component';

describe('ListoptionComponent', () => {
  let component: ListoptionComponent;
  let fixture: ComponentFixture<ListoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
