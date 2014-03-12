#!/bin/sh

# Re-deploy:
# ssh server "rm -rf /repos/blog /webs/blog"; ./deployment/bootstrap-server.sh ; git deploy

PROJECT=blog

ssh server "mkdir -p /repos && git init --bare /repos/$PROJECT"
scp deployment/post-receive server:/repos/$PROJECT/hooks/
ssh server "chmod +x /repos/$PROJECT/hooks/post-receive"

echo "Done. Ready for the initial push."
