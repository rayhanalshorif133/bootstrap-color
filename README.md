<!-- <p align="center">
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
- [Others Colors](#others-colors)
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
    href="https://cdn.jsdelivr.net/gh/rayhanalshorif133/bootstrap-color/dist/css@1.0.0/bootstrap.color.min.css"
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
``` -->

## Bootstrap 5 Default Colors

- ![#0d6efd](https://via.placeholder.com/15/0d6efd/0d6efd.png) `primary` - ![#868e96](https://via.placeholder.com/15/868e96/868e96.png) `secondary` - ![#5cb85c](https://via.placeholder.com/15/5cb85c/5cb85c.png) `success` - ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) `white` - ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/f8f9fa.png) `light` - ![#b7bfc7](https://via.placeholder.com/15/b7bfc7/b7bfc7.png) `muted` - ![#343a40](https://via.placeholder.com/15/343a40/343a40.png) `dark` - ![#007bff](https://via.placeholder.com/15/007bff/007bff.png) `info` - ![#31b0d5](https://via.placeholder.com/15/31b0d5/31b0d5.png) `link` - ![#f0ad4e](https://via.placeholder.com/15/f0ad4e/f0ad4e.png) `warning` - ![#d9534f](https://via.placeholder.com/15/d9534f/d9534f.png) `danger`

## Extended Colors

- ![#E0115F](https://via.placeholder.com/15/E0115F/E0115F.png) `ruby` - ![#e83e8c](https://via.placeholder.com/15/e83e8c/e83e8c.png) `pink` - ![#C44B8A](https://via.placeholder.com/15/C44B8A/C44B8A.png) `mulberry` - ![#F81895](https://via.placeholder.com/15/F81895/F81895.png) `hot` - ![#F74A8A](https://via.placeholder.com/15/F74A8A/F74A8A.png) `french` - ![#DC3062](https://via.placeholder.com/15/DC3062/DC3062.png) `cerise` - ![#EC5578](https://via.placeholder.com/15/EC5578/EC5578.png) `punch` - ![#FF67CC](https://via.placeholder.com/15/FF67CC/FF67CC.png) `rose` - ![#FCB9C7](https://via.placeholder.com/15/FCB9C7/FCB9C7.png) `lemonade` - ![#FE008F](https://via.placeholder.com/15/FE008F/FE008F.png) `magenta` - ![#DF6FA1](https://via.placeholder.com/15/DF6FA1/DF6FA1.png) `thulian` - ![#FF00FE](https://via.placeholder.com/15/FF00FE/FF00FE.png) `fuchsla` - ![#FB6080](https://via.placeholder.com/15/FB6080/FB6080.png) `brick` - ![#FF70FE](https://via.placeholder.com/15/FF70FE/FF70FE.png) `ultra` - ![#F19CBB](https://via.placeholder.com/15/F19CBB/F19CBB.png) `amaranth` - ![#FE5BAC](https://via.placeholder.com/15/FE5BAC/FE5BAC.png) `bubble-gum` - ![#FCA3B7](https://via.placeholder.com/15/FCA3B7/FCA3B7.png) `flamingo` - ![#FFA5C9](https://via.placeholder.com/15/FFA5C9/FFA5C9.png) `carnation` - ![#F986C2](https://via.placeholder.com/15/F986C2/F986C2.png) `taffy` - ![#FE6AB4](https://via.placeholder.com/15/FE6AB4/FE6AB4.png) `creamy`  - ![#B200EC](https://via.placeholder.com/15/B200EC/B200EC.png) `violet` - ![#C54B8A](https://via.placeholder.com/15/C54B8A/C54B8A.png) `mulberry` - ![#B43757](https://via.placeholder.com/15/B43757/B43757.png) `hibiscus` - ![#8C4484](https://via.placeholder.com/15/8C4484/8C4484.png) `plum` - ![#6E2CA8](https://via.placeholder.com/15/6E2CA8/6E2CA8.png) `grape` - ![#9965CA](https://via.placeholder.com/15/9965CA/9965CA.png) `amethyst` - ![#311433](https://via.placeholder.com/15/311433/311433.png) `eggplant` - ![#AF67ED](https://via.placeholder.com/15/AF67ED/AF67ED.png) `orchid` - ![#81007F](https://via.placeholder.com/15/81007F/81007F.png) `lollipop` - ![#E4A0F6](https://via.placeholder.com/15/E4A0F6/E4A0F6.png) `lavender` - ![#B4328A](https://via.placeholder.com/15/B4328A/B4328A.png) `fandango` - ![#B083BC](https://via.placeholder.com/15/B083BC/B083BC.png) `african` - ![#DE73FE](https://via.placeholder.com/15/DE73FE/DE73FE.png) `helio` - ![#784B84](https://via.placeholder.com/15/784B84/784B84.png) `mauve` - ![#B47EDE](https://via.placeholder.com/15/B47EDE/B47EDE.png) `floral` - ![#7852A9](https://via.placeholder.com/15/7852A9/7852A9.png) `royal`- ![#6F2963](https://via.placeholder.com/15/6F2963/6F2963.png) `byzantine` - ![#D7C0EF](https://via.placeholder.com/15/D7C0EF/D7C0EF.png) `thistle` - ![#8F00FF](https://via.placeholder.com/15/8F00FF/8F00FF.png) `electric` - ![#818181](https://via.placeholder.com/15/818181/818181.png) `gray` - ![#787274](https://via.placeholder.com/15/787274/787274.png) `fossil` - ![#353535](https://via.placeholder.com/15/353535/353535.png) `shadow`  - ![#757A7D](https://via.placeholder.com/15/757A7D/757A7D.png) `steel`  - ![#88807D](https://via.placeholder.com/15/88807D/88807D.png) `stone`  - ![#544C49](https://via.placeholder.com/15/544C49/544C49.png) `ash`  - ![#C7C6C1](https://via.placeholder.com/15/C7C6C1/C7C6C1.png) `harbor`  - ![#3D414A](https://via.placeholder.com/15/3D414A/3D414A.png) `anchor`  - ![#D6CEC7](https://via.placeholder.com/15/D6CEC7/D6CEC7.png) `abalone` - ![#D8DCDB](https://via.placeholder.com/15/D8DCDB/D8DCDB.png) `pearl` - ![#999EA0](https://via.placeholder.com/15/999EA0/999EA0.png) `pewter` - ![#B9BBB6](https://via.placeholder.com/15/B9BBB6/B9BBB6.png) `rhino` - ![#88807D](https://via.placeholder.com/15/88807D/88807D.png) `mink` - ![#262223](https://via.placeholder.com/15/262223/262223.png) `trout` - ![#808489](https://via.placeholder.com/15/808489/808489.png) `lava` - ![#202020](https://via.placeholder.com/15/202020/202020.png) `charcoal`
<!--  -->



<!--  -->
- 

## Others Colors

- ![#ffffff00](https://via.placeholder.com/15/ffffff00/ffffff00.png) `transparent` 

## Documentation

Head to the [`v4-dev` branch](https://github.com/twbs/bootstrap/tree/v4-dev) to
view the readme, documentation, and source code for Bootstrap 4. ## Table of
contents - [Bootstrap 5](#bootstrap-5) - [Table of contents](#table-of-contents)
