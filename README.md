# Hello Friend NG

![Hello Friend NG](https://dsh.re/d27822)



## General informations

This theme was highly inspired by the [hello-friend](https://github.com/panr/hugo-theme-hello-friend) and [hermit](https://github.com/Track3/hermit).


## Features

- Theming: **dark/light mode**, depending on your preferences (dark is default, but you can change it)
- Great reading experience thanks to [**Inter UI font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- Nice code highlighting thanks to [**PrismJS**](https://prismjs.com)
- An easy way to modify the theme with Hugo tooling
- Fully responsive
- Support for social

#### Built-in shortcodes

- **`image`** (prop required: **`src`**; props optional: **`alt`**, **`position`** (**left** is default | center | right), **`style`**)
  - eg: `{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}`
- **`figure`** (same as `image`, plus few optional props: **`caption`**, **`captionPosition`** (left | **center** is default | right), **`captionStyle`**
  - eg: `{{< figure src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Hello Friend!" captionPosition="right" captionStyle="color: red;" >}}`

#### Code highlighting

By default the theme is using PrismJS to color your code syntax. All you need to do is to wrap you code like this:

<pre>
```html
  // your code here
```
</pre>

**Supported languages**: https://prismjs.com/#languages-list

## How to start

You can download the theme manually by going to [https://github.com/rhazdon/hugo-theme-hello-friend-ng.git](https://github.com/rhazdon/hugo-theme-hello-friend-ng.git) and pasting it to `themes/hello-friend-ng` in your root directory.

You can also clone it directly to your Hugo folder:

```
$ git clone https://github.com/rhazdon/hugo-theme-hello-friend-ng.git themes/hello-friend-ng
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

```
$ git submodule add https://github.com/rhazdon/hugo-theme-hello-friend-ng.git themes/hello-friend-ng
```
### Favicon

Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate these files, put them into your site's static folder:

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- mstile-150x150.png
- safari-pinned-tab.svg
- site.webmanifest

## How to configure

The theme doesn't require any advanced configuration. Just copy this code to ./config.toml

```
baseURL = "https://example.com"
title   = "Hello Friend NG"

DefaultContentLanguage = "en"

theme = "hello-friend-ng"

pygmentsCodefences = true
pygmentsUseClasses = true
rssLimit  = 10  # Maximum number of items in the RSS feed.
copyright = "This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License." # This message is only used by the RSS template.

# googleAnalytics = ""
# disqusShortname = ""

archetypeDir = "archetypes"
contentDir   = "content"
dataDir      = "data"
layoutDir    = "layouts"
publishDir   = "public"

buildDrafts  = false
buildFuture  = false
buildExpored = false
canonifyURLs = true

enableRobotsTXT = true
enableGitInfo   = false
enableEmoji     = true
enableMissingTranslationPlaceholders = false
disableRSS     = false
disableSitemap = false
disable404     = false
disableHugoGeneratorInject = false

[permalinks]
  posts = "/posts/:year/:month/:title/"

[author]
  name = "Jane Doe"

[blackfriday]
  hrefTargetBlank = true

[taxonomies]
  tag      = "tags"
  category = ""

[params]
  dateform        = "Jan 2, 2006"
  dateformShort   = "Jan 2"
  dateformNum     = "2006-01-02"
  dateformNumTime = "2006-01-02 15:04 -0700"

  # Metadata mostly used in document's head
  description = "Nice theme for homepages and blogs"
  keywords = ""
  images = [""]

  homeSubtitle = "Hello Friend NG"

  # Prefix of link to the git commit detail page. GitInfo must be enabled.
  # gitUrl = ""

  # Toggle this option need to rebuild SCSS, requires extended version of Hugo
  justifyContent = false  # Set "text-align: justify" to .content.

  # Directory name of your blog content (default is `content/posts`)
  contentTypeName = "posts"
  # Default theme "light" or "dark"
  defaultTheme = "dark"
  themeColor = "#252627"

  [params.logo]
    logoText     = "$ cd /home/"
    logoHomeLink = "/"

  # Social icons
  [[params.social]]
    name = "twitter"
    url  = "https://twitter.com/"

  [[params.social]]
    name = "email"
    url  = "mailto:nobody@example.com"

  [[params.social]]
    name = "github"
    url  = "https://github.com/"

  [[params.social]]
    name = "linkedin"
    url  = "https://www.linkedin.com/"

[languages]
  [languages.en]
    subtitle  = "Hello Friend NG Theme"
    weight    = 1
    copyright = '<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0</a>'

  [languages.fr]
    subtitle  = "Hello Friend NG Theme"
    weight    = 2
    copyright = '<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0</a>'

[menu]
  [[menu.main]]
    identifier = "about"
    name       = "About"
    url        = "about/"
  [[menu.main]]
    identifier = "posts"
    name       = "Posts"
    url        = "posts/"

```


## How to run your site

From your Hugo root directory run:

```
$ hugo server -t hello-friend-ng
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.


## How to edit the theme

If you really want to edit the theme, you need to install Node dependencies. To do this, go to the theme directory (from your Hugo root directory):

```
$ cd themes/hello-friend-ng
```

and then run:

```
$ npm install
```

## How to add custom CSS or JS code

This theme is configured to bundle any code in assets/JS/main.js or assets/SCSS/main.scss into your website using [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/).
Simply create these folders and files and add your custom code there.


## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/rhazdon/hugo-theme-hello-friend-ng/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/rhazdon/hugo-theme-hello-friend-ng/pulls).


## Third Party

  - [normalize.css](https://github.com/necolas/normalize.css)
  - [Feather Open Source Icons](https://github.com/feathericons/feather)
  - [Flag Icon](https://github.com/lipis/flag-icon-css)
  - [Prism.js](https://prismjs.com/)


## Licence

Copyright © 2019 Djordje Atlialp

The theme is released under the MIT License. Check the [original theme license](https://github.com/rhazdon/hugo-theme-hello-friend-ng/blob/master/LICENSE.md) for additional licensing information.
