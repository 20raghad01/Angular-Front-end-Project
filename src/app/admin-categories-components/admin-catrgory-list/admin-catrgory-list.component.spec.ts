import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatrgoryListComponent } from './admin-catrgory-list.component';

describe('AdminCatrgoryListComponent', () => {
  let component: AdminCatrgoryListComponent;
  let fixture: ComponentFixture<AdminCatrgoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatrgoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCatrgoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
