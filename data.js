var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14292039802346856,
        "pitch": 0.5734865176993544,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.030777973784159585,
          "pitch": 0.4126274368407543,
          "rotation": 0,
          "target": "2-pool"
        },
        {
          "yaw": 0.09517713034643904,
          "pitch": 0.1740418134353412,
          "rotation": 0,
          "target": "1-gazebo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gazebo",
      "name": "Gazebo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0612815611016782,
        "pitch": 0.20090385148384726,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.483016076560368,
          "pitch": 0.004360858759495656,
          "rotation": 0,
          "target": "2-pool"
        },
        {
          "yaw": -1.5075347157389736,
          "pitch": -0.5078798490443752,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004582919937567098,
        "pitch": 0.19499184113028178,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.017406460819543668,
          "pitch": -0.2803623244419349,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 3.11251082519078,
          "pitch": -0.0549889962787784,
          "rotation": 0,
          "target": "1-gazebo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Isora",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
