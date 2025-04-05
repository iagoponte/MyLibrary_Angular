import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrudLivrosComponent } from './modal-crud-livros.component';

describe('ModalCrudLivrosComponent', () => {
  let component: ModalCrudLivrosComponent;
  let fixture: ComponentFixture<ModalCrudLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrudLivrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCrudLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
