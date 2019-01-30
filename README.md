# botmou

`botmou` is a pre-configured [Hubot](https://hubot.github.com) installation that can be connected to a Google Sheet and/or a Cleverbot instance.

Fork this repository if you want to make some changes or add new scripts.

Or you could just clone it and deploy it on your server or VPS instance.

## Installation

Clone this repository (or your fork):

```shell
git clone REPO_URL
cd REPO
yarn
```

You're ready.

## Configuration

### Slack integration

You should add the [Hubot app](https://slack.com/apps/A0F7XDU93-hubot) in your Slack configuration. It will generate a token.

Configure the `HUBOT_SLACK_TOKEN` environment variable to bind this bot to your Slack team with the newly generated token.

### Using a Google Sheet

First, we need to create a public Google Sheet.

1. [Create a copy of this Google Sheet model](https://docs.google.com/spreadsheets/d/1zBVFMGqO3jfBwEfVtEdfb9jtIWp7q036EH8G0g84HLE/).
2. Turn on web publishing by going to "File/Publish to web".
3. Copy the Google Sheet link with the big "Share" button on the top right of your sheet.

[(You can find more information about this here.)](https://github.com/theoephraim/node-google-spreadsheet#unauthenticated-access-read-only-access-on-public-docs)

You have a token inside this link:

```shell
// Example:
https://docs.google.com/spreadsheets/d/thisismytoken/

// The token is: thisismytoken
```

Add this token as an environment variable when launching the bot.

For example, if you want to try the model in your shell, type:

```shell
// On macOS or Linux.
env SHEET_TOKEN=1zBVFMGqO3jfBwEfVtEdfb9jtIWp7q036EH8G0g84HLE yarn start
```

**Note: be careful, the sheet is potentially visible by anyone.**

### Cleverbot

You can also use Cleverbot with your bot. You need to get a token on [cleverbot.com](https://www.cleverbot.com/api/my-account/).

Try it with:

```shell
env CLEVERBOT_TOKEN=token yarn start

// In your Hubot shell, type:
botmou: hello my dear bot!

// If it's working, you should get a pseudo-intelligent answer.
```

## Deployment

It's up to you!

But in the end, you should have at least 2 of these 3 variables configured:

- `HUBOT_SLACK_TOKEN` (mandatory)
- `SHEET_TOKEN` (optional)
- `CLEVERBOT_TOKEN` (optional)

Otherwise, this bot will be pretty useless.
