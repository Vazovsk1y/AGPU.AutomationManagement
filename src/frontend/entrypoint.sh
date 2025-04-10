#!/bin/sh

if [ -z "$API_BASE_URL" ]; then
  echo "API_BASE_URL is not set, skipping replacement in shared.js"
else
  echo "Injecting API_BASE_URL=$API_BASE_URL into shared.js"
  sed -i 's|^const apiBaseUrlEnvVariableValue = ".*";|const apiBaseUrlEnvVariableValue = "'"$API_BASE_URL"'";|' /usr/share/nginx/html/js/shared.js
fi

nginx -g "daemon off;"