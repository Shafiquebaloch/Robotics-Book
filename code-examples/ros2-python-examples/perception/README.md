# ROS 2 Python Perception Examples

This directory is intended to host reproducible ROS 2 Python code examples for humanoid robot perception.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `object_detection`).
2.  Inside your example directory, include all necessary files:
    *   Python script(s) for ROS 2 node(s) (e.g., subscriber for camera feed, image processing).
    *   `package.xml` and `setup.py` for the ROS 2 package.
    *   Launch files (`.launch.py`) for easy execution.
    *   A dedicated `README.md` explaining how to set up, build, run, and interact with the example.
3.  Ensure the example is fully reproducible on Ubuntu 22.04 with ROS 2 (Humble/Iron) and can process data from a simulated humanoid robot (e.g., camera feed from Gazebo).
4.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/ros2-nervous-system/index.md`).

## Example Structure:

```
code-examples/ros2-python-examples/perception/
├── object_detection/
│   ├── src/
│   │   └── detector_node.py
│   ├── launch/
│   │   └── detection_launch.py
│   ├── package.xml
│   ├── setup.py
│   └── README.md
├── human_tracking/
│   ├── ...
│   └── README.md
└── README.md (this file)
```