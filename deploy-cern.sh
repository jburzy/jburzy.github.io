#!/usr/bin/env bash
# Deploy the site to CERN EOS web space (https://jburzyns.web.cern.ch).
#
# Strategy: log in to lxplus (you'll be prompted for your CERN 2FA code),
# obtain Kerberos credentials on the remote side if the delegated ones are
# missing (a macOS ssh quirk), then pull the site from GitHub and mirror it
# into the EOS www folder. Deploys whatever is on GitHub main — push first!
#
# NOTE: the remote rsync uses --delete, so /eos/user/j/jburzyns/www becomes
# an exact mirror of the repo. Add --exclude rules if other content lives there.
set -euo pipefail

ssh -t -o GSSAPIAuthentication=yes -o GSSAPIDelegateCredentials=yes \
  jburzyns@lxplus.cern.ch '
    klist -s 2>/dev/null || kinit
    TMP=$(mktemp -d)
    trap "rm -rf \"$TMP\"" EXIT
    git clone --quiet --depth 1 https://github.com/jburzy/jburzy.github.io "$TMP/site"
    rsync -av --delete --exclude ".git" --exclude "deploy-cern.sh" \
      "$TMP/site/" /eos/user/j/jburzyns/www/
    echo "Deployed to https://jburzyns.web.cern.ch"
  '
