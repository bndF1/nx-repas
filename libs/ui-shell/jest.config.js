module.exports = {
  name: 'ui-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
