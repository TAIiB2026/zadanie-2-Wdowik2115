import { Injectable } from '@angular/core';
import { DataItem } from '../models/data-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataItemService {
  // Inicjalizacja 5 obiektów typu DataItem
  private items: DataItem[] = [
    new DataItem(1, 100.5, new Date('2026-01-10'), 'Wpis 1', 'Opis pierwszego elementu'),
    new DataItem(2, 250.0, new Date('2026-02-15'), 'Wpis 2', 'Opis drugiego elementu'),
    new DataItem(3, 30.75, new Date('2026-03-20'), 'Wpis 3', 'Opis trzeciego elementu'),
    new DataItem(4, 500.0874, new Date('2026-04-25'), 'Wpis 4', 'Opis czwartego elementu'),
    new DataItem(5, 75.206, new Date('2026-05-01'), 'Wpis 5', 'Opis piątego elementu')
  ];

  constructor() { }

  // Metoda zwracająca kopię repozytorium
  getItems(): DataItem[] {
    return [...this.items];
  }
}