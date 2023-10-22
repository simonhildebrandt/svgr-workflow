export const defaults = {
  heist_svg_Start: { opacity: 1 },
  heist_svg_Outer: { opacity: 0 },
  heist_svg_Room1: { opacity: 0 },
  heist_svg_Room2: { opacity: 0 },
  heist_svg_Room3: { opacity: 0 },
  "heist_svg_Paths 1": { opacity: 0 },
  "heist_svg_Paths 2": { opacity: 0 },
  "heist_svg_Paths 3": { opacity: 0 },
};

const flicker = [{ opacity: [.5, .5, 0, 0, .5, .5, 0, 0, 1]}, {duration: .2, times: [0, .2, .21, .4, .41, .6, .61, .9, .91] }];

export const steps = [
  { [1]: [
    [ 'heist_svg_Start', [{ opacity: 0 }, {duration: 2}] ]
  ], [-1]: [
    [ 'heist_svg_Start', [{ opacity: 1 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Outer', flicker ]
  ], [-1]: [
    [ 'heist_svg_Outer', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Room1', flicker ]
  ], [-1]: [
    [ 'heist_svg_Room1', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Room2', flicker ]
  ], [-1]: [
    [ 'heist_svg_Room2', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Room3', flicker ]
  ], [-1]: [
    [ 'heist_svg_Room3', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Paths 1', [{ opacity: 1 }] ]
  ], [-1]: [
    [ 'heist_svg_Paths 1', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Paths 2', [{ opacity: 1 }] ]
  ], [-1]: [
    [ 'heist_svg_Paths 2', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Paths 3', [{ opacity: 1 }] ]
  ], [-1]: [
    [ 'heist_svg_Paths 3', [{ opacity: 0 }] ]
  ] },
  { [1]: [
    [ 'heist_svg_Safe', [{ rotate: 360 }] ],
  ], [-1]: [
    [ 'heist_svg_Safe', [{ rotate: 0 }] ],
  ] },
];

