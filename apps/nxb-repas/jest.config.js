module.exports = {
  name: 'nxb-repas',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nxb-repas',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
