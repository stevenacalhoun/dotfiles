// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 11,

    // font family with optional fallbacks
    fontFamily: '"Meslo LG M DZ for Powerline", monospace, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console"',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(150,255,150,0.6)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: 'rgba(0,0,0,1.0)',

    // border color (window, tabs)
    borderColor: '#000',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: false,

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    windowSize: [10000,10000],

    // including the 6 x 6 color cubes and the grayscale map, just provide
    // the full list. if you're going to provide the full color palette,
    // an array here instead of a color map object
  colors: [
    '#000000',
    '#ff0000',
    '#33ff00',
    '#ffff00',
    '#0066ff',
    '#cc00ff',
    '#00ffff',
    '#d0d0d0',
    '#808080',
    '#ff0000',
    '#33ff00',
    '#ffff00',
    '#0066ff',
    '#cc00ff',
    '#00ffff',
    '#ffffff'
  ],

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: 'zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg

    summon: {
      hotkey: 'Control+;',
      hideDock: true,
      hideOnBlur: false
    },
},

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyperterm-summon", "hyperterm-paste", "hyperlinks", "hyperminimal"],

  localPlugins: [],

  'updateChannel': 'canary'
};

