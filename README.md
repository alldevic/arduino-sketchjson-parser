# Arduino sketch.json parser

Action for parsing Arduino [sketch.json](https://arduino.github.io/arduino-cli/sketch-specification/#metadata) file.

Features:
- Get FQBN
- Get platform
- Export library list as comma separated string

## Inputs

### `sketchfile`

Path to sketch.json

*Default:* sketch.json

## Outputs

### `platform`

Arduino platform value based on FQBN

### `fqbn`

FQBN from sketch.json

### `included_libs`

List of libs in comma separated string. Use with [this arduino-test-compile](https://github.com/ArminJo/arduino-test-compile#required-libraries) parameter

## Example usage

TODO

## Keep up-to-date with GitHub Dependabot

Since [Dependabot](https://docs.github.com/en/github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot)
has [native GitHub Actions support](https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates#package-ecosystem),
to enable it on your GitHub repo all you need to do is add the `.github/dependabot.yml` file:

```yaml
version: 2
updates:
  # Maintain dependencies for GitHub Actions
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'daily'
```

