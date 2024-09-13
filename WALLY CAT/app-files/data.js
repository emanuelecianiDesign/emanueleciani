var APP_DATA = {
  "scenes": [
    {
      "id": "0-cockpit",
      "name": "Cockpit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 3.1355079934574253,
        "pitch": 0.2600221906526077,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.5193646474696845,
          "pitch": 0.05908726579798795,
          "rotation": 3.141592653589793,
          "target": "3-side"
        },
        {
          "yaw": 1.170150937140722,
          "pitch": 0.43068899334216404,
          "rotation": 3.141592653589793,
          "target": "4-open-beach-area"
        },
        {
          "yaw": 2.9259324772912443,
          "pitch": 0.08806769123106584,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-galley",
      "name": "Galley",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.17786792247475702,
        "pitch": 0.1278405496382966,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.2769470247173764,
          "pitch": 0.2472971322186659,
          "rotation": 3.141592653589793,
          "target": "0-cockpit"
        },
        {
          "yaw": 0.2809250518996187,
          "pitch": 0.23884427275269537,
          "rotation": 3.141592653589793,
          "target": "4-open-beach-area"
        },
        {
          "yaw": -0.08837916759376263,
          "pitch": 1.0536029214800795,
          "rotation": 3.141592653589793,
          "target": "5-galley-open-sides"
        },
        {
          "yaw": -1.5240892170462494,
          "pitch": 0.08468858294768467,
          "rotation": 3.141592653589793,
          "target": "3-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bow",
      "name": "Bow",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -2.990891365261284,
        "pitch": 0.4023264499826027,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.5388761461887945,
          "pitch": 0.13947513396937694,
          "rotation": 3.141592653589793,
          "target": "3-side"
        },
        {
          "yaw": 3.0794004577146,
          "pitch": 0.12846858301281117,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-side",
      "name": "Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -3.1325054021124608,
        "pitch": 0.3358668375135583,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -3.0412653415387503,
          "pitch": 0.1563251092752722,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": 0.5366699475908021,
          "pitch": 0.618711391318346,
          "rotation": 3.141592653589793,
          "target": "0-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-open-beach-area",
      "name": "Open Beach Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 3.0721833613534617,
        "pitch": 0.4326344707519265,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.9804914866652688,
          "pitch": 0.24131187400654142,
          "rotation": 3.141592653589793,
          "target": "0-cockpit"
        },
        {
          "yaw": 2.8357106539570722,
          "pitch": 0.04593444341679742,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": -2.8511939794508763,
          "pitch": -0.012686803481386733,
          "rotation": 3.141592653589793,
          "target": "3-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-galley-open-sides",
      "name": "Galley Open sides",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.1412079735048124,
        "pitch": 0.3415023944233617,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.05114984926842503,
          "pitch": 0.8611255540072449,
          "rotation": 3.141592653589793,
          "target": "1-galley"
        },
        {
          "yaw": -0.2235598024033454,
          "pitch": 0.3058992548472048,
          "rotation": 3.141592653589793,
          "target": "0-cockpit"
        },
        {
          "yaw": 0.30760826463509083,
          "pitch": 0.2579642783287657,
          "rotation": 3.141592653589793,
          "target": "4-open-beach-area"
        },
        {
          "yaw": -1.518244889776808,
          "pitch": 0.10224246816167337,
          "rotation": 3.141592653589793,
          "target": "3-side"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
