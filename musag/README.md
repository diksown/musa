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

Use `musag theme <project_theme>` to generate a project based on a theme.

```console
$ musag theme ship
Sail Away

Design a program that can help ship captains navigate through
treacherous waters. The program would need to take into account
the ship's current location, the weather conditions, the tides,
and any other potential hazards.
```

Example with a theme with multiple words:

```console
$ musag theme "hip hop"
Hip Hop Hooray!

Design a program that generates random hip hop lyrics.
```

### Advanced commands

The command `musag gen` is a more complete version of `musag theme`.
It takes a the of themes (one theme per line) as a input and write to a json file.

Usage: `musag gen <theme_list_file> <output_file>`

```console
$ cat themes.txt
ship
hip hop
```

Running `musag gen`:

```console
$ musag gen themes.txt generated.json
0.0% | Passed: 0s | ETA: ∞ | Generating project related to "ship"...
50.0% | Passed: 5s | ETA: 5s | Generating project related to "hip hop"...
[8s] Done! Stored projects on 'generated.json'
$ cat generated.json
{
  "projects": [
    {
      "theme": "ship",
      "title": {
        "text": "Sail Away",
        "content_label": 0,
        "finish_reason": "stop"
      },
      "description": {
        "text": "Design a program (...)", // Shortened for readability
        "content_label": 0,
        "finish_reason": "stop"
      }
    },
    {
      "theme": "hip hop",
      ...
    }
  ]
}
```

The `generated.json` above will have additional info about the projects, such as the `content_label` and `stop_reason`. You can filter these using the `purify` command:

```console
$ musag purify generated.json purified.json
$ cat purified.json
{
  "projects": [
    {
      "title": "Sail Away",
      "description": "Design a program that can be used to (...)"
    },
    {
      "title": "Hip Hop Hooray!",
      "description": "Design a program that generates random hip hop lyrics."
    }
  ]
}
```
