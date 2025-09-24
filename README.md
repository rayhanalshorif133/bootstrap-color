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

<h2 align="center">
  Documentation ✍️
 </h2>
 <p align="center">
  Color is a free and open-source CSS which is extends Bootstrap colors.
    <br />
  <a href="https://test-218.gitbook.io/bootstrap-color/"
    ><strong>Explore Bootstrap Color docs »</strong></a
  >
</p>
</h2>

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
        href="https://cdn.jsdelivr.net/gh/rayhanalshorif133/bootstrap-color/dist/css@1.0.0/bootstrap.color.min.css"
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

- <img src="./assets/colors/box/0d6efd.png" alt="0d6efd" width="15" height="15"/> `primary` <img src="./assets/colors/box/868e96.png" alt="868e96" width="15" height="15"/> `secondary` <img src="./assets/colors/box/5cb85c.png" alt="5cb85c" width="15" height="15"/> `success` <img src="./assets/colors/box/ffffff.png" alt="ffffff" width="15" height="15"/> `white` <img src="./assets/colors/box/f8f9fa.png" alt="f8f9fa" width="15" height="15"/> `light` <img src="./assets/colors/box/b7bfc7.png" alt="b7bfc7" width="15" height="15"/> `muted` <img src="./assets/colors/box/343a40.png" alt="343a40" width="15" height="15"/> `dark`<img src="./assets/colors/box/007bff.png" alt="007bff" width="15" height="15"/> `info`<img src="./assets/colors/box/31b0d5.png" alt="31b0d5" width="15" height="15"/> `link`<img src="./assets/colors/box/f0ad4e.png" alt="f0ad4e" width="15" height="15"/> `warning`<img src="./assets/colors/box/d9534f.png" alt="d9534f" width="15" height="15"/> `danger`


## Extended Colors

- <img src="./assets/colors/box/E0115F.png" alt="E0115F" width="15" height="15"/> `ruby` - <img src="./assets/colors/box/e83e8c.png" alt="e83e8c" width="15" height="15"/> `pink` - <img src="./assets/colors/box/C9259E.png" alt="C9259E" width="15" height="15"/> `fuchsia-pink` - <img src="./assets/colors/box/C44B8A.png" alt="C44B8A" width="15" height="15"/> `mulberry` - <img src="./assets/colors/box/F81895.png" alt="F81895" width="15" height="15"/> `hot` - <img src="./assets/colors/box/F74A8A.png" alt="F74A8A" width="15" height="15"/> `french` - <img src="./assets/colors/box/DC3062.png" alt="DC3062" width="15" height="15"/> `cerise` - <img src="./assets/colors/box/EC5578.png" alt="EC5578" width="15" height="15"/> `punch` - <img src="./assets/colors/box/FF67CC.png" alt="FF67CC" width="15" height="15"/> `rose` - <img src="./assets/colors/box/FEC8EC.png" alt="FEC8EC" width="15" height="15"/> `pale-rose` - <img src="./assets/colors/box/FCB9C7.png" alt="FCB9C7" width="15" height="15"/> `lemonade` - <img src="./assets/colors/box/FE008F.png" alt="FE008F" width="15" height="15"/> `magenta` - <img src="./assets/colors/box/DF6FA1.png" alt="DF6FA1" width="15" height="15"/> `thulian` - <img src="./assets/colors/box/FF00FE.png" alt="FF00FE" width="15" height="15"/> `fuchsla` - <img src="./assets/colors/box/FB6080.png" alt="FB6080" width="15" height="15"/> `brick` - <img src="./assets/colors/box/FF70FE.png" alt="FF70FE" width="15" height="15"/> `ultra` - <img src="./assets/colors/box/F19CBB.png" alt="F19CBB" width="15" height="15"/> `amaranth` - <img src="./assets/colors/box/FE5BAC.png" alt="FE5BAC" width="15" height="15"/> `bubble-gum` - <img src="./assets/colors/box/FCA3B7.png" alt="FCA3B7" width="15" height="15"/> `flamingo` - <img src="./assets/colors/box/FFA5C9.png" alt="FFA5C9" width="15" height="15"/> `carnation` - <img src="./assets/colors/box/F986C2.png" alt="F986C2" width="15" height="15"/> `taffy` - <img src="./assets/colors/box/FE6AB4.png" alt="FE6AB4" width="15" height="15"/> `creamy` - <img src="./assets/colors/box/B200EC.png" alt="B200EC" width="15" height="15"/> `violet` - <img src="./assets/colors/box/C54B8A.png" alt="C54B8A" width="15" height="15"/> `mulberry` - <img src="./assets/colors/box/B43757.png" alt="B43757" width="15" height="15"/> `hibiscus` - <img src="./assets/colors/box/8C4484.png" alt="8C4484" width="15" height="15"/> `plum` - <img src="./assets/colors/box/6E2CA8.png" alt="6E2CA8" width="15" height="15"/> `grape` - <img src="./assets/colors/box/9965CA.png" alt="9965CA" width="15" height="15"/> `amethyst` - <img src="./assets/colors/box/311433.png" alt="311433" width="15" height="15"/> `eggplant` - <img src="./assets/colors/box/AF67ED.png" alt="AF67ED" width="15" height="15"/> `orchid` - <img src="./assets/colors/box/81007F.png" alt="81007F" width="15" height="15"/> `lollipop` - <img src="./assets/colors/box/E4A0F6.png" alt="E4A0F6" width="15" height="15"/> `lavender` - <img src="./assets/colors/box/B4328A.png" alt="B4328A" width="15" height="15"/> `fandango` - <img src="./assets/colors/box/B083BC.png" alt="B083BC" width="15" height="15"/> `african` - <img src="./assets/colors/box/DE73FE.png" alt="DE73FE" width="15" height="15"/> `helio` - <img src="./assets/colors/box/784B84.png" alt="784B84" width="15" height="15"/> `mauve` - <img src="./assets/colors/box/B47EDE.png" alt="B47EDE" width="15" height="15"/> `floral` - <img src="./assets/colors/box/7852A9.png" alt="7852A9" width="15" height="15"/> `royal` - <img src="./assets/colors/box/6F2963.png" alt="6F2963" width="15" height="15"/> `byzantine` - <img src="./assets/colors/box/D7C0EF.png" alt="D7C0EF" width="15" height="15"/> `thistle` - <img src="./assets/colors/box/8F00FF.png" alt="8F00FF" width="15" height="15"/> `electric` - <img src="./assets/colors/box/818181.png" alt="818181" width="15" height="15"/> `gray` - <img src="./assets/colors/box/787274.png" alt="787274" width="15" height="15"/> `fossil` - <img src="./assets/colors/box/353535.png" alt="353535" width="15" height="15"/> `shadow` - <img src="./assets/colors/box/757A7D.png" alt="757A7D" width="15" height="15"/> `steel` - <img src="./assets/colors/box/88807D.png" alt="88807D" width="15" height="15"/> `stone` - <img src="./assets/colors/box/544C49.png" alt="544C49" width="15" height="15"/> `ash` - <img src="./assets/colors/box/C7C6C1.png" alt="C7C6C1" width="15" height="15"/> `harbor` - <img src="./assets/colors/box/3D414A.png" alt="3D414A" width="15" height="15"/> `anchor` - <img src="./assets/colors/box/D6CEC7.png" alt="D6CEC7" width="15" height="15"/> `abalone` - <img src="./assets/colors/box/D8DCDB.png" alt="D8DCDB" width="15" height="15"/> `pearl` - <img src="./assets/colors/box/999EA0.png" alt="999EA0" width="15" height="15"/> `pewter` - <img src="./assets/colors/box/B9BBB6.png" alt="B9BBB6" width="15" height="15"/> `rhino` - <img src="./assets/colors/box/88807D.png" alt="88807D" width="15" height="15"/> `mink` - <img src="./assets/colors/box/262223.png" alt="262223" width="15" height="15"/> `trout` - <img src="./assets/colors/box/808489.png" alt="808489" width="15" height="15"/> `lava` - <img src="./assets/colors/box/202020.png" alt="202020" width="15" height="15"/> `charcoal` - <img src="./assets/colors/box/48494B.png" alt="48494B" width="15" height="15"/> `iron` - <img src="./assets/colors/box/80827F.png" alt="80827F" width="15" height="15"/> `seal` - <img src="./assets/colors/box/BEB8AC.png" alt="BEB8AC" width="15" height="15"/> `thunder` - <img src="./assets/colors/box/BDBDB8.png" alt="BDBDB8" width="15" height="15"/> `smoke` - <img src="./assets/colors/box/3CB244.png" alt="3CB244" width="15" height="15"/> `green` - <img src="./assets/colors/box/13D443.png" alt="13D443" width="15" height="15"/> `yellow-green` - <img src="./assets/colors/box/0B6623.png" alt="0B6623" width="15" height="15"/> `forest` - <img src="./assets/colors/box/50C777.png" alt="50C777" width="15" height="15"/> `emerald` - <img src="./assets/colors/box/29AB87.png" alt="29AB87" width="15" height="15"/> `jungle` - <img src="./assets/colors/box/AABA9F.png" alt="AABA9F" width="15" height="15"/> `laurel` - <img src="./assets/colors/box/4BBA16.png" alt="4BBA16" width="15" height="15"/> `kelly` - <img src="./assets/colors/box/3E704B.png" alt="3E704B" width="15" height="15"/> `hunter` - <img src="./assets/colors/box/043925.png" alt="043925" width="15" height="15"/> `sacramento` - <img src="./assets/colors/box/C6E945.png" alt="C6E945" width="15" height="15"/> `lime` - <img src="./assets/colors/box/708238.png" alt="708238" width="15" height="15"/> `olive` - <img src="./assets/colors/box/4E7943.png" alt="4E7943" width="15" height="15"/> `fern` - <img src="./assets/colors/box/98FA99.png" alt="98FA99" width="15" height="15"/> `mint` - <img src="./assets/colors/box/9DC084.png" alt="9DC084" width="15" height="15"/> `sage` - <img src="./assets/colors/box/00786E.png" alt="00786E" width="15" height="15"/> `pine` - <img src="./assets/colors/box/4A521F.png" alt="4A521F" width="15" height="15"/> `army` - <img src="./assets/colors/box/308A57.png" alt="308A57" width="15" height="15"/> `sea` - <img src="./assets/colors/box/8A9A5B.png" alt="8A9A5B" width="15" height="15"/> `moss` - <img src="./assets/colors/box/D0F0C1.png" alt="D0F0C1" width="15" height="15"/> `tea` - <img src="./assets/colors/box/8D9677.png" alt="8D9677" width="15" height="15"/> `artichoke` - <img src="./assets/colors/box/00A86B.png" alt="00A86B" width="15" height="15"/> `jade` - <img src="./assets/colors/box/FB6700.png" alt="FB6700" width="15" height="15"/> `orange` - <img src="./assets/colors/box/F8A602.png" alt="F8A602" width="15" height="15"/> `gold` - <img src="./assets/colors/box/813E0A.png" alt="813E0A" width="15" height="15"/> `clay` - <img src="./assets/colors/box/FC6902.png" alt="FC6902" width="15" height="15"/> `tiger` - <img src="./assets/colors/box/EB9605.png" alt="EB9605" width="15" height="15"/> `honey` - <img src="./assets/colors/box/8B4000.png" alt="8B4000" width="15" height="15"/> `rust` - <img src="./assets/colors/box/CC7822.png" alt="CC7822" width="15" height="15"/> `ochre` - <img src="./assets/colors/box/FEBF00.png" alt="FEBF00" width="15" height="15"/> `amber` - <img src="./assets/colors/box/FFA510.png" alt="FFA510" width="15" height="15"/> `fire` - <img src="./assets/colors/box/FF7417.png" alt="FF7417" width="15" height="15"/> `pumpkin` - <img src="./assets/colors/box/F9812A.png" alt="F9812A" width="15" height="15"/> `tangerine` - <img src="./assets/colors/box/883002.png" alt="883002" width="15" height="15"/> `amber-chocolate` - <img src="./assets/colors/box/5D2E0F.png" alt="5D2E0F" width="15" height="15"/> `chocolate` - <img src="./assets/colors/box/DBA521.png" alt="DBA521" width="15" height="15"/> `goldenrod` - <img src="./assets/colors/box/EF820D.png" alt="EF820D" width="15" height="15"/> `apricot` - <img src="./assets/colors/box/573823.png" alt="573823" width="15" height="15"/> `cider` - <img src="./assets/colors/box/783703.png" alt="783703" width="15" height="15"/> `carrot` 






- ![#B2540F](https://via.placeholder.com/15/B2540F/B2540F.png) `bronze` - ![#C39001](https://via.placeholder.com/15/C39001/C39001.png) `dijon` - ![#944000](https://via.placeholder.com/15/944000/944000.png) `burnt` - ![#D40000](https://via.placeholder.com/15/D40000/D40000.png) `red` - ![#FA8071](https://via.placeholder.com/15/FA8071/FA8071.png) `salmon` - ![#8C001C](https://via.placeholder.com/15/8C001C/8C001C.png) `burgundy` - ![#A55B52](https://via.placeholder.com/15/A55B52/A55B52.png) `redwood` - ![#D31F3C](https://via.placeholder.com/15/D31F3C/D31F3C.png) `raspberry` - ![#B80F0A](https://via.placeholder.com/15/B80F0A/B80F0A.png) `crimson` - ![#CE5C5C](https://via.placeholder.com/15/CE5C5C/CE5C5C.png) `indian` - ![#5D1813](https://via.placeholder.com/15/5D1813/5D1813.png) `sangria` - ![#EE293A](https://via.placeholder.com/15/EE293A/EE293A.png) `imperial` - ![#7C0904](https://via.placeholder.com/15/7C0904/7C0904.png) `barn` - ![#800000](https://via.placeholder.com/15/800000/800000.png) `maroon` - ![#FF2801](https://via.placeholder.com/15/FF2801/FF2801.png) `ferrari` - ![#FD2400](https://via.placeholder.com/15/FD2400/FD2400.png) `scarlet` - ![#CA3433](https://via.placeholder.com/15/CA3433/CA3433.png) `persian` - ![#940018](https://via.placeholder.com/15/940018/940018.png) `carmine` - ![#420C08](https://via.placeholder.com/15/420C08/420C08.png) `mahogany` - ![#FF0801](https://via.placeholder.com/15/FF0801/FF0801.png) `apple` - ![#BF0930](https://via.placeholder.com/15/BF0930/BF0930.png) `usa-flg` - ![#B02222](https://via.placeholder.com/15/B02222/B02222.png) `fire-brick` - ![#C31806](https://via.placeholder.com/15/C31806/C31806.png) `chili` - ![#FEF200](https://via.placeholder.com/15/FEF200/FEF200.png) `yellow` - ![#EFFD60](https://via.placeholder.com/15/EFFD60/EFFD60.png) `lemon` - ![#FDF5A4](https://via.placeholder.com/15/FDF5A4/FDF5A4.png) `banana` - ![#E4CD05](https://via.placeholder.com/15/E4CD05/E4CD05.png) `corn` - ![#F7DF7F](https://via.placeholder.com/15/F7DF7F/F7DF7F.png) `mellow` - ![#FAE003](https://via.placeholder.com/15/FAE003/FAE003.png) `bumblebee` - ![#FBD95E](https://via.placeholder.com/15/FBD95E/FBD95E.png) `yellow-royal` - ![#D3B55B](https://via.placeholder.com/15/D3B55B/D3B55B.png) `trombone` - ![#FCD02A](https://via.placeholder.com/15/FCD02A/FCD02A.png) `tuscany` - ![#FEDB57](https://via.placeholder.com/15/FEDB57/FEDB57.png) `mustard` - ![#F8E474](https://via.placeholder.com/15/F8E474/F8E474.png) `laguna` - ![#FEE6B5](https://via.placeholder.com/15/FEE6B5/FEE6B5.png) `peach` - ![#D5B759](https://via.placeholder.com/15/D5B759/D5B759.png) `flaxen` - ![#CEB07E](https://via.placeholder.com/15/CEB07E/CEB07E.png) `ecru` - ![#FFFDD0](https://via.placeholder.com/15/FFFDD0/FFFDD0.png) `cream` - ![#E2B57A](https://via.placeholder.com/15/E2B57A/E2B57A.png) `sepia` - ![#FED200](https://via.placeholder.com/15/FED200/FED200.png) `cyber` - ![#EEDA83](https://via.placeholder.com/15/EEDA83/EEDA83.png) `flax` - ![#FEE12B](https://via.placeholder.com/15/FEE12B/FEE12B.png) `pineapple` - ![#0019F9](https://via.placeholder.com/15/0019F9/0019F9.png) `blue` - ![#0D4D93](https://via.placeholder.com/15/0D4D93/0D4D93.png) `yale` - ![#1135A7](https://via.placeholder.com/15/1135A7/1135A7.png) `egyptian` - ![#58A0D2](https://via.placeholder.com/15/58A0D2/58A0D2.png) `carolina` - ![#4F97A3](https://via.placeholder.com/15/4F97A3/4F97A3.png) `turkish` - ![#131E3A](https://via.placeholder.com/15/131E3A/131E3A.png) `denim` - ![#598BAE](https://via.placeholder.com/15/598BAE/598BAE.png) `air-force` - ![#003152](https://via.placeholder.com/15/003152/003152.png) `prussian` - ![#4D516E](https://via.placeholder.com/15/4D516E/4D516E.png) `independence` - ![#96C7D8](https://via.placeholder.com/15/96C7D8/96C7D8.png) `sky` - ![#4682B4](https://via.placeholder.com/15/4682B4/4682B4.png) `steel-blue` - ![#6594F4](https://via.placeholder.com/15/6594F4/6594F4.png) `cornflower` - ![#7285A5](https://via.placeholder.com/15/7285A5/7285A5.png) `pigeon` - ![#008CCA](https://via.placeholder.com/15/008CCA/008CCA.png) `olympic` - ![#0080FF](https://via.placeholder.com/15/0080FF/0080FF.png) `azure` - ![#1C2A51](https://via.placeholder.com/15/1C2A51/1C2A51.png) `space` - ![#73C2FB](https://via.placeholder.com/15/73C2FB/73C2FB.png) `maya` - ![#0F52BA](https://via.placeholder.com/15/0F52BA/0F52BA.png) `sapphire` - ![#010080](https://via.placeholder.com/15/010080/010080.png) `navy` - ![#89D0EE](https://via.placeholder.com/15/89D0EE/89D0EE.png) `baby` - ![#0019F9](https://via.placeholder.com/15/0019F9/0019F9.png) `blue` - ![#0D4D93](https://via.placeholder.com/15/0D4D93/0D4D93.png) `yale` - ![#1135A7](https://via.placeholder.com/15/1135A7/1135A7.png) `egyptian` - ![#58A0D2](https://via.placeholder.com/15/58A0D2/58A0D2.png) `carolina` - ![#4F97A3](https://via.placeholder.com/15/4F97A3/4F97A3.png) `turkish` - ![#131E3A](https://via.placeholder.com/15/131E3A/131E3A.png) `denim` - ![#598BAE](https://via.placeholder.com/15/598BAE/598BAE.png) `air-force` - ![#003152](https://via.placeholder.com/15/003152/003152.png) `prussian` - ![#4D516E](https://via.placeholder.com/15/4D516E/4D516E.png) `independence` - ![#96C7D8](https://via.placeholder.com/15/96C7D8/96C7D8.png) `sky` - ![#4682B4](https://via.placeholder.com/15/4682B4/4682B4.png) `steel-blue` - ![#6594F4](https://via.placeholder.com/15/6594F4/6594F4.png) `cornflower` - ![#7285A5](https://via.placeholder.com/15/7285A5/7285A5.png) `pigeon` - ![#008CCA](https://via.placeholder.com/15/008CCA/008CCA.png) `olympic` - ![#0080FF](https://via.placeholder.com/15/0080FF/0080FF.png) `azure` - ![#1C2A51](https://via.placeholder.com/15/1C2A51/1C2A51.png) `space` - ![#73C2FB](https://via.placeholder.com/15/73C2FB/73C2FB.png) `maya` - ![#0F52BA](https://via.placeholder.com/15/0F52BA/0F52BA.png) `sapphire` - ![#010080](https://via.placeholder.com/15/010080/010080.png) `navy` - ![#2240D6](https://via.placeholder.com/15/2240D6/2240D6.png) `prussian-blue` - ![#185FDF](https://via.placeholder.com/15/185FDF/185FDF.png) `french-blue` - ![#0181C2](https://via.placeholder.com/15/0181C2/0181C2.png) `turquoise-blue` - ![#89D0EE](https://via.placeholder.com/15/89D0EE/89D0EE.png) `baby` - ![#7B4700](https://via.placeholder.com/15/7B4700/7B4700.png) `brown` - ![#4C3A26](https://via.placeholder.com/15/4C3A26/4C3A26.png) `cedar` - ![#795C32](https://via.placeholder.com/15/795C32/795C32.png) `peanut` - ![#5C2C04](https://via.placeholder.com/15/5C2C04/5C2C04.png) `bread` - ![#663B1D](https://via.placeholder.com/15/663B1D/663B1D.png) `caramel` - ![#7E471C](https://via.placeholder.com/15/7E471C/7E471C.png) `tawny` - ![#362313](https://via.placeholder.com/15/362313/362313.png) `umber` - ![#4B3619](https://via.placeholder.com/15/4B3619/4B3619.png) `coffee` - ![#3B270C](https://via.placeholder.com/15/3B270C/3B270C.png) `mocha` - ![#3A1E04](https://via.placeholder.com/15/3A1E04/3A1E04.png) `brunette` - ![#481F01](https://via.placeholder.com/15/481F01/481F01.png) `syrup` - ![#49270D](https://via.placeholder.com/15/49270D/49270D.png) `pecan` - ![#62290E](https://via.placeholder.com/15/62290E/62290E.png) `cinnamon` - ![#3F2E1C](https://via.placeholder.com/15/3F2E1C/3F2E1C.png) `wood` - ![#4B382A](https://via.placeholder.com/15/4B382A/4B382A.png) `espresso` - ![#7F461B](https://via.placeholder.com/15/7F461B/7F461B.png) `russet` - ![#422610](https://via.placeholder.com/15/422610/422610.png) `walnut` - ![#331D10](https://via.placeholder.com/15/331D10/331D10.png) `hickory` - ![#99784F](https://via.placeholder.com/15/99784F/99784F.png) `tortilla`
- 

## Others Colors

- ![#ffffff00](https://via.placeholder.com/15/ffffff00/ffffff00.png) `transparent` 
