#!/usr/bin/env bash
set -euo pipefail
docker compose exec -T web sh -lc '
  npm run lint &&
  npx tsc --noEmit &&
  npm run build --if-present
'
echo "✅ verify passed (lint / typecheck / build)"
