import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonSQComponent } from './demon-sq.component';

describe('DemonSQComponent', () => {
  let component: DemonSQComponent;
  let fixture: ComponentFixture<DemonSQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonSQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonSQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
