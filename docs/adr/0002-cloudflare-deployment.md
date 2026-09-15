# ADR-0002: Cloudflare Workers デプロイ設定

## Status

Accepted

## Context

TanStack Start を Cloudflare Workers にデプロイする際の設定方法を決定する必要があった。

## Decision

1. **Cloudflare Vite プラグイン** (`@cloudflare/vite-plugin`) を使用
   - ビルド時にアセットとサーバーコードを自動バンドル
   - `wrangler.jsonc` の `assets` バインディングはプラグインが自動設定するため記載不要

2. **デプロイコマンド**: `bunx wrangler deploy` をルートディレクトリから実行
   - プラグインが `dist/homepage/` にバンドル済みの出力を生成
   - `--config` オプションや `working-directory` の指定は不要

3. **互換性フラグ**: `nodejs_compat` を有効化
   - TanStack Start が Node.js モジュールを使用するため

## Consequences

### メリット
- デプロイプロセスがシンプル（1コマンド）
- アセット配信とサーバーサイド処理を統一的に管理
- D1、R2 のバインディングも自動的に設定される

### デメリット
- Windows ローカル環境で oxfmt が動作しない（CI では動作）
- `npx` が使用不可（`bunx` 必須）
- ビルド出力の構造が `dist/client` と `dist/server` のみ（`dist/homepage` はデプロイ時のみ生成）
