# Generator

Musa features a CLI for generating your own projects. It's called `musag` (**musa g**enerator).
In order to use it, you need access to the GPT3 API.

In order to have access to GPT3 and get your API key, you can register an account on the OpenAI website.

> ⚠️ To use the API, you need to abide by OpenAI’s Content Policy.
>
> ⚠️ You can find the Content Policy here:

## Installation

Installing with npm:

```console
$ npm install -g musag
$ musag --help
```

## Usage

### Initialization

Before generating any content, you must provide musag with your OpenAI API key. This info is stored locally and never leaves your computer.

```console
$ musag setkey
Setting API key...
? Insert your OpenAI API key: ▒
```

### Generating projects

Use `musag word <project_word>` generate a project based on a word.

```console
$ musag word ship
Sail Away

Design a program that can help ship captains navigate through
treacherous waters. The program would need to take into account
the ship's current location, the weather conditions, the tides,
and any other potential hazards.
```

Example with a theme with multiple words:

```console
$ musag word "solar panel"
Solar Power to the People!

Design a program that can calculate the optimal angle for
a solar panel to capture the most sunlight possible.
```

### Advanced commands

To generate projects from a file with a list of words:

```console
$ musag gen words.txt generated.json
```

The `generated.json` above will have additional info about the projects, such as the `content_label` and `stop_reason`. You can filter these using the `purify` command:

```console
$ musag purify generated.json purified.json
```
