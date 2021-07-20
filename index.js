const core = require('@actions/core');
const github = require('@actions/github');

const clean = ref => ref.replace(/^refs\/heads\//, '');

const extractor = {
  push: () => clean(github.context.payload.ref),
  pull_request: () => github.context.payload.pull_request.head.ref,
};

try {
  const fn = extractor[github.context.eventName];

  if (typeof fn !== 'function') {
    throw new Error(`Invalid event name: ${github.context.eventName}`);
  }

  const branch = fn();
  core.setOutput('branch', branch);
  console.log(`Branch detected: "${branch}"`);
} catch (error) {
  core.setFailed(error.message);
}
