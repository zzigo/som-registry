#!/usr/bin/env bash
# Keeps the VPS copy of the instrument registry (zzigo/som-registry) in step with GitHub.
# The musiki catalogue (src/lib/instruments/catalogue.ts) re-reads the directory whenever
# a file's path, mtime or size changes, so a fast-forward is enough: no build, no restart.
# Installed on the VPS as ~/bin/sync-soog-instruments.sh and run from cron every 2 minutes.
set -euo pipefail

DIR="${SOOG_INSTRUMENTS_DIR:-/opt/musiki/framework/.content-sources/soog-instruments}"

exec 9>/tmp/sync-soog-instruments.lock
flock -n 9 || exit 0

export GIT_TERMINAL_PROMPT=0
export GIT_SSH_COMMAND='ssh -o BatchMode=yes -o ConnectTimeout=15'

cd "$DIR"
before="$(git rev-parse HEAD)"
git fetch -q origin main
git merge -q --ff-only origin/main
after="$(git rev-parse HEAD)"

if [ "$before" != "$after" ]; then
  echo "$(date -Is) ${before:0:7} -> ${after:0:7} $(git log -1 --format=%s)"
fi
