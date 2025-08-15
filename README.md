# React Hooks Lab (Vite + TypeScript + Docker)

Vite + React + TypeScript を Docker で動かす教材プロジェクト。
解説 / Basics / Advanced（後日追加）やスライド（Marp）・PDF を同一リポジトリで管理します。

## 開発サーバー（Docker）

docker compose up -d

## <http://localhost:5175>

docker compose logs -f web

Lint / Format / Typecheck

docker compose exec -T web sh -lc "npm run lint"
docker compose exec -T web sh -lc "npx tsc --noEmit"
docker compose exec -T web sh -lc "npm run format"

スライド（手元で PDF 化）
 • ソース: docs/slides/*.marp.md
 • 出力: docs/slides/pdf/

./scripts/build-slides.sh

構成
 • app/ … Vite + React + TS（アプリ本体）
 • docs/slides/ … スライド（Marp Markdown）と pdf/ 出力
 • docs/labs/ … 演習手順
 • scripts/ … ローカル補助スクリプト

ライセンス

MIT
