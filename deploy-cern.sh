#!/usr/bin/env bash
# Deploy the site to CERN EOS web space (https://jburzyns.web.cern.ch).
#
# Prereq: a valid CERN Kerberos ticket —  kinit jburzyns@CERN.CH
# lxplus will also prompt for your CERN 2FA code.
#
# NOTE: --delete makes the EOS www folder an exact mirror of this repo.
# Anything in /eos/user/j/jburzyns/www that is not in this repo will be
# removed. Add --exclude rules here if other content lives there.
set -euo pipefail
cd "$(dirname "$0")"

rsync -av --delete --exclude '.git' \
  -e "ssh -o GSSAPIAuthentication=yes -o GSSAPIDelegateCredentials=yes" \
  ./ jburzyns@lxplus.cern.ch:/eos/user/j/jburzyns/www/
