# Delfina Pregnancy Questionnaire

A bilingual (English/Spanish) interactive questionnaire for pregnancy risk assessment.

## Features

- Bilingual support (English and Spanish)
- Automatic language detection based on browser settings
- Risk assessment with color-coded results
- Easy integration into any website

## Demo

You can see a live demo by opening the `index.html` file in this repository.

## Quick Start

To add this questionnaire to your website, simply add:

```html
<!-- Add this where you want the questionnaire to appear -->
<div id="delfina-questionnaire"></div>

<!-- Add these to your head or before closing body tag -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Ofahmy143/pregnancy-questionnaire/questionnaire.min.css"
/>
<script src="https://cdn.jsdelivr.net/gh/Ofahmy143/pregnancy-questionnaire/questionnaire.min.js"></script>
```

## Available Files

- `questionnaire.js` - Main JavaScript class and functionality
- `questionnaire.css` - Styles for the questionnaire
- `questionnaire.min.js` - Minified JavaScript (auto-generated)
- `questionnaire.min.css` - Minified CSS (auto-generated)
- `index.html` - Demo implementation

### 1. CDN (Recommended)

Use the jsDelivr CDN links as shown in the Quick Start section above.

### 2. Self-hosted

You can also download and host the files yourself:

1. Download `questionnaire.css` and `questionnaire.js`
2. Host them on your server
3. Update the paths in the HTML code to point to your hosted files

Open-sourced with ❤️ by Delfina
