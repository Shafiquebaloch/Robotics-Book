# NVIDIA Isaac Sim Projects

This directory is intended to host reproducible NVIDIA Isaac Sim projects for humanoid robotics.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `my_first_isaac_humanoid`).
2.  Inside your example directory, include all necessary files:
    *   Isaac Sim project files (`.usd` scenes, Python scripts).
    *   `ROS 2` integration scripts (if applicable).
    *   A dedicated `README.md` explaining how to set up, run, and interact with the simulation.
3.  Ensure the example is fully reproducible on a local RTX workstation with NVIDIA Isaac Sim installed.
4.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/nvidia-isaac/index.md`).

## Example Structure:

```
code-examples/isaac-sim-projects/
├── my_first_isaac_humanoid/
│   ├── usd/
│   │   └── humanoid_scene.usd
│   ├── scripts/
│   │   └── control_humanoid.py
│   └── README.md
├── another_isaac_example/
│   ├── ...
│   └── README.md
└── README.md (this file)
```