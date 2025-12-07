# VLA Model Integration Examples

This directory is intended to host reproducible code examples for Vision-Language-Action (VLA) model integration in humanoid robotics.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `voice_command_to_ros_action`).
2.  Inside your example directory, include all necessary files:
    *   Python scripts for VLA components (e.g., Whisper integration, GPT prompting, ROS 2 action clients).
    *   Configuration files for LLMs/APIs.
    *   `package.xml` and `setup.py` for ROS 2 integration (if applicable).
    *   A dedicated `README.md` explaining how to set up, run, and interact with the example.
3.  Ensure the example demonstrates the pipeline: Voice Command → LLM Planning → ROS 2 Action → Simulated Robot Movement.
4.  Ensure the example is fully reproducible on Ubuntu 22.04 with ROS 2 and required Python packages.
5.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/vla/index.md`).

## Example Structure:

```
code-examples/vla-integration/
├── voice_command_to_ros_action/
│   ├── src/
│   │   └── vla_pipeline.py
│   ├── config/
│   │   └── llm_config.yaml
│   ├── launch/
│   │   └── vla_launch.py
│   ├── package.xml
│   ├── setup.py
│   └── README.md
├── semantic_navigation/
│   ├── ...
│   └── README.md
└── README.md (this file)
```