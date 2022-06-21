# musag

**musag** is a CLI tool used by [Musa (check the website!)](https://musa.dikson.xyz) to generate programming project ideas using GPT3, a natural language generation model.

It takes a theme given by the user and generate a text description of the project based on it.

## GPT3 API

<details>
<summary><b>To use musag, you need access to GPT3 API and adhere by its Terms & Policies. Click for more information.</b></summary>

### API Key

In order to generate content, musag uses your GPT3 API key. You can get one by registering an account on [OpenAI's Website](https://openai.com/api/).

### Terms & Policies

To use the OpenAI's GPT3 API, you must follow [OpenAI's API Terms & Policies](https://openai.com/api/policies/terms/). In particular, users are prohibited from knowingly generating — or allowing others to knowingly generate some categories of content, such as **hate, harassment, violence, self-harm, sexual, political, deception and malware**.

To mitigate the possible risks of AI-generated content, OpenAI has set a policy on permitted sharing of generated content. You can read it on [OpenAI's API Sharing & Publication Policy](https://openai.com/api/policies/sharing-publication/).

### Pricing

The API is paid, but new accounts have $18 in credits to spend on the first three months.

Generating projects with musag uses credits. The amount of credits is variable and depend on factors like the length of the theme and generated project.

If you need a rule of thumb, projects on [Musa's website]https://musa.dikson.xyz) used about 85 tokens each, so it costs around $0.005 to be generated.

For more information about pricing, see [OpenAI's API Pricing](https://openai.com/api/pricing/).

</details>

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

Generating a theme with multiple words:

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
