---
id: 1
title: Fix Vercel Deployment Error
stage: green
date_iso: 2025-12-07
surface: agent
model: claude-3-5-sonnet
feature: none
branch: 001-humanoid-robotics-book
user: UMAIR
command: null
labels: ["vercel", "deployment", "docusaurus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - vercel.json
tests_yaml: []
prompt_text: |
  17:40:37.507 Running build in Washington, D.C., USA (East) – iad1
  17:40:37.508 Build machine configuration: 2 cores, 8 GB
  17:40:37.743 Cloning github.com/Shafiquebaloch/Robotics-Book (Branch: 001-humanoid-robotics-book, Commit: 041366d)
  17:40:37.744 Previous build caches not available.
  17:40:37.950 Cloning completed: 207.000ms
  17:40:38.337 Running "vercel build"
  17:40:38.770 Vercel CLI 49.0.0
  17:40:39.886 sh: line 1: docusaurus-build: command not found
  17:40:39.890 Error: Command "docusaurus-build" exited with 127
response_text: |
  I have created the `vercel.json` file. This file will tell Vercel to:
  1. Use `book-src` as the root directory for the project.
  2. Run `npm install` within `book-src` to install dependencies.
  3. Run `npm run build` within `book-src` to build the Docusaurus project.
  4. Expect the build output in `book-src/build`.

  The user should now commit this `vercel.json` file to their repository and redeploy on Vercel.
outcome: Vercel deployment error "docusaurus-build: command not found" was addressed by creating a `vercel.json` file with correct build configurations for Docusaurus.
evaluation: The `vercel.json` file defines the `buildCommand`, `installCommand`, `outputDirectory`, and `rootDirectory` to properly configure Vercel to build the Docusaurus project located in `book-src`. This should resolve the "command not found" error.
---
