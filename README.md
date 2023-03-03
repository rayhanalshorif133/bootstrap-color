<p align="center">
  <a href="https://getbootstrap.com/">
    <img
      src="./assets/logo/bootstrap+color.png"
      alt="Bootstrap logo"
      width="auto"
      height="165"
    />
  </a>
</p>

<h3 align="center">Bootstrap + Color 🌈</h3>

<p align="center">
  Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development developed by TWITTER.
  <br />
  <a href="https://getbootstrap.com/docs/5.2/"
    ><strong>Explore Bootstrap docs »</strong></a
  >
  <br />
  <br />
  Color is a free and open-source CSS which is extends Bootstrap colors.
</p>

## Table of contents

- [Table of contents](#table-of-contents)
- [Quick-Start](#quick-start)
- [What's included](#whats-included)
- [Based Colors](#based-colors)
- [Light Colors](#light-colors)
- [Dark Colors](#dark-colors)
- [Bootstrap 5 Default Colors](#bootstrap-5-default-colors)
- [Extended Colors](#extended-colors)
- [Documentation](#documentation)

## Quick-Start

- Manually
  Download the `bootstrap.color.min.css` file here. It includes all dependencies. You must have include bootstrap at first.
- CDN
  - Step 1: Link Bootstrap CDN in your head tag
  ```html
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  ```
  - Step 2: Link this CDN (bootstrap.color.min.css)
  ```html
  <link
    href="https://cdn.jsdelivr.net/gh/rayhan133/bootstrap-color/dist/css@1.0.0/bootstrap.color.min.css"
    rel="stylesheet"
  />
  ```
  - Include Bootstrap’s CSS and JS. Place the <link> tag in the <head> for our CSS, and the <script> tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing </body>.
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/gh/rayhan133/bootstrap-color/dist/css@1.0.0/bootstrap.color.min.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <h1>Hello, world!</h1>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script>
    </body>
  </html>
  ```

## What's included

We are providing many other classes as color property.

## Based Colors

- text-"color-name" :star: Which is provided `Text Color` Example: `text-primary`

  - <img src="./assets/class/normal/text.png" alt="Bootstrap logo" width="250" height="75"/>

```html
<span class="text-primary"> text-primary </span>
```

- bg-"color-name" :star: Which is provided `Background Color` Example: bg-primary

  - <img src="./assets/class/normal/bg.png" alt="Bootstrap logo" width="250" height="75"/>

```html
<span class="bg-primary"> bg-primary </span>
```

- bd-"color-name" :star: Which is provided `Border Color` Example: bd-primary

  - <img src="./assets/class/normal/bd.png" alt="Bootstrap logo" width="250" height="75"/>

```html
<span class="bd-primary"> bd-primary </span>
```

- btn-"color-name" :star: Which is provided `Button Color` Example: btn-primary

  - <img src="./assets/class/normal/btn.png" alt="Border Logo" width="250" height="75"/>

```html
<span class="btn-primary"> btn-primary </span>
```

- btn-outline-"color-name" :star: Which is provided `Button Outline Color with Hover Effect` Example: btn-outline-primary

  - <img src="./assets/class/normal/btn-outline.png" alt="Button outline" width="250" height="75"/> <img src="./assets/class/normal/btn-outline-hover.png" alt="Button outline hover" width="250" height="75"/>

```html
<span class="btn-outline-primary"> btn-outline-primary </span>
```

## Light Colors

- text-"color-light-name" :star: Which is provided `Text's Light Color` Example: `text-light-primary`

  - <img src="./assets/class/light/text-light.png" alt="Bootstrap logo" width="250" height="75"/>

```html
<span class="text-light-primary"> text-light-primary </span>
```

- bg-"color-light-name" :star: Which is provided `Text's Light Background Color` Example: bg-light-primary

  - <img src="./assets/class/light/bg-light.png" alt="Bootstrap light" width="250" height="75"/>

```html
<span class="bg-light-primary"> bg-light-primary </span>
```

- bd-"color-name" :star: Which is provided `Border Color` Example: bd-primary

  - <img src="./assets/class/light/bd-light.png" alt="Bootstrap light" width="250" height="75"/>

```html
<span class="bd-light-primary"> bd-light-primary </span>
```

- btn-light-"color-name" :star: Which is provided `Button Color` Example: btn-light-primary

  - <img src="./assets/class/light/btn-light.png" alt="Button light" width="250" height="75"/>

```html
<span class="btn-light-primary"> btn-light-primary </span>
```

- btn-outline-light-"color-name" :star: Which is provided `Button Outline light Color with Hover Effect` Example: btn-outline-light-primary

  - <img src="./assets/class/light/btn-outline-light.png" alt="Button outline" width="250" height="75"/> <img src="./assets/class/light/btn-outline-light-hover.png" alt="Button outline hover" width="250" height="75"/>

```html
<span class="btn-outline-light-primary"> btn-outline-light-primary </span>
```

## Dark Colors

- text-dark"color-name" :star: Which is provided `Text's Dark Color` Example: `text-dark-primary`

  - <img src="./assets/class/dark/text-dark.png" alt="Bootstrap dark primary" width="250" height="75"/>

```html
<span class="text-dark-primary"> text-dark-primary </span>
```

- bg-dark-"color-name" :star: Which is provided `Background Dark Color` Example: bg-dark-primary

  - <img src="./assets/class/dark/bg-dark.png" alt="Bootstrap logo" width="250" height="75"/>

```html
<span class="bg-dark-primary"> bg-dark-primary </span>
```

- bd-dark-"color-name" :star: Which is provided `Border Dark Color` Example: bd-dark-primary

  - <img src="./assets/class/dark/bd-dark.png" alt="Bootstrap bd dark" width="250" height="75"/>

```html
<span class="bd-dark-primary"> bd-dark-primary </span>
```

- btn-dark-"color-name" :star: Which is provided `Button Dark Color` Example: btn-dark-primary

  - <img src="./assets/class/dark/btn-dark.png" alt="Border dark Btn" width="250" height="75"/>

```html
<span class="btn-dark-primary"> btn-dark-primary </span>
```

- btn-outline-dark-"color-name" :star: Which is provided `Button Outline Dark Color with Hover Effect` Example: btn-outline-dark-primary

  - <img src="./assets/class/dark/btn-outline-dark.png" alt="Button outline dark" width="250" height="75"/> <img src="./assets/class/dark/btn-outline-dark-hover.png" alt="Button outline hover" width="250" height="75"/>

```html
<span class="btn-outline-dark-primary"> btn-outline-dark-primary </span>
```

## Bootstrap 5 Default Colors

- ![#0d6efd](https://via.placeholder.com/15/0d6efd/0d6efd.png) `primary` - ![#868e96](https://via.placeholder.com/15/868e96/868e96.png) `secondary` - ![#5cb85c](https://via.placeholder.com/15/5cb85c/5cb85c.png) `success` - ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) `white` - ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/f8f9fa.png) `light` - ![#b7bfc7](https://via.placeholder.com/15/b7bfc7/b7bfc7.png) `muted` - ![#343a40](https://via.placeholder.com/15/343a40/343a40.png) `dark` - ![#007bff](https://via.placeholder.com/15/007bff/007bff.png) `info` - ![#31b0d5](https://via.placeholder.com/15/31b0d5/31b0d5.png) `link` - ![#f0ad4e](https://via.placeholder.com/15/f0ad4e/f0ad4e.png) `warning` - ![#d9534f](https://via.placeholder.com/15/d9534f/d9534f.png) `danger`

## Extended Colors

- ![#e83e8c](https://via.placeholder.com/15/e83e8c/e83e8c.png) `pink` - ![#b200ec](https://via.placeholder.com/15/b200ec/b200ec.png) `violet` - ![#008000](https://via.placeholder.com/15/008000/008000.png) `green` - ![#fb6600](https://via.placeholder.com/15/fb6600/fb6600.png) `orange` - ![#ff0000](https://via.placeholder.com/15/ff0000/ff0000.png) `red` - ![#fdfd34](https://via.placeholder.com/15/fdfd34/fdfd34.png) `yellow` - ![#0019f9](https://via.placeholder.com/15/0019f9/0019f9.png) `blue` - ![#8C1F1F](https://via.placeholder.com/15/8C1F1F/8C1F1F.png) `brown` - ![#E0115F](https://via.placeholder.com/15/E0115F/E0115F.png) `ruby` - ![#C44B8A](https://via.placeholder.com/15/C44B8A/C44B8A.png) `mulberry` - ![#787276](https://via.placeholder.com/15/787276/787276.png) `fossil` - ![#0B6623](https://via.placeholder.com/15/0B6623/0B6623.png) `forest` - ![#F9A602](https://via.placeholder.com/15/F9A602/F9A602.png) `gold` - ![#FA8071](https://via.placeholder.com/15/FA8071/FA8071.png) `salmon` - ![#F7DD7E](https://via.placeholder.com/15/F7DD7E/F7DD7E.png) `mellow` - ![#0D4D94](https://via.placeholder.com/15/0D4D94/0D4D94.png) `yale` - ![#4B3925](https://via.placeholder.com/15/4B3925/4B3925.png) `cedar` - ![#F81895](https://via.placeholder.com/15/F81895/F81895.png) `hot` - ![#B43757](https://via.placeholder.com/15/B43757/B43757.png) `hibiscus` - ![#353535](https://via.placeholder.com/15/353535/353535.png) `shadow` - ![#51C878](https://via.placeholder.com/15/51C878/51C878.png) `emerald` - ![#813E0A](https://via.placeholder.com/15/813E0A/813E0A.png) `clay` - ![#8C011E](https://via.placeholder.com/15/8C011E/8C011E.png) `burgundy` - ![#FBE104](https://via.placeholder.com/15/FBE104/FBE104.png) `bumblebee` - ![#1135A7](https://via.placeholder.com/15/1135A7/1135A7.png) `egyptian` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#F74A8A](https://via.placeholder.com/15/F74A8A/F74A8A.png) `french` - ![#8D4585](https://via.placeholder.com/15/8D4585/8D4585.png) `plum` - ![#757A7D](https://via.placeholder.com/15/757A7D/757A7D.png) `steel` - ![#28AC87](https://via.placeholder.com/15/28AC87/28AC87.png) `jungle` - ![#FD6A02](https://via.placeholder.com/15/FD6A02/FD6A02.png) `tiger` - ![#A55B52](https://via.placeholder.com/15/A55B52/A55B52.png) `redwood` - ![#FAE19E](https://via.placeholder.com/15/FAE19E/FAE19E.png) `eggnog` - ![#579ED2](https://via.placeholder.com/15/579ED2/579ED2.png) `carolina` - ![#5C2C06](https://via.placeholder.com/15/5C2C06/5C2C06.png) `bread` - ![#DC3062](https://via.placeholder.com/15/DC3062/DC3062.png) `cerise` - ![#6E2CA8](https://via.placeholder.com/15/6E2CA8/6E2CA8.png) `grape` - ![#88807D](https://via.placeholder.com/15/88807D/88807D.png) `stone` - ![#ABB9A0](https://via.placeholder.com/15/ABB9A0/ABB9A0.png) `laurel` - ![#EA9506](https://via.placeholder.com/15/EA9506/EA9506.png) `honey` - ![#D31F3C](https://via.placeholder.com/15/D31F3C/D31F3C.png) `raspberry` - ![#FBD95E](https://via.placeholder.com/15/FBD95E/FBD95E.png) `royal` - ![#4F97A3](https://via.placeholder.com/15/4F97A3/4F97A3.png) `turkish` - ![#623514](https://via.placeholder.com/15/623514/623514.png) `caramel` - ![#EC5578](https://via.placeholder.com/15/EC5578/EC5578.png) `punch` - ![#9A66CA](https://via.placeholder.com/15/9A66CA/9A66CA.png) `amethyst` - ![#554D4A](https://via.placeholder.com/15/554D4A/554D4A.png) `ash` - ![#4CBB17](https://via.placeholder.com/15/4CBB17/4CBB17.png) `kelly` - ![#8B4000](https://via.placeholder.com/15/8B4000/8B4000.png) `rust` - ![#B80F0A](https://via.placeholder.com/15/B80F0A/B80F0A.png) `crimson` - ![#D3B55B](https://via.placeholder.com/15/D3B55B/D3B55B.png) `trombone` - ![#131D39](https://via.placeholder.com/15/131D39/131D39.png) `denim` - ![#7E481C](https://via.placeholder.com/15/7E481C/7E481C.png) `tawny` - ![#FF67CC](https://via.placeholder.com/15/FF67CC/FF67CC.png) `rose` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `peanut` - ![#775C31](https://via.placeholder.com/15/775C31/775C31.png) `add`

## Documentation

Head to the [`v4-dev` branch](https://github.com/twbs/bootstrap/tree/v4-dev) to
view the readme, documentation, and source code for Bootstrap 4. ## Table of
contents - [Bootstrap 5](#bootstrap-5) - [Table of contents](#table-of-contents)
