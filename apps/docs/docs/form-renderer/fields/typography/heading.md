---
sidebar_label: 'Heading'
sidebar_position: 1
---

# Heading Field

The Heading Field component is a versatile typography element designed to render headings in various styles and sizes. It allows you to specify the heading level and customize its appearance through styles and visibility options.

## Features

- **Variant Selection**: Choose from six heading levels (`h1` to `h6`) to match your design requirements.
- **Customizable Styles**: Apply custom styles to the heading using the provided style classes.
- **Visibility Control**: Easily toggle the visibility of the heading with the `visibility` property.
- **Dynamic Class Names**: Add additional class names for further customization.

## Usage

To use the Heading Field component, define the field in your form configuration with the desired properties.

### Field Definition

```json
{
  "type": "heading",
  "style": {
    "title": "custom-heading-style"
  },
  "fieldProps": {
    "variant": "h1",
    "title": "Your Heading Title"
  },
  "visibility": "visible", // optional
  "className": "additional-class" // optional
}
```

In this example, the Heading Field is configured to render an h1 element with a custom style and title. Adjust the variant and title properties to suit your needs.
