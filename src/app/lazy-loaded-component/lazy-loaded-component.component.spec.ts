import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedComponentComponent } from './lazy-loaded-component.component';

describe('LazyLoadedComponentComponent', () => {
  let component: LazyLoadedComponentComponent;
  let fixture: ComponentFixture<LazyLoadedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadedComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
