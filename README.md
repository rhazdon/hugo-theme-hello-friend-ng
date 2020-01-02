# Nyx

Sample Image Placeholder

## General information

This theme was forked and inspired by the [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng). If you found this project, please consider looking at their work.

## Features

- User Theming **dark/light modes**
- Code highlighting thanks to [**PrismJS**](https://prismjs.com)
- Great reading experience thanks to [**Inter UI font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- Responsive

### Code highlighting

Supported languages: [Take a look here](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+abap+actionscript+ada+apacheconf+apl+applescript+c+arff+asciidoc+asm6502+csharp+autohotkey+autoit+bash+basic+batch+bison+brainfuck+bro+cpp+aspnet+arduino+cil+coffeescript+clojure+ruby+csp+css-extras+d+dart+diff+markup-templating+docker+eiffel+elixir+elm+lua+erb+erlang+fsharp+flow+fortran+gcode+gedcom+gherkin+git+glsl+gml+go+graphql+groovy+less+handlebars+haskell+haxe+hcl+http+hpkp+hsts+ichigojam+icon+inform7+ini+io+j+java+scala+php+javastacktrace+jolie+n4js+markdown+json+julia+keyman+kotlin+latex+crystal+scheme+liquid+lisp+livescript+lolcode+makefile+django+matlab+mel+mizar+monkey+n1ql+typescript+nand2tetris-hdl+nasm+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+perl+php-extras+sql+powershell+processing+prolog+properties+protobuf+scss+puppet+pure+python+q+qore+r+jsx+renpy+reason+vala+rest+rip+roboconf+textile+rust+plsql+sass+stylus+smalltalk+smarty+soy+sas+twig+swift+yaml+tcl+haml+toml+tt2+pug+tsx+visual-basic+vbnet+velocity+verilog+vhdl+vim+wasm+wiki+xeora+xojo+xquery+tap)

By default the theme is using PrismJS to color your code syntax. All you need to do is to wrap you code like this:

<pre>
``` html
  // your code here
```
</pre>

## How to start

You can download the theme manually by going to [https://github.com/grahamplata/nyx.git](https://github.com/grahamplata/nyx.git) and pasting it to `themes/nyx` in your root directory.

You can also clone it directly to your Hugo folder:

``` bash
$ git clone https://github.com/grahamplata/nyx.git themes/nyx
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

``` bash
$ git submodule add https://github.com/grahamplata/nyx.git themes/nyx
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

The theme doesn't require any advanced configuration. Just copy:

``` toml
baseurl = "/"
languageCode = "en-us"
theme = "nyx"

[params]
  dateform        = "Jan 2, 2006"
  dateformShort   = "Jan 2"
  dateformNum     = "2006-01-02"
  dateformNumTime = "2006-01-02 15:04 -0700"

  # Set disableReadOtherPosts to true in order to hide the links to other posts.
  disableReadOtherPosts = false

  # Metadata mostly used in document's head
  description = "Homepage and blog by Djordje Atlialp"
  keywords = "homepage, blog, science, informatics, development, programming"
  images = [""]

  # Directory name of your blog content (default is `content/posts`)
  contentTypeName = "posts"

  # Default theme "light" or "dark"
  defaultTheme = "dark"

[languages]
  [languages.en]
    title = "Nyx"
    subtitle = "A simple theme for Hugo"
    keywords = ""
    copyright = ""
    readOtherPosts = "Read other posts"

    [languages.en.params.logo]
      logoText = "nyx"
      logoHomeLink = "/"
    # or
    #
    # path = "/img/your-example-logo.svg"
    # alt = "Your example logo alt text"

  # And you can even create generic menu
  [[menu.main]]
    identifier = "blog"
    name       = "Blog"
    url        = "/posts"
```

## How to run your site

From your Hugo root directory run:

```
$ hugo server -t nyx
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## Available Social Icons:

- [codechef](https://simpleicons.org/?q=codechef)
- [codepen](https://simpleicons.org/?q=codepen)
- [docker](https://simpleicons.org/?q=docker)
- [email](https://feathericons.com/?query=mail)
- [facebook](https://simpleicons.org/?q=facebook)
- gitbook
- [github](https://feathericons.com/?query=github)
- [gitlab](https://feathericons.com/?query=gitlab)
- [instagram](https://feathericons.com/?query=instagram)
- [kaggle](https://simpleicons.org/?q=kaggle)
- [keybase](https://simpleicons.org/?q=keybase)
- [mastodon](https://simpleicons.org/?q=mastodon)
- [linkedin](https://feathericons.com/?query=linked)
- [podcasts-apple](https://simpleicons.org/?q=podcast)
- [podcasts-google](https://simpleicons.org/?q=podcast)
- [slack](https://simpleicons.org/?q=slack)
- stackoverflow
- telegram
- twitch
- twitter
- youtube

If you need another one, just open an issue or create a pull request with your wished icon. :)

## How to edit the theme

If you really want to edit the theme, you need to install Node dependencies. To do this, go to the theme directory (from your Hugo root directory):

```
$ cd themes/nyx
```

and then run:

```
$ npm install
```

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/grahampalta/nyx/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/grahamplata/nyx/pulls).

## Third Party

  - [normalize.css](https://github.com/necolas/normalize.css)
  - [Feather Open Source Icons](https://github.com/feathericons/feather)
  - [Simple Icons](https://simpleicons.org/)
  - [Flag Icon](https://github.com/lipis/flag-icon-css)

## Licence

Copyright © 2020 Graham Plata

The theme is released under the MIT License. Check the [original theme license](https://github.com/grahamplata/nyx/blob/master/LICENSE.md) for additional licensing information.
