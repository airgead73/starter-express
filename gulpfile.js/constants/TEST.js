const TEST_JS = {
  INPUT: './assets/scripts/main.js',
  SOURCE_FILE: 'main.js',
  SOURCE_PATH: './assets/scripts',
  OUTPUT: 'bundle.test.js',
  DEST: './app/public'
};

const TEST_SCSS = {
  SRC: 'assets/scss/index.scss',
  CONTENT: ['./app/views/**/*.ejs'],
  OUTPUT: 'main.test.css',
  DEST: 'app/public'
};

const TEST_ICONS = {
  SRC: 'assets/icons/index.scss',
  OUTPUT: 'icons.test.css',
  MAP: 'icon.test.css.map',
  DEST: 'app/public'
};

module.exports = {
  TEST_JS,
  TEST_SCSS,
  TEST_ICONS
}

