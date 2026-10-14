module.exports = {
  extends: '@cenk1cenk2/semantic-release-config',
  // the package was released from a workspace before, whose tags carry its name
  tagFormat: '@cenk1cenk2/oclif-common@${version}',
  plugins: [['@cenk1cenk2/semantic-release-config/presets/npm', { client: 'pnpm', publish: 'staged' }]]
}
