import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  // チェックボックスのラベル
  @Input() label = '';
  // チェック状態
  @Input() checked = false;
  // チェックボックスのID
  @Input() id = '';

  // チェック状態が変更された時のイベント
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checkedChange.emit(checkbox.checked);
  }
} 