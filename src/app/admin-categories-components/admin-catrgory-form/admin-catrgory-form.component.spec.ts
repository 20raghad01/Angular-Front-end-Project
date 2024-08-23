import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatrgoryFormComponent } from './admin-catrgory-form.component';

describe('AdminCatrgoryFormComponent', () => {
  let component: AdminCatrgoryFormComponent;
  let fixture: ComponentFixture<AdminCatrgoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatrgoryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCatrgoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
