# Ludus Free Premium E-commerce Template

*I want to thank all of you who give stars and fork the repo. I love you all and I have no words in my heart.*

[Live Preview](https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/index.html)

![snap1](/ludus/doc-img/01_preview.png)

**40+ Pages still not pressed the star & follow button.**


## Contents

- [Getting Started](#getting-started)
- [Downloaded Folders](#downloaded-folders)
- [HTML Folder](#html-folder)
- [Change Features](#change-features)
- [Sources and Credits](#sources-and-credits)
- [Changelog Updates History](#changelog-updates-history)
- [Version](#version)




## Getting Started

Ludus is complete multipurpose polish e-commerce template built with best practices. It will be a perfect solution for your current or future shop, customizable into any store contains responsiveness & great UI. Well tested on compatible browsers.

The template contains **40+ HTML files**, **3 Homepages**, **3 Header Styles**, **12 Dashboard Pages**,
**3 Product Pages**, **7 Shop Pages**,**5 Blog Pages**, **Box mode** and generated **10 Color variations** but could
create unlimited colors.

### Template Features

- Clean CSS structure **(Most of the styles have specificity level 1)**.
- Clean markup **(Markup correctly formatted with comments for setup things)**.
- Fully responsive **(For your desktop and mobile users)**.
- Cross Browser compatibility **(Work on most of the famous browsers)**.
- Fresh Design **(Modern approaches used by many web apps)**.
- User convenient **(Easy to use for any professional and non-professional)**.
- W3C Validated **(All files are passed from W3C validation service)**.
- Well Documented **(Files are commented for users to understand)**.

### Extra Features

- Intrinsic placeholder loading **(Initially set image container height)**.
- Vertical Mega Menu.
- 10 Color schemes generated.
- Box version included.
- Sass compatible.





## Downloaded Folders

When you unpack downloaded archive you'll get folder containing 1 folder.

Here they are, sorted alphabetically:

- **HTML** - HTML version of template




## HTML Version

![snap1](/ludus/doc-img/img-1.jpg)

Inside the **css** folder, we have all the stylesheets and vendor dependencies which our layout needs. You can use the color scheme according to your likeness.

- css/app.css **(Orange-Red color scheme)**
- css/app.color2.css **(Carmine-Red color scheme)**
- css/app.color3.css **(Blue (RYB) color scheme)**
- css/app.color4.css **(Dark-Spring-Green color scheme)**
- css/app.color5.css **(Electric-Purple color scheme)**
- css/app.color6.css **(Old-Burgundy color scheme)**
- css/app.color7.css **(Blue-Sapphire color scheme)**
- css/app.color8.css **(Yale-Blue color scheme)**
- css/app.color9.css **(Eerie-Black color scheme)**
- css/app.color10.css **(Candy-Apple-Red color scheme)**

Inside the **scss** folder, we have **6** folders and these folders have scss files.

![snap1](/ludus/doc-img/img-2.jpg)


**src/scss/abstracts**

The **abstracts** folder gathers all Sass tools and helpers used across the project. Every global variable, function, and mixin should be put in here. The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers. Inside this folder it has another folder named **mixins-module**, the file on this folder has a mixin which will generate space utility classes.

**src/scss/utility.scss**

This file is invoking a mixin from **mixins-module** which will generate space utility classes, these utility classes are also called **low-level utility classes** that make it easy to build complex user interfaces.

**src/scss/base**

The **base** folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, defining some standard styles for commonly used HTML elements.

**src/scss/components**

**Components** are reusable styles on the layout. It contains all kind of specific modules like a button, a select-box and anything along those lines. There are usually a lot of folders since the whole site/application should be mostly composed of tiny modules. `_all.scss` is just importing file which contains all code base of the folder. In Bottom, you will see all components file and their usage on different places of the layout.

**src/scss/components/breadcrumb/_breadcrumb.scss**

![snap1](/ludus/doc-img/components/1.jpg)

**src/scss/components/button/_button.scss**

![snap1](/ludus/doc-img/components/2.jpg)

**src/scss/components/checkbox-radio/_checkbox-radio.scss**

![snap1](/ludus/doc-img/components/3.jpg)

**src/scss/components/countdown/_countdown.scss**

![snap1](/ludus/doc-img/components/4.jpg)

**src/scss/components/input-counter/_input-counter.scss**

![snap1](/ludus/doc-img/components/5.jpg)

**src/scss/components/input-text/_input-text.scss**

![snap1](/ludus/doc-img/components/6.jpg)

**src/scss/components/modal/_modal.scss**

![snap1](/ludus/doc-img/components/7.jpg)

**src/scss/components/preload-img-aspect-ratio/_preload-img-aspect-ratio.scss**

![snap1](/ludus/doc-img/components/8.jpg)

### What does it mean preload-img-aspect-ratio component?

It's a **component** that associate with some **CSS classes** and these classes help to set default placeholder on **4:3 (SQUARE)** or **16:9 (WIDE)** images.

```html
<!-- Markup:1 For 4:3 (Square) Images -->
<a class="aspect aspect--bg-grey aspect--square u-d-block">
    <img src="image.jpg" class="aspect__img" alt="">
</a>

<!-- Markup:2 For 16:9 (Wide) Images -->
<div class="aspect aspect--bg-grey aspect--1286-890">
   <img src="image.jpg" class="aspect__img" alt="">
</div>
```

```css
.aspect {
  position: relative; }

.aspect--bg-grey {
  background-color: #f5f5f5; }

.aspect--bg-grey-fb {
  background-color: #fbfbfb; }

.aspect--square {
  padding-bottom: 100%; }

/*
  * Add this class to image child element.
 */
.aspect__img {
  position: absolute;
  width: 100%;
  height: 100%; }
```

**Some Points to use Aspect Ratio Component classes**

- Make sure the element on which it adds, it would be a block or inline-block element, if it is not then you could add utility class `'u-d-block'`, `'u-d-inline-block'` or you could directly target that element with CSS to make **inline** or **block**.

- By default `'.aspect--square'` or `'.aspect--16:9: resolution'` class takes height according to the **height of the child image element**.

- But if the **parent element** is a **flex element** then aspect ratio technique doesn't work because `'.aspect--square'` or `'.aspect--16:9: resolution'` contains `padding top/bottom` property with a **percentage** value.

- There are also some cases you do not want to have `'.aspect--square'` or `'.aspect--16:9: resolution'` class to take width & height that match with **child image element**. Then you could append **CSS class** or directly target that **parent element** with **CSS** and set your **custom width & height**.

- If the image has **aspect ratio square, i.e. 4:3** then you would add class `'.aspect--square'` on the element. This class has a `padding-bottom:100%` property. **100%** means to take the **entire height of the image**.

- If the image doesn't have **aspect ratio square** then to make a **custom class** like `'.aspect--imageWidth-imageHeight'` and use ready-made **sass function()** `nonsquare(imageWidth,imageHeight)` that returns `padding-bottom` property with the **value calculated according to image resolution**.

- You could also change the `background-color` of placeholder according to your own choice. By default, only **2 classes** are generated.

**src/scss/components/product/_product.scss**

![snap1](/ludus/doc-img/components/9.jpg)

**src/scss/components/select-box/_select-box.scss**

![snap1](/ludus/doc-img/components/10.jpg)

**src/scss/components/textarea/_textarea.scss**

![snap1](/ludus/doc-img/components/11.jpg)

**src/scss/layout**

The **layout** folder contains everything which takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer), the grid system or even CSS styles for all the forms.

**src/scss/pages**

Pages folder contains styles **per page**.

**src/scss/vendors-extensions**

It just overrides vendor dependencies and every vendor dependency file is separately created.

**src/scss/app.scss**

This is the main file that is importing all **other scss files** and compiles into the `app.css` file.

Inside the **js** folder, we have all the javascript and vendor dependencies which our layout needs.

![snap1](/ludus/doc-img/img-3.jpg)

**src/js/app.js**

This is the main file which contains all functionality and plugins invocation of our layout.

**src/js/jquery.shopnav.js**

This plugin contains functionality for navigation. Navigation includes **DROP-DOWNS** and **VERTICAL MEGA-MENU**.

![snap1](/ludus/doc-img/img-4.jpg)

**src/js/map-init.js**

This file contains google maps functionality.

**src/js/vendor.js**

This file contains all vendor libraries source code.




## Change Features

**1. Google Fonts**

The template is using **sans-serif** font **Open Sans** from [Google Fonts](https://fonts.google.com/). You could change according to your choice. Erase that line from `html` files, and put new one here.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">
```

After that also specify rule in **CSS**.

```css
font-family: "Open Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
```

**2. Disable Preloader from pages**

The template is using **preloader** until **body** configuration class `config` is not removed. **Preloader** will be hidden when the `config` class is removed. But it is not necessary to show **preloader** during page load. If you remove **preloader** then it doesn't affect the look & feel of the page. So you could disable **preloader**. All HTML files have this markup underneath **body** element.

```html
<div class="preloader is-active">
   <div class="preloader__wrap">
      <img class="preloader__img" src="images/preloader.png" alt="">
   </div>
</div>
```

Remove this markup from all **html** files.

After that in the `app.js` file, there is a method named `RESHOP.appConfiguration()` inside that method comment the line.

```javascript
RESHOP.appConfiguration = function () {
  $('body').removeAttr('class');
  //  $('.preloader').removeClass('is-active');
};
```

**3. Disable Modal**

Default when you visit the **Homepage** a newsletter modal will pop up. You can disable the newsletter modal by editing the file `app.js`. This file is invoking a method named `showNewsletterModal()` inside `window` `load` event, comment that line modal will not show.

```javascript
$(window).on('load', function () {
  // RESHOP.showNewsletterModal();
});
```

**4. Slider Options**

The template contains **8 methods** which are associated with **8 sliders**.

```javascript
/*
 * Hero Slider / Primary Slider
 * Index, Index-2, Index-3
 */
RESHOP.primarySlider();

/*
 * Product Slider
 */
RESHOP.productSlider();

/*
 * Tab Slider
 * Index-2 (Only)
 */
RESHOP.tabSlider();

/*
 * Brand Slider
 */
RESHOP.brandSlider();

/*
 * Testimonial Slider
 */
RESHOP.testimonialSlider();

/*
 * Blog Post Slider
 */
RESHOP.blogPostGallery();

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 * Remember this method doesn't have
 * any relation with (Modal Product Detail Slider)
 */
RESHOP.productDetailInit();

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 */
RESHOP.modalProductDetailInit();
```

Bottom code is showing **methods body** where you could change the slider options.

```javascript
/*
 * Hero Slider / Primary Slider
 * Index, Index-2, Index-3
 */
RESHOP.primarySlider = function () {
  $primarySlider.owlCarousel({});
};

/*
 * Product Slider
 */
RESHOP.productSlider = function () {
  thisInstance.owlCarousel({});
};

/*
 * Tab Slider
 * Index-2 (Only)
 */
RESHOP.tabSlider = function () {
  thisInstance.owlCarousel({});
};

/*
 * Brand Slider
 */
RESHOP.brandSlider = function () {
  .owlCarousel({});
};

/*
 * Testimonial Slider
 */
RESHOP.testimonialSlider = function () {
  .owlCarousel({});
};

/*
 * Blog Post Slider
 */
RESHOP.blogPostGallery = function () {
  $(this).owlCarousel({});
};

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 * Remember this method doesn't have any
 * relation with (Modal Product Detail Slider)
 */
RESHOP.productDetailInit = function () {
  $productDetailElement.slick({});
  $productDetailElementThumbnail.slick({});
};

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 */
RESHOP.modalProductDetailInit = function () {
  $modalProductDetailElement.slick({});
  $modalProductDetailElementThumbnail.slick({});
};
```

**5. Change color scheme**

All **.html** pages are included with default color scheme i.e. `app.css`.

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <meta charset="UTF-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="images/favicon.png" rel="shortcut icon">
    <title>Ludus - Electronics, Apparel, Computers, Books, DVDs & more</title>

    <!--====== Google Font ======-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">

    <!--====== Vendor Css ======-->
    <link rel="stylesheet" href="css/vendor.css">

    <!--====== Utility-Spacing ======-->
    <link rel="stylesheet" href="css/utility.css">

    <!--====== App Default color scheme ======-->
    <link rel="stylesheet" href="css/app.css">
</head>
```

You can change the stylesheet according to your **color scheme**, just erase the old `<link>` tag with the new one.

```html
<link rel="stylesheet" href="css/app.color3.css">
```

**6. Change Template from Wide to Box**

You can see all default pages are **wide**. Change page from **wide** into a **box**, by adding this **CSS** class `boxed` on **html** element.

```html
<!DOCTYPE html>
<html class="no-js boxed" lang="en">
```

## Sources and Credits

- [BEM - Block Element Modifier](https://en.bem.info/methodology/quick-start/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Bootstrap 4 with components Grid, Nav, Modal, Tooltip & Transitions](https://getbootstrap.com/)
- [Font Awesome 5](https://fontawesome.com/)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Modernizr](https://modernizr.com/)
- [Popper.js](https://popper.js.org/)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
- [Slick Carousel](https://kenwheeler.github.io/slick/)
- [jQuery](https://jquery.com/)
- [jQuery ScrollUp](https://github.com/markgoodyear/scrollup)
- [jQuery Elevate Zoom](http://elevateweb.co.uk/image-zoom)
- [jQuery Light Gallery](https://sachinchoolur.github.io/lightGallery/)
- [jQuery Fitvids](http://fitvidsjs.com/)
- [Isotope](https://isotope.metafizzy.co/)
- [Final Countdown](https://hilios.github.io/jQuery.countdown/)




## Changelog Updates History

Following you'll find a list of all Ludus theme Template releases with a log of features added and bug fixes next to each one.




## Version
Version 1.0.0 - Feburary 2019 Initial Template Release
