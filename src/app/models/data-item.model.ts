export class DataItem {
  id: number;
  value: number; // pole liczbowe
  date: Date;    // pole opisujące datę
  title: string; // pole tekstowe 1
  description: string; // pole tekstowe 2

  constructor(id: number, value: number, date: Date, title: string, description: string) {
    this.id = id;
    this.value = value;
    this.date = date;
    this.title = title;
    this.description = description;
  }
}