# ROS 2 Python Locomotion Examples

This directory is intended to host reproducible ROS 2 Python code examples for humanoid robot locomotion.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `walk_forward`).
2.  Inside your example directory, include all necessary files:
    *   Python script(s) for ROS 2 node(s) (e.g., publisher for velocity commands).
    *   `package.xml` and `setup.py` for the ROS 2 package.
    *   Launch files (`.launch.py`) for easy execution.
    *   A dedicated `README.md` explaining how to set up, build, run, and interact with the example.
3.  Ensure the example is fully reproducible on Ubuntu 22.04 with ROS 2 (Humble/Iron) and can control a simulated humanoid robot (e.g., in Gazebo).
4.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/ros2-nervous-system/index.md`).

## Example Structure:

```
code-examples/ros2-python-examples/locomotion/
├── walk_forward/
│   ├── src/
│   │   └── walk_node.py
│   ├── launch/
│   │   └── walk_launch.py
│   ├── package.xml
│   ├── setup.py
│   └── README.md
├── turn_in_place/
│   ├── ...
│   └── README.md
└── README.md (this file)
```