import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureareaComponent } from './securearea.component';

describe('SecureareaComponent', () => {
  let component: SecureareaComponent;
  let fixture: ComponentFixture<SecureareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
