# Portfolio Site - Development Guide

## Overview

インターン書類選考用のポートフォリオサイト。エンジニア志望の学生が技術力をアピールするために作成。

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (Vite+) |
| Database | Cloudflare D1 + Drizzle ORM |
| Storage | Cloudflare R2 |
| Styling | TailwindCSS + shadcn/ui |
| Testing | Vitest (Integration) / Playwright (E2E) |
| Lint/Format | OxC (via Vite plugin) |
| Runtime | Bun |
| Deploy | Cloudflare Workers (Wrangler) |

## Commands

```bash
bun run dev              # 開発サーバー起動 (port 3000)
bun run build            # ビルド
bun run preview          # プレビューサーバー
bun run deploy           # Wranglerでデプロイ
bun run test             # Vitest統合テスト実行
bun run test:watch       # Vitest watch mode
bun run test:e2e         # Playwright E2Eテスト実行
bun run db:generate      # Drizzleマイグレーション生成
bun run db:migrate       # D1にマイグレーション適用
bun run db:studio        # Drizzle Studio起動
bun run lint             # OxC lint
bun run format           # OxC format
bun run format:check     # OxC format check (CI用)
bun run typecheck        # TypeScript型チェック
```

## Project Structure

```
homepage/
├── .github/workflows/         # CI/CD
│   ├── ci.yml                 # lint, format, typecheck, test
│   └── cd.yml                 # Cloudflare Workersデプロイ
├── docs/adr/                  # Architecture Decision Records
├── public/                    # 静的ファイル
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/uiコンポーネント
│   │   ├── layout/            # レイアウト (Header, Footer)
│   │   └── sections/          # セクション (Hero, About, Skills等)
│   ├── db/
│   │   ├── schema.ts          # Drizzleスキーマ定義
│   │   ├── index.ts           # DB接続
│   │   └── migrations/        # マイグレーション
│   ├── lib/
│   │   ├── r2.ts              # R2 helpers
│   │   └── utils.ts           # 共通ユーティリティ
│   ├── routes/                # TanStack Routerルート
│   ├── server/api/            # Server Functions
│   └── styles.css             # TailwindCSS
├── tests/
│   ├── integration/           # Vitest統合テスト
│   └── e2e/                   # Playwright E2Eテスト
├── wrangler.jsonc             # Cloudflare IaC
├── drizzle.config.ts          # Drizzle Kit設定
├── vitest.config.ts           # Vitest設定
└── playwright.config.ts       # Playwright設定
```

## Development Rules

### TDD (テスト駆動開発)

各機能は以下のサイクルで開発する：
1. **テストを先に書く** (Red) — 統合テストで期待する振る舞いを記述
2. **テストを通す** (Green) — 最小限の実装でパスさせる
3. **リファクタリング** (Refactor) — コードを整理しながらテストを維持

テストは**統合テストメイン**。単体テストは不要。
統合テスト = 複数のモジュール/レイヤーが連携して正しい振る舞いをするか検証するテスト。

### ADR (Architecture Decision Record)

開発中に重要な技術的意思決定をした場合、`docs/adr/` にADRを記録する。
ファイル名: `XXXX-descriptive-name.md` (例: `0002-database-schema-design.md`)

### コーディング規約

- TypeScript strict mode
- import順序: 外部パッケージ → 内部モジュール (相対パス)
- コンポーネントはfunctional components + hooks
- 命名規則:
  - コンポーネント: PascalCase (`Header.tsx`)
  - ユーティリティ: camelCase (`utils.ts`)
  - 定数: UPPER_SNAKE_CASE

### Git規約

- コミットメッセージ: Conventional Commits形式
  - `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`
- ブランチ命名: `feature/xxx`, `fix/xxx`, `docs/xxx`

## Environment Variables

`.dev.vars` (ローカル開発用):
```
CLOUDFLARE_ACCOUNT_ID=<your-account-id>
CLOUDFLARE_DATABASE_ID=<your-d1-database-id>
CLOUDFLARE_D1_TOKEN=<your-d1-token>
```

## Cloudflare Setup

### D1データベース作成
```bash
wrangler d1 create homepage-db
```

### R2バケット作成
```bash
wrangler r2 bucket create homepage-assets
```

### マイグレーション適用
```bash
bun run db:generate
wrangler d1 migrations apply homepage-db
```
