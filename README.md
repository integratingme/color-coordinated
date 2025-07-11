# Color Coordinated

A Nuxt.js project with custom color palette and typography system using Tailwind CSS v4.

## Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev
```

## Custom Colors

The project includes a custom color palette defined in `assets/css/main.css`:

### Farben Corporate
- `corporate-primary` - #615c59 (primary corporate color)
- `corporate-overlay` - #615c5980 (50% opacity for pages)
- `corporate-footer` - #615c59 (footer background)
- `corporate-text` - #ffffff (footer text)

### Farben Private
- `private-light` - #f0eded (primary private/light background)
- `private-overlay` - #f0eded80 (50% opacity for pages)
- `private-medium` - #dedede (footer background)
- `private-dark` - #615c59 (footer text)

### Usage
```html
<div class="bg-corporate-primary text-corporate-text">
  Corporate styled content
</div>

<div class="bg-private-light text-private-dark">
  Private styled content
</div>
```

## Custom Fonts

The project includes two custom font families:

### Cera Pro
Available weights:
- Light (300) - `font-light`
- Regular (400) - `font-normal`
- Medium (500) - `font-medium`

### Denver Serial
Available weights:
- Regular (400) - `font-normal`
- Medium (500) - `font-medium`
- Bold (700) - `font-bold`

### Font Setup

1. **Add font files** to `assets/fonts/` directory:
   ```
   assets/fonts/
   ├── Cera-Pro-Light.otf
   ├── Cera-Pro-Medium.otf
   ├── Cera-Pro-Regular.otf
   ├── denver_serial-bold.ttf
   ├── denver_serial-regular.ttf
   └── denver_serial-medium.ttf
   ```

2. **Font files are already configured** in `assets/css/main.css` with proper @font-face declarations.

### Font Usage

Use the custom fonts with Tailwind CSS classes:

```html
<!-- Cera Pro font family -->
<h1 class="font-cera font-light">Light Cera Pro text</h1>
<p class="font-cera font-normal">Regular Cera Pro text</p>
<span class="font-cera font-medium">Medium Cera Pro text</span>

<!-- Denver Serial font family -->
<h1 class="font-denver font-normal">Regular Denver Serial text</h1>
<h2 class="font-denver font-medium">Medium Denver Serial text</h2>
<h3 class="font-denver font-bold">Bold Denver Serial text</h3>

<!-- Combine fonts with colors -->
<div class="font-cera font-light text-corporate-primary bg-private-light">
  Styled content with custom font and colors
</div>
```

### Available Font Classes

| Class | Font Family | Weight |
|-------|-------------|---------|
| `font-cera font-light` | Cera Pro | 300 |
| `font-cera font-normal` | Cera Pro | 400 |
| `font-cera font-medium` | Cera Pro | 500 |
| `font-denver font-normal` | Denver Serial | 400 |
| `font-denver font-medium` | Denver Serial | 500 |
| `font-denver font-bold` | Denver Serial | 700 |

## Development

Visit `localhost:3000` to see the color and typography showcase page that demonstrates all available colors and fonts.

## Tech Stack

- Nuxt.js 3.17.6
- Tailwind CSS v4
- Node.js 20.19.3
