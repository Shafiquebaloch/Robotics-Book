---
id: 2
title: Fix Vercel CSS Loading Issue
stage: general
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: none
branch: main
user: UMAIR
command: "Fix Vercel CSS Loading Issue"
labels: ["vercel", "docusaurus", "css", "deployment"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - book-src/docusaurus.config.js
tests_yaml: []
prompt_text: |
  hello have pushed my project on github and now i want to deploy my project on vercel but iam facing some errors my CSS is not loaded on github
response_text: |
  The CSS loading issue on Vercel was identified as a problem with the `baseUrl` configuration in `docusaurus.config.js`. The `baseUrl` was defaulting to `/Robotics-Book/` when deployed to Vercel, causing a mismatch with Vercel's root deployment path.

  The solution involves two steps:
  1.  **Set Environment Variable on Vercel:** Go to your Vercel project settings, navigate to "Environment Variables," and add a new variable:
      *   Name: `BASE_URL`
      *   Value: `/`
  2.  **Update `docusaurus.config.js`:** The `baseUrl` default value has been updated to `/` to ensure correct asset paths even if the `BASE_URL` environment variable is not explicitly set on Vercel. This change was implemented via the `replace` tool.
---
