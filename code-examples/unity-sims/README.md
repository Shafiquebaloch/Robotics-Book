# Unity Simulation Examples

This directory is intended to host reproducible Unity simulation examples for humanoid robots.

## How to Add an Example:

1.  Create a new subdirectory for your example (e.g., `my_first_unity_humanoid_sim`).
2.  Inside your example directory, include all necessary files:
    *   Unity project files.
    *   Scripts for controlling the robot (C#).
    *   `ROS-TCP-Endpoint` configuration (if applicable).
    *   A dedicated `README.md` explaining how to set up, run, and interact with the simulation.
3.  Ensure the example is fully reproducible on a system with Unity Hub and the specified Unity editor version.
4.  Add a reference to your example in the main chapter content (e.g., `book-src/docs/gazebo-unity-digital-twin/index.md`).

## Example Structure:

```
code-examples/unity-sims/
├── my_first_unity_humanoid_sim/
│   ├── Assets/
│   │   ├── Scenes/
│   │   │   └── MyHumanoidScene.unity
│   │   ├── Scripts/
│   │   │   └── RobotController.cs
│   │   └── ...
│   ├── ProjectSettings/
│   │   └── ...
│   └── README.md
├── another_unity_sim_example/
│   ├── ...
│   └── README.md
└── README.md (this file)
```