import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryEditFormComponent } from './admin-category-edit-form.component';

describe('AdminCategoryEditFormComponent', () => {
  let component: AdminCategoryEditFormComponent;
  let fixture: ComponentFixture<AdminCategoryEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCategoryEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCategoryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
