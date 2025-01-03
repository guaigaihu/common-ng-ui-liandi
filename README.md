# Common UI コンポーネントライブラリ

Angular 17 で開発された再利用可能な UI コンポーネントライブラリです。

## 特徴

- 📦 すぐに使える Angular コンポーネント
- 🎨 モダンなデザインスタイル
- 🛠 カスタマイズ可能なテーマ
- 📱 レスポンシブデザイン

## インストール

```bash
npm install common-ng-ui-liandi
```

## クイックスタート

1. `app.module.ts` または独立コンポーネントで必要なコンポーネントをインポート：

```typescript
import { InputComponent, CheckboxComponent } from 'common-ui';

@Component({
  // ...
  imports: [InputComponent, CheckboxComponent]
})
```

2. テンプレートで使用：

```html
<!-- 入力フィールドコンポーネント -->
<lib-input
  label="ユーザー名"
  [(value)]="username"
  placeholder="ユーザー名を入力してください"
></lib-input>

<!-- チェックボックスコンポーネント -->
<lib-checkbox
  label="記憶する"
  [(checked)]="rememberMe"
></lib-checkbox>
```

## コンポーネントドキュメント

### InputComponent 入力フィールドコンポーネント

ラベル付きの入力フィールドコンポーネントで、双方向バインディングをサポートします。

#### プロパティ

| プロパティ名 | 型 | デフォルト値 | 説明 |
|------------|-----|-------------|------|
| label | string | '' | 入力フィールドのラベル |
| value | string | '' | 入力フィールドの値 |
| placeholder | string | '' | プレースホルダーテキスト |
| type | string | 'text' | 入力フィールドのタイプ |
| id | string | '' | 入力フィールドのID |

#### イベント

| イベント名 | パラメータ型 | 説明 |
|-----------|-------------|------|
| valueChange | string | 値が変更された時に発火 |
| blur | FocusEvent | フォーカスが外れた時に発火 |

### CheckboxComponent チェックボックスコンポーネント

カスタムスタイルのチェックボックスコンポーネントです。

#### プロパティ

| プロパティ名 | 型 | デフォルト値 | 説明 |
|------------|-----|-------------|------|
| label | string | '' | チェックボックスのラベル |
| checked | boolean | false | チェック状態 |
| id | string | '' | チェックボックスのID |

#### イベント

| イベント名 | パラメータ型 | 説明 |
|-----------|-------------|------|
| checkedChange | boolean | チェック状態が変更された時に発火 |

## スタイルカスタマイズ

コンポーネントは SCSS 変数でテーマをカスタマイズできます：

```scss
// カスタムテーマカラー
$primary-color: #3B82F6;     // メインカラー
$border-color: #E5E7EB;      // ボーダーカラー
$hover-color: #D1D5DB;       // ホバーカラー
$text-color: #374151;        // テキストカラー
```

## ローカル開発

1. プロジェクトをクローン
```bash
git clone <repository-url>
```

2. 依存関係のインストール
```bash
npm install
```

3. ライブラリのビルド
```bash
npm run build:lib
```

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## コントリビューションガイド

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## ライセンス

MIT License 