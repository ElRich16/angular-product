import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEsriComponent } from './map-esri.component';

describe('MapEsriComponent', () => {
  let component: MapEsriComponent;
  let fixture: ComponentFixture<MapEsriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapEsriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapEsriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
