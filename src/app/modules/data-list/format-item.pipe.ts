import { Pipe, PipeTransform } from '@angular/core';
import { DataItem } from '../../models/data-item.model';

@Pipe({
  name: 'formatItem',
  standalone: false
})
export class FormatItemPipe implements PipeTransform {
  transform(item: DataItem, showValue: boolean): string {
    if (!item) return '';

    const formattedValue = item.value.toFixed(2);

    if (showValue) {
      return `${item.title} (${formattedValue}): ${item.description}`;
    } else {
      return `${item.title}: ${item.description}`;
    }
  }
}
