# Capstone: Autonomous Humanoid Pipeline Example

This directory is intended to host the end-to-end "Voice Command → LLM Planning → ROS 2 Action → Gazebo Simulation" pipeline example.

## How to Add the Capstone Pipeline Example:

1.  Create a subdirectory for the Capstone pipeline (e.g., `full_humanoid_control`).
2.  Inside this directory, include all necessary files:
    *   Python scripts for voice input (e.g., using Whisper API/model).
    *   Scripts for LLM planning (e.g., interacting with GPT API).
    *   ROS 2 packages for action servers and clients to interface with the robot control.
    *   Gazebo world and robot model files for the simulation environment.
    *   ROS 2 launch files to orchestrate the entire pipeline.
    *   A comprehensive `README.md` explaining how to set up, configure, build, run, and interact with the full pipeline.
3.  Ensure the example demonstrates full reproducibility on Ubuntu 22.04 with ROS 2 and required dependencies.
4.  Add a reference to this example in the "Capstone: Autonomous Humanoid" chapter content (e.g., `book-src/docs/capstone-humanoid/index.md`).

## Example Structure:

```
code-examples/capstone-pipeline/
├── full_humanoid_control/
│   ├── voice_input/
│   │   └── voice_node.py
│   ├── llm_planner/
│   │   └── planner_node.py
│   ├── ros2_actions/
│   │   └── humanoid_action_server.py
│   ├── gazebo_sim/
│   │   ├── humanoid_model.urdf
│   │   └── custom_world.sdf
│   ├── launch/
│   │   └── full_pipeline.launch.py
│   ├── config/
│   │   └── api_keys.yaml (placeholder/example config)
│   └── README.md
└── README.md (this file)
```