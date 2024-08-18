import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorEditFormComponent } from './admin-author-edit-form.component';

describe('AdminAuthorEditFormComponent', () => {
  let component: AdminAuthorEditFormComponent;
  let fixture: ComponentFixture<AdminAuthorEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAuthorEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAuthorEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
