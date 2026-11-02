const growFade = {
  forwards: {
    old: {
      name: 'shrinkOut',
      duration: '0.25s',
      easing: 'ease-in',
      fillMode: 'forwards',
    },
    new: {
      name: 'growIn',
      duration: '0.35s',
      easing: 'ease-out',
      fillMode: 'forwards',
    },
  },
  backwards: {
    old: {
      name: 'shrinkOut',
      duration: '0.25s',
      easing: 'ease-in',
      fillMode: 'forwards',
    },
    new: {
      name: 'growIn',
      duration: '0.35s',
      easing: 'ease-out',
      fillMode: 'forwards',
    },
  },
};

const crossDissolve = {
  forwards: {
    old: {
      name: 'fadeOutHold',
      duration: '0.35s',
      easing: 'ease-in',
      fillMode: 'forwards',
    },
    new: {
      name: 'fadeInHold',
      duration: '0.5s',
      easing: 'ease-out',
      fillMode: 'forwards',
    },
  },
  backwards: {
    old: {
      name: 'fadeOutHold',
      duration: '0.35s',
      easing: 'ease-in',
      fillMode: 'forwards',
    },
    new: {
      name: 'fadeInHold',
      duration: '0.5s',
      easing: 'ease-out',
      fillMode: 'forwards',
    },
  },
};

export { growFade, crossDissolve };
