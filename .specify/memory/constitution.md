# Robotics Book Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

<!-- Sync Impact Report:
Version change: N/A → 1.0.0
List of modified principles: All principles modified/replaced.
Added sections: Content Restrictions, Enforcement Policy
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md (⚠ pending)
- .specify/templates/spec-template.md (⚠ pending)
- .specify/templates/tasks-template.md (⚠ pending)
- All commands in .specify/commands/*.md (⚠ pending)
- README.md, docs/quickstart.md (⚠ pending)
Follow-up TODOs: RATIFICATION_DATE
-->

## Core Principles

### I. Strict Scope Enforcement
Every chapter and piece of content MUST adhere strictly to the defined scope, focusing exclusively on Humanoid Robotics, Robotics AI, and related technologies as specified in the Content Restrictions section. Content outside this scope MUST NOT be included.

### II. Technical Accuracy & Reproducibility
All technical claims, code examples, and simulation setups MUST be accurate, verifiable, and reproducible. Code examples MUST run successfully using the specified versions of ROS 2, Gazebo, Unity, and NVIDIA Isaac Sim.

### III. Docusaurus-Ready Content
All book content MUST be formatted as Docusaurus-ready Markdown. This includes proper use of Markdown headings, code blocks, and Docusaurus-specific features for optimal rendering and navigation.

### IV. Academic Rigor (APA Citations)
All factual claims and external references MUST be supported by APA-style citations. A minimum of 20 APA-style references MUST be included in the full book.

### V. Readability & Clarity
Content MUST be written to be clear, concise, and accessible to the target audience (students, developers, robotics learners). Explanations MUST be straightforward, and complex topics MUST be broken down logically.

## Content Restrictions

### Allowed Content:
This book MUST ONLY contain content related to:
1. Humanoid Robotics
2. Robotics AI
3. Humanoid AI
4. AI-driven robotics systems
5. Sensors, motors, control systems related to humanoids
6. ROS 2 for humanoid control
7. Gazebo or Unity simulation for humanoid robots
8. NVIDIA Isaac Sim, Isaac ROS, and AI perception stack
9. Vision-Language-Action (VLA) systems
10. Autonomous humanoid architectures

### Absolutely NOT allowed:
- No general robotics unrelated to humanoids
- No electronics topics unless directly linked to humanoid robotics
- No software engineering outside of robotics
- No classical machine learning unrelated to robotics
- No mathematics chapters unless directly required for humanoid control
- No history, philosophy, ethics, or non-technical content
- No business, marketing, freelancing, or productivity material
- No AI topics outside robotics (e.g., chatbots, NLP, LLM theory without robotics context)

## Enforcement Policy

- Every generated chapter MUST be checked against this scope.
- If a topic is outside humanoid robotics + robotics AI, it MUST be rejected.
- All examples, code, diagrams, and explanations MUST stay strictly within humanoid robotics.
- If content does not directly contribute to humanoid robotics AI, it MUST NOT be included.

## Governance
This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs/reviews must verify compliance.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Needs to be set. | **Last Amended**: 2025-12-07
