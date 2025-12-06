#!/bin/bash

# This script will add all your current changes, commit them,
# and push them to the 'main' branch on GitHub.
# Pushing to 'main' will automatically trigger the deployment
# workflow we fixed in .github/workflows/firebase-app-hosting.yml.

# To run this file, open the terminal and type:
# bash deploy.sh

# 1. Add all changes to the staging area
git add .

# 2. Commit the changes with a message
# You can change the commit message inside the quotes if you like.
git commit -m "Finalize project setup and fix deployment workflow"

# 3. Push the changes to the main branch on GitHub
git push origin main

echo "✅ Changes have been pushed to GitHub! Check the 'Actions' tab in your repository to see the deployment progress."
