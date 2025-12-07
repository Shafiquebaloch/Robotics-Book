# Gazebo Simulation Examples

This directory is intended to host reproducible Gazebo simulation examples for humanoid robots.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `my_first_humanoid_sim`).
2.  Inside your example directory, include all necessary files:
    *   URDF/XACRO files for robot description.
    *   SDF files for world description.
    *   Launch files (ROS 2) for starting the simulation.
    *   Python scripts for controlling the robot (if applicable).
    *   A dedicated `README.md` explaining how to set up, run, and interact with the simulation.
3.  Ensure the example is fully reproducible on Ubuntu 22.04 with ROS 2 (Humble/Iron) and a standard Gazebo installation.
4.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/gazebo-unity-digital-twin/index.md`).

## Example Structure:

```
code-examples/gazebo-sims/
├── my_first_humanoid_sim/
│   ├── urdf/
│   │   └── my_humanoid.urdf
│   ├── worlds/
│   │   └── empty_world.sdf
│   ├── launch/
│   │   └── start_sim.launch.py
│   ├── scripts/
│   │   └── control_robot.py
│   └── README.md
├── another_sim_example/
│   ├── ...
│   └── README.md
└── README.md (this file)
```