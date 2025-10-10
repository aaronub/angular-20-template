# WEX Brand Theme

This package provides a complete theme that follows WEX brand guidelines and can be used with PrimeFaces components in Angular and React applications.

## Installation

Before installing the package, you need to create or update an `.npmrc` runtime configuration file in your app root directory (where `node_modules` will be installed). The file should contain the following code with a valid Artifactory token swapped into it:

```
@wexinc:registry=https://usartifactorywexinc.jfrog.io/artifactory/api/npm/wex-npm-prod
//usartifactorywexinc.jfrog.io/artifactory/api/npm/wex-npm-prod/:_authToken=ARTIFACTORY_TOKEN_GOES_HERE
//usartifactorywexinc.jfrog.io/artifactory/api/npm/wex-npm-prod/:always-auth=true
```

Then install the package:

```bash
npm i -f @wexinc/wex-brand-theme
```

## Implementation

### Angular

Add the following configuration to your `app.config.ts` file:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import WEXBrandTheme from '@wexinc/wex-brand-theme';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: WEXBrandTheme,
                options: {
                    darkModeSelector: '.dark-mode'
                }
            }
        })
    ]
};
```

### React

#### Next.js

Create a `prime-ssr-provider.tsx` file with the following content:

```typescript
'use client';
import { PrimeReactProvider, PrimeReactStyleSheet } from '@primereact/core';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';
import WEXBrandTheme from '@wexinc/wex-brand-theme';

const stylesheet = new PrimeReactStyleSheet();

export default function PrimeSSRProvider({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    useServerInsertedHTML(() => {
        const styleElements = stylesheet.getAllElements();

        stylesheet.clear();

        return <>{styleElements}</>;
    });

    const theme = {
        theme: {
            preset: WEXBrandTheme,
            options: {
                darkModeSelector: '.dark-mode'
            }
        }
    };

    return (
        <PrimeReactProvider {...theme} stylesheet={stylesheet}>
            {children}
        </PrimeReactProvider>
    );
}
```

#### Vite

Add the following configuration to your app provider file like `main.tsx` or `App.tsx`:

```typescript
import App from './App';
import { PrimeReactProvider } from '@primereact/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WEXBrandTheme from '@wexinc/wex-brand-theme';

const theme = {
    preset: WEXBrandTheme,
    options: {
        darkModeSelector: '.dark-mode'
    }
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider theme={theme}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## Features

- **Complete Theme**: Includes all WEX brand colors, typography, spacing, and component styles
- **PrimeNG Integration**: Fully compatible with PrimeNG components
- **PrimeReact Integration**: Fully compatible with PrimeReact components
- **Light & Dark Themes**: Built-in support for both light and dark color schemes
- **TypeScript Support**: Full type definitions included
- **Customizable**: Easy to extend and customize for specific use cases

## Theme Structure

The theme includes:

- **Primitive Values**: Base colors, border radius, spacing, etc.
- **Semantic Values**: Component-specific design tokens
- **Color Schemes**: Light and dark theme configurations
- **Component Styles**: Styling for all PrimeNG/PrimeReact components

## Development

### Building the Package

```bash
npm run build
```

### Publishing the Package

This package is published to Artifactory through a GitHub Actions workflow, and here's the process for it:

1. Update the version in `package.json`
2. Create a pull request with your changes
3. Merge the pull request into the main branch
4. The GitHub Actions workflow will automatically build and publish the package to npm

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions, please contact the WEX Design team or create an issue in the repository. 