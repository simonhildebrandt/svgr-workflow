module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        [
          'svgr-replace-jsx-tags',
          {
            'path': 'Path',
            'g': 'G',
            'rect': 'Rect',
            'linearGradient': "LinearGradient"
          },
        ],
      ],
    },
  },
}
