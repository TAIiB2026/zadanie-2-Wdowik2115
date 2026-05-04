import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListViewComponent } from './data-list-view/data-list-view.component';
import { FormatItemPipe } from './format-item.pipe';



@NgModule({
  declarations: [DataListViewComponent, 
    FormatItemPipe // Rejestracja wlasnego pipe'a
  ],
  imports: [CommonModule],
  exports: [DataListViewComponent] 
})
export class DataListModule { }
