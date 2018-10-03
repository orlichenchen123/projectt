import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchPageComponent } from './serch-page.component';

describe('SerchPageComponent', () => {
  let component: SerchPageComponent;
  let fixture: ComponentFixture<SerchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
