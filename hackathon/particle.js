//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
  backgroundMask: {
    enable: true,
    cover: {
      value: {
        r: 0,
        g: 0,
        b: 0
      }
    }
  },
  background: {
    image:
      "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
    size: "100% 100%",
    repeat: "no-repeat"
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#000000",
      animation: {
        enable: true,
        speed: 30
      }
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out"
      },
      size: true,
      speed: {
        min: 1,
        max: 3
      }
    },
    number: {
      value: 500,
      density: {
        enable: true,
        area: 800
      }
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: "max",
        destroy: "min",
        speed: 0.3,
        sync: true
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    shape: {
      type: ["triangle", "circle", "square"]
    },
    size: {
      value: {
        min: 3,
        max: 5
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 30
      },
      enlighten: {
        enable: true,
        value: 30
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  }
});
