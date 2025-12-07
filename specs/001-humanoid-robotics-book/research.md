# Research Plan: Book on Physical AI & Humanoid Robotics

## Phase 0 Research Tasks

### Research Task 1: Simulation Engines - Gazebo vs Unity

**Objective**: Investigate the trade-offs between Gazebo and Unity as simulation platforms for humanoid robotics examples within the book, focusing on physics accuracy versus user experience/visualization capabilities.

**Decision**: Gazebo will be the primary simulation engine for general robotics examples due to its open-source nature, robust physics, and strong integration with ROS 2. Unity will be considered for examples requiring advanced visualization or specific game-engine functionalities where its strengths are particularly relevant.
**Rationale**: Gazebo's tight integration with ROS 2 makes it ideal for demonstrating core robotics concepts and control systems which are central to the book. Unity offers superior visual fidelity and advanced rendering capabilities that might be beneficial for certain demonstration, but its learning curve and licensing considerations for advanced features make it secondary.
**Alternatives considered**: Gazebo, Unity.

---

### Research Task 2: Deployment Environment - Local RTX vs Cloud Omniverse

**Objective**: Determine the optimal deployment environment for NVIDIA Isaac Sim examples – local RTX workstation versus Cloud Omniverse instances, considering accessibility, cost, and performance for readers.

**Decision**: Local RTX workstation will be the primary deployment environment for NVIDIA Isaac Sim examples.
**Rationale**: Prioritizes accessibility for readers who are likely to have powerful local GPUs. Cloud Omniverse instances offer scalability but introduce additional complexity and potential cost for individual learners. The book will focus on reproducible local setups.
**Alternatives considered**: Local RTX workstation, Cloud Omniverse instances.

---

### Research Task 3: Humanoid Hardware Path

**Objective**: Research different humanoid robot hardware paths (Proxy robots like Unitree Go2, Mini humanoids, or G1 premium humanoids) to inform the choice of robot models and control strategies presented in the book.

**Decision**: The book will primarily use proxy robots like Unitree Go2 and/or Mini humanoids for hardware examples, focusing on general principles applicable to this class of robots.
**Rationale**: These robots represent a more accessible entry point for hardware interaction for most readers compared to high-end G1 premium humanoids, offering a balance between complexity and educational value. The principles taught will be generalizable.
**Alternatives considered**: Proxy robots (Unitree Go2), Mini humanoids, G1 premium humanoids.

---

### Research Task 4: AI Integration Method

**Objective**: Explore various AI integration methods (Local LLM, Cloud LLM, or hybrid voice-to-action pipelines) for humanoid robot intelligence, evaluating feasibility and implications for book content.

**Decision**: A hybrid voice-to-action LLM pipeline will be the chosen AI integration method.
**Rationale**: This approach offers a practical and interactive way to demonstrate language-based control, combining local processing for sensitive or low-latency aspects with cloud capabilities for powerful LLMs. This balances performance, privacy, and accessibility for readers.
**Alternatives considered**: Local LLM, Cloud LLM, Hybrid voice-to-action pipeline.

---

### Research Task 5: VLA Model Choice

**Objective**: Investigate suitable VLA model choices (e.g., Whisper + GPT + ROS 2 actions vs multi-agent pipelines) for integration into the autonomous humanoid robot pipeline, focusing on educational value and ease of implementation.

**Decision**: Whisper for speech-to-text, GPT for high-level planning, and ROS 2 actions for execution will be the primary VLA model choice.
**Rationale**: This combination leverages established and powerful components (Whisper for audio, GPT for language understanding/planning) and integrates directly with the ROS 2 ecosystem for robot control, providing a concrete and reproducible pipeline.
**Alternatives considered**: Whisper + GPT + ROS 2 actions, multi-agent pipelines.