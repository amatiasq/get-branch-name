# Get name of the current branch

This will get the name of the branch being pushed to (or being merged from in case of PR)

## Outputs

## `branch`

The name of the branch

## Example usage

```yml
on: [push, pull_request]

jobs:
  get-branch-name:
    runs-on: ubuntu-latest
    steps:
      - name: Get branch
        uses: amatiasq/get-branch-name
        id: branch

      - name: Get the output
        run: echo "BRANCH ${{ steps.branch.outputs.branch }}"
```
