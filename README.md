# React Hooks Lab (Vite + TypeScript + Docker)

Vite + React + TypeScript を Docker で動かす教材プロジェクト。
解説 / Basics / Advanced（後日追加）やスライド（Marp）・PDF を同一リポジトリで管理します。

## 開発サーバー（Docker）

docker compose up -d

## [http://localhost:5175](http://localhost:5175)

docker compose logs -f web

## Lint / Format / Typecheck

docker compose exec -T web sh -lc "npm run lint"
docker compose exec -T web sh -lc "npx tsc --noEmit"
docker compose exec -T web sh -lc "npm run format"

## スライド（手元で PDF 化）

* ソース: docs/slides/\*.marp.md
* 出力: docs/slides/pdf/

```bash
./scripts/build-slides.sh
```

## 🔁 before / after へ反映する時の流れ（運用例）

1. main に教材を更新（例：Basics の改善を commit）。
2. Basics の before ブランチに切り替え：

   ```bash
   git switch tracks/basics/before
   ```

   * 必要なら「骨組み（TODO）」状態に調整。
   * 作業コミット例：`feat(basics): add TODO stubs for section X`
3. Basics の after ブランチ：

   ```bash
   git switch tracks/basics/after
   ```

   * main の該当コミットを cherry-pick して完成状態に同期。
4. それぞれを PR にして、保護付きでレビュー→マージ。
5. タグを打つ（任意）：

   ```bash
   git tag v1-basics-2025.08 && git push origin --tags
   ```

## 構成

* app/ … Vite + React + TS（アプリ本体）
* docs/slides/ … スライド（Marp Markdown）と pdf/ 出力
* docs/labs/ … 演習手順
* scripts/ … ローカル補助スクリプト

## ライセンス

MIT
