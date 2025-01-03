import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  // 入力フィールドのラベル
  @Input() label = '';
  // 入力フィールドの値
  @Input() value = '';
  // プレースホルダーテキスト
  @Input() placeholder = '';
  // 入力フィールドのタイプ
  @Input() type = 'text';
  // 入力フィールドのID
  @Input() id = '';

  // 値が変更された時のイベント
  @Output() valueChange = new EventEmitter<string>();
  // フォーカスが外れた時のイベント
  @Output() blur = new EventEmitter<FocusEvent>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }

  onBlur(event: FocusEvent) {
    this.blur.emit(event);
  }
} 