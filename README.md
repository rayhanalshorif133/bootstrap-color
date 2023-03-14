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
- [Others Colors](#others-colors)

<h1 align="center">
  Documentation <br>
  ------
</h1>

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

- ![#0d6efd](https://via.placeholder.com/15/0d6efd/0d6efd.png) `primary` - ![#868e96](https://via.placeholder.com/15/868e96/868e96.png) `secondary` - ![#5cb85c](https://via.placeholder.com/15/5cb85c/5cb85c.png) `success` - ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) `white` - ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/f8f9fa.png) `light` - ![#b7bfc7](https://via.placeholder.com/15/b7bfc7/b7bfc7.png) `muted` - ![#343a40](https://via.placeholder.com/15/343a40/343a40.png) `dark` - ![#007bff](https://via.placeholder.com/15/007bff/007bff.png) `info` - ![#31b0d5](https://via.placeholder.com/15/31b0d5/31b0d5.png) `link` - ![#f0ad4e](https://via.placeholder.com/15/f0ad4e/f0ad4e.png) `warning` - ![#d9534f](https://via.placeholder.com/15/d9534f/d9534f.png) `danger`

## Extended Colors

- ![#E0115F](https://via.placeholder.com/15/E0115F/E0115F.png) `ruby` - ![#e83e8c](https://via.placeholder.com/15/e83e8c/e83e8c.png) `pink` - ![#C9259E](https://via.placeholder.com/15/C9259E/C9259E.png) `fuchsia-pink` - ![#C44B8A](https://via.placeholder.com/15/C44B8A/C44B8A.png) `mulberry` - ![#F81895](https://via.placeholder.com/15/F81895/F81895.png) `hot` - ![#F74A8A](https://via.placeholder.com/15/F74A8A/F74A8A.png) `french` - ![#DC3062](https://via.placeholder.com/15/DC3062/DC3062.png) `cerise` - ![#EC5578](https://via.placeholder.com/15/EC5578/EC5578.png) `punch` - ![#FF67CC](https://via.placeholder.com/15/FF67CC/FF67CC.png) `rose` - ![#FEC8EC](https://via.placeholder.com/15/FEC8EC/FEC8EC.png) `pale-rose` - ![#FCB9C7](https://via.placeholder.com/15/FCB9C7/FCB9C7.png) `lemonade` - ![#FE008F](https://via.placeholder.com/15/FE008F/FE008F.png) `magenta` - ![#DF6FA1](https://via.placeholder.com/15/DF6FA1/DF6FA1.png) `thulian` - ![#FF00FE](https://via.placeholder.com/15/FF00FE/FF00FE.png) `fuchsla` - ![#FB6080](https://via.placeholder.com/15/FB6080/FB6080.png) `brick` - ![#FF70FE](https://via.placeholder.com/15/FF70FE/FF70FE.png) `ultra` - ![#F19CBB](https://via.placeholder.com/15/F19CBB/F19CBB.png) `amaranth` - ![#FE5BAC](https://via.placeholder.com/15/FE5BAC/FE5BAC.png) `bubble-gum` - ![#FCA3B7](https://via.placeholder.com/15/FCA3B7/FCA3B7.png) `flamingo` - ![#FFA5C9](https://via.placeholder.com/15/FFA5C9/FFA5C9.png) `carnation` - ![#F986C2](https://via.placeholder.com/15/F986C2/F986C2.png) `taffy` - ![#FE6AB4](https://via.placeholder.com/15/FE6AB4/FE6AB4.png) `creamy`  - ![#B200EC](https://via.placeholder.com/15/B200EC/B200EC.png) `violet` - ![#C54B8A](https://via.placeholder.com/15/C54B8A/C54B8A.png) `mulberry` - ![#B43757](https://via.placeholder.com/15/B43757/B43757.png) `hibiscus` - ![#8C4484](https://via.placeholder.com/15/8C4484/8C4484.png) `plum` - ![#6E2CA8](https://via.placeholder.com/15/6E2CA8/6E2CA8.png) `grape` - ![#9965CA](https://via.placeholder.com/15/9965CA/9965CA.png) `amethyst` - ![#311433](https://via.placeholder.com/15/311433/311433.png) `eggplant` - ![#AF67ED](https://via.placeholder.com/15/AF67ED/AF67ED.png) `orchid` - ![#81007F](https://via.placeholder.com/15/81007F/81007F.png) `lollipop` - ![#E4A0F6](https://via.placeholder.com/15/E4A0F6/E4A0F6.png) `lavender` - ![#B4328A](https://via.placeholder.com/15/B4328A/B4328A.png) `fandango` - ![#B083BC](https://via.placeholder.com/15/B083BC/B083BC.png) `african` - ![#DE73FE](https://via.placeholder.com/15/DE73FE/DE73FE.png) `helio` - ![#784B84](https://via.placeholder.com/15/784B84/784B84.png) `mauve` - ![#B47EDE](https://via.placeholder.com/15/B47EDE/B47EDE.png) `floral` - ![#7852A9](https://via.placeholder.com/15/7852A9/7852A9.png) `royal`- ![#6F2963](https://via.placeholder.com/15/6F2963/6F2963.png) `byzantine` - ![#D7C0EF](https://via.placeholder.com/15/D7C0EF/D7C0EF.png) `thistle` - ![#8F00FF](https://via.placeholder.com/15/8F00FF/8F00FF.png) `electric` - ![#818181](https://via.placeholder.com/15/818181/818181.png) `gray` - ![#787274](https://via.placeholder.com/15/787274/787274.png) `fossil` - ![#353535](https://via.placeholder.com/15/353535/353535.png) `shadow`  - ![#757A7D](https://via.placeholder.com/15/757A7D/757A7D.png) `steel`  - ![#88807D](https://via.placeholder.com/15/88807D/88807D.png) `stone`  - ![#544C49](https://via.placeholder.com/15/544C49/544C49.png) `ash`  - ![#C7C6C1](https://via.placeholder.com/15/C7C6C1/C7C6C1.png) `harbor`  - ![#3D414A](https://via.placeholder.com/15/3D414A/3D414A.png) `anchor`  - ![#D6CEC7](https://via.placeholder.com/15/D6CEC7/D6CEC7.png) `abalone` - ![#D8DCDB](https://via.placeholder.com/15/D8DCDB/D8DCDB.png) `pearl` - ![#999EA0](https://via.placeholder.com/15/999EA0/999EA0.png) `pewter` - ![#B9BBB6](https://via.placeholder.com/15/B9BBB6/B9BBB6.png) `rhino` - ![#88807D](https://via.placeholder.com/15/88807D/88807D.png) `mink` - ![#262223](https://via.placeholder.com/15/262223/262223.png) `trout` - ![#808489](https://via.placeholder.com/15/808489/808489.png) `lava`  - ![#202020](https://via.placeholder.com/15/202020/202020.png) `charcoal` - ![#48494B](https://via.placeholder.com/15/48494B/48494B.png) `iron` - ![#80827F](https://via.placeholder.com/15/80827F/80827F.png) `seal` - ![#BEB8AC](https://via.placeholder.com/15/BEB8AC/BEB8AC.png) `thunder` - ![#BDBDB8](https://via.placeholder.com/15/BDBDB8/BDBDB8.png) `smoke` - ![#3CB244](https://via.placeholder.com/15/3CB244/3CB244.png) `green` - ![#13D443](https://via.placeholder.com/15/13D443/13D443.png) `yellow-green` - ![#0B6623](https://via.placeholder.com/15/0B6623/0B6623.png) `forest` - ![#50C777](https://via.placeholder.com/15/50C777/50C777.png) `emerald` - ![#29AB87](https://via.placeholder.com/15/29AB87/29AB87.png) `jungle` - ![#AABA9F](https://via.placeholder.com/15/AABA9F/AABA9F.png) `laurel` - ![#4BBA16](https://via.placeholder.com/15/4BBA16/4BBA16.png) `kelly` - ![#3E704B](https://via.placeholder.com/15/3E704B/3E704B.png) `hunter` - ![#043925](https://via.placeholder.com/15/043925/043925.png) `sacramento` - ![#C6E945](https://via.placeholder.com/15/C6E945/C6E945.png) `lime` - ![#708238](https://via.placeholder.com/15/708238/708238.png) `olive` - ![#4E7943](https://via.placeholder.com/15/4E7943/4E7943.png) `fern` - ![#98FA99](https://via.placeholder.com/15/98FA99/98FA99.png) `mint` - ![#9DC084](https://via.placeholder.com/15/9DC084/9DC084.png) `sage` - ![#00786E](https://via.placeholder.com/15/00786E/00786E.png) `pine` - ![#4A521F](https://via.placeholder.com/15/4A521F/4A521F.png) `army` - ![#308A57](https://via.placeholder.com/15/308A57/308A57.png) `sea` - ![#8A9A5B](https://via.placeholder.com/15/8A9A5B/8A9A5B.png) `moss` - ![#D0F0C1](https://via.placeholder.com/15/D0F0C1/D0F0C1.png) `tea` - ![#8D9677](https://via.placeholder.com/15/8D9677/8D9677.png) `artichoke` - ![#00A86B](https://via.placeholder.com/15/00A86B/00A86B.png) `jade` - ![#FB6700](https://via.placeholder.com/15/FB6700/FB6700.png) `orange` - ![#F8A602](https://via.placeholder.com/15/F8A602/F8A602.png) `gold` - ![#813E0A](https://via.placeholder.com/15/813E0A/813E0A.png) `clay` - ![#FC6902](https://via.placeholder.com/15/FC6902/FC6902.png) `tiger` - ![#EB9605](https://via.placeholder.com/15/EB9605/EB9605.png) `honey` - ![#8B4000](https://via.placeholder.com/15/8B4000/8B4000.png) `rust` - ![#CC7822](https://via.placeholder.com/15/CC7822/CC7822.png) `ochre` - ![#FEBF00](https://via.placeholder.com/15/FEBF00/FEBF00.png) `amber` - ![#FFA510](https://via.placeholder.com/15/FFA510/FFA510.png) `fire` - ![#FF7417](https://via.placeholder.com/15/FF7417/FF7417.png) `pumpkin` - ![#F9812A](https://via.placeholder.com/15/F9812A/F9812A.png) `tangerine` - ![#883002](https://via.placeholder.com/15/883002/883002.png) `amber-chocolate` - ![#5D2E0F](https://via.placeholder.com/15/5D2E0F/5D2E0F.png) `chocolate` - ![#DBA521](https://via.placeholder.com/15/DBA521/DBA521.png) `goldenrod` - ![#EF820D](https://via.placeholder.com/15/EF820D/EF820D.png) `apricot` - ![#573823](https://via.placeholder.com/15/573823/573823.png) `cider` - ![#783703](https://via.placeholder.com/15/783703/783703.png) `carrot` - ![#B2540F](https://via.placeholder.com/15/B2540F/B2540F.png) `bronze` - ![#C39001](https://via.placeholder.com/15/C39001/C39001.png) `dijon` - ![#944000](https://via.placeholder.com/15/944000/944000.png) `burnt` - ![#D40000](https://via.placeholder.com/15/D40000/D40000.png) `red` - ![#FA8071](https://via.placeholder.com/15/FA8071/FA8071.png) `salmon` - ![#8C001C](https://via.placeholder.com/15/8C001C/8C001C.png) `burgundy` - ![#A55B52](https://via.placeholder.com/15/A55B52/A55B52.png) `redwood` - ![#D31F3C](https://via.placeholder.com/15/D31F3C/D31F3C.png) `raspberry` - ![#B80F0A](https://via.placeholder.com/15/B80F0A/B80F0A.png) `crimson` - ![#CE5C5C](https://via.placeholder.com/15/CE5C5C/CE5C5C.png) `indian` - ![#5D1813](https://via.placeholder.com/15/5D1813/5D1813.png) `sangria` - ![#EE293A](https://via.placeholder.com/15/EE293A/EE293A.png) `imperial` - ![#7C0904](https://via.placeholder.com/15/7C0904/7C0904.png) `barn` - ![#800000](https://via.placeholder.com/15/800000/800000.png) `maroon` - ![#FF2801](https://via.placeholder.com/15/FF2801/FF2801.png) `ferrari` - ![#FD2400](https://via.placeholder.com/15/FD2400/FD2400.png) `scarlet` - ![#CA3433](https://via.placeholder.com/15/CA3433/CA3433.png) `persian` - ![#940018](https://via.placeholder.com/15/940018/940018.png) `carmine` - ![#420C08](https://via.placeholder.com/15/420C08/420C08.png) `mahogany` - ![#FF0801](https://via.placeholder.com/15/FF0801/FF0801.png) `apple` - ![#BF0930](https://via.placeholder.com/15/BF0930/BF0930.png) `usa-flg` - ![#B02222](https://via.placeholder.com/15/B02222/B02222.png) `fire-brick` - ![#C31806](https://via.placeholder.com/15/C31806/C31806.png) `chili` - ![#FEF200](https://via.placeholder.com/15/FEF200/FEF200.png) `yellow` - ![#EFFD60](https://via.placeholder.com/15/EFFD60/EFFD60.png) `lemon` - ![#FDF5A4](https://via.placeholder.com/15/FDF5A4/FDF5A4.png) `banana` - ![#E4CD05](https://via.placeholder.com/15/E4CD05/E4CD05.png) `corn` - ![#F7DF7F](https://via.placeholder.com/15/F7DF7F/F7DF7F.png) `mellow` - ![#FAE003](https://via.placeholder.com/15/FAE003/FAE003.png) `bumblebee` - ![#FBD95E](https://via.placeholder.com/15/FBD95E/FBD95E.png) `yellow-royal` - ![#D3B55B](https://via.placeholder.com/15/D3B55B/D3B55B.png) `trombone` - ![#FCD02A](https://via.placeholder.com/15/FCD02A/FCD02A.png) `tuscany` - ![#FEDB57](https://via.placeholder.com/15/FEDB57/FEDB57.png) `mustard` - ![#F8E474](https://via.placeholder.com/15/F8E474/F8E474.png) `laguna` - ![#FEE6B5](https://via.placeholder.com/15/FEE6B5/FEE6B5.png) `peach` - ![#D5B759](https://via.placeholder.com/15/D5B759/D5B759.png) `flaxen` - ![#CEB07E](https://via.placeholder.com/15/CEB07E/CEB07E.png) `ecru` - ![#FFFDD0](https://via.placeholder.com/15/FFFDD0/FFFDD0.png) `cream` - ![#E2B57A](https://via.placeholder.com/15/E2B57A/E2B57A.png) `sepia` - ![#FED200](https://via.placeholder.com/15/FED200/FED200.png) `cyber` - ![#EEDA83](https://via.placeholder.com/15/EEDA83/EEDA83.png) `flax` - ![#FEE12B](https://via.placeholder.com/15/FEE12B/FEE12B.png) `pineapple` - ![#0019F9](https://via.placeholder.com/15/0019F9/0019F9.png) `blue` - ![#0D4D93](https://via.placeholder.com/15/0D4D93/0D4D93.png) `yale` - ![#1135A7](https://via.placeholder.com/15/1135A7/1135A7.png) `egyptian` - ![#58A0D2](https://via.placeholder.com/15/58A0D2/58A0D2.png) `carolina` - ![#4F97A3](https://via.placeholder.com/15/4F97A3/4F97A3.png) `turkish` - ![#131E3A](https://via.placeholder.com/15/131E3A/131E3A.png) `denim` - ![#598BAE](https://via.placeholder.com/15/598BAE/598BAE.png) `air-force` - ![#003152](https://via.placeholder.com/15/003152/003152.png) `prussian` - ![#4D516E](https://via.placeholder.com/15/4D516E/4D516E.png) `independence` - ![#96C7D8](https://via.placeholder.com/15/96C7D8/96C7D8.png) `sky` - ![#4682B4](https://via.placeholder.com/15/4682B4/4682B4.png) `steel-blue` - ![#6594F4](https://via.placeholder.com/15/6594F4/6594F4.png) `cornflower` - ![#7285A5](https://via.placeholder.com/15/7285A5/7285A5.png) `pigeon` - ![#008CCA](https://via.placeholder.com/15/008CCA/008CCA.png) `olympic` - ![#0080FF](https://via.placeholder.com/15/0080FF/0080FF.png) `azure` - ![#1C2A51](https://via.placeholder.com/15/1C2A51/1C2A51.png) `space` - ![#73C2FB](https://via.placeholder.com/15/73C2FB/73C2FB.png) `maya` - ![#0F52BA](https://via.placeholder.com/15/0F52BA/0F52BA.png) `sapphire` - ![#010080](https://via.placeholder.com/15/010080/010080.png) `navy` - ![#89D0EE](https://via.placeholder.com/15/89D0EE/89D0EE.png) `baby` - ![#0019F9](https://via.placeholder.com/15/0019F9/0019F9.png) `blue` - ![#0D4D93](https://via.placeholder.com/15/0D4D93/0D4D93.png) `yale` - ![#1135A7](https://via.placeholder.com/15/1135A7/1135A7.png) `egyptian` - ![#58A0D2](https://via.placeholder.com/15/58A0D2/58A0D2.png) `carolina` - ![#4F97A3](https://via.placeholder.com/15/4F97A3/4F97A3.png) `turkish` - ![#131E3A](https://via.placeholder.com/15/131E3A/131E3A.png) `denim` - ![#598BAE](https://via.placeholder.com/15/598BAE/598BAE.png) `air-force` - ![#003152](https://via.placeholder.com/15/003152/003152.png) `prussian` - ![#4D516E](https://via.placeholder.com/15/4D516E/4D516E.png) `independence` - ![#96C7D8](https://via.placeholder.com/15/96C7D8/96C7D8.png) `sky` - ![#4682B4](https://via.placeholder.com/15/4682B4/4682B4.png) `steel-blue` - ![#6594F4](https://via.placeholder.com/15/6594F4/6594F4.png) `cornflower` - ![#7285A5](https://via.placeholder.com/15/7285A5/7285A5.png) `pigeon` - ![#008CCA](https://via.placeholder.com/15/008CCA/008CCA.png) `olympic` - ![#0080FF](https://via.placeholder.com/15/0080FF/0080FF.png) `azure` - ![#1C2A51](https://via.placeholder.com/15/1C2A51/1C2A51.png) `space` - ![#73C2FB](https://via.placeholder.com/15/73C2FB/73C2FB.png) `maya` - ![#0F52BA](https://via.placeholder.com/15/0F52BA/0F52BA.png) `sapphire` - ![#010080](https://via.placeholder.com/15/010080/010080.png) `navy` - ![#2240D6](https://via.placeholder.com/15/2240D6/2240D6.png) `prussian-blue` - ![#185FDF](https://via.placeholder.com/15/185FDF/185FDF.png) `french-blue` - ![#0181C2](https://via.placeholder.com/15/0181C2/0181C2.png) `turquoise-blue` - ![#89D0EE](https://via.placeholder.com/15/89D0EE/89D0EE.png) `baby` - ![#7B4700](https://via.placeholder.com/15/7B4700/7B4700.png) `brown` - ![#4C3A26](https://via.placeholder.com/15/4C3A26/4C3A26.png) `cedar` - ![#795C32](https://via.placeholder.com/15/795C32/795C32.png) `peanut` - ![#5C2C04](https://via.placeholder.com/15/5C2C04/5C2C04.png) `bread` - ![#663B1D](https://via.placeholder.com/15/663B1D/663B1D.png) `caramel` - ![#7E471C](https://via.placeholder.com/15/7E471C/7E471C.png) `tawny` - ![#362313](https://via.placeholder.com/15/362313/362313.png) `umber` - ![#4B3619](https://via.placeholder.com/15/4B3619/4B3619.png) `coffee` - ![#3B270C](https://via.placeholder.com/15/3B270C/3B270C.png) `mocha` - ![#3A1E04](https://via.placeholder.com/15/3A1E04/3A1E04.png) `brunette` - ![#481F01](https://via.placeholder.com/15/481F01/481F01.png) `syrup` - ![#49270D](https://via.placeholder.com/15/49270D/49270D.png) `pecan` - ![#62290E](https://via.placeholder.com/15/62290E/62290E.png) `cinnamon` - ![#3F2E1C](https://via.placeholder.com/15/3F2E1C/3F2E1C.png) `wood` - ![#4B382A](https://via.placeholder.com/15/4B382A/4B382A.png) `espresso` - ![#7F461B](https://via.placeholder.com/15/7F461B/7F461B.png) `russet` - ![#422610](https://via.placeholder.com/15/422610/422610.png) `walnut` - ![#331D10](https://via.placeholder.com/15/331D10/331D10.png) `hickory` - ![#99784F](https://via.placeholder.com/15/99784F/99784F.png) `tortilla`
- 

## Others Colors

- ![#ffffff00](https://via.placeholder.com/15/ffffff00/ffffff00.png) `transparent` 
