import { Component, OnInit } from '@angular/core';
import { DataItem } from '../../../models/data-item.model';
import { DataItemService } from '../../../services/data-item';

@Component({
  selector: 'app-data-list-view',
  standalone: false,
  templateUrl: './data-list-view.component.html'
})
export class DataListViewComponent implements OnInit {
  items: DataItem[] = [];

  constructor(private dataItemService: DataItemService) { }

  ngOnInit(): void {
    this.items = this.dataItemService.getItems();
  }
}