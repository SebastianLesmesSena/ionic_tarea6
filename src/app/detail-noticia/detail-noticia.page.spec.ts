import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailNoticiaPage } from './detail-noticia.page';

describe('DetailNoticiaPage', () => {
  let component: DetailNoticiaPage;
  let fixture: ComponentFixture<DetailNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
