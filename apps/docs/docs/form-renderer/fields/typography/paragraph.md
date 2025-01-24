---
sidebar_label: 'Paragraph'
sidebar_position: 2
---

# Paragraph Field

The Paragraph Field component is a typography element designed to render text paragraphs with customizable styles. It allows you to specify the text content and apply various styling options to enhance the visual presentation.

## Features

- **Customizable Styles**: Apply custom styles to the paragraph using the provided style classes.
- **Visibility Control**: Easily toggle the visibility of the paragraph with the `visibility` property.
- **Dynamic Class Names**: Add additional class names for further customization.

## Usage

To use the Paragraph Field component, define the field in your form configuration with the desired properties.

### Field Definition

```json
{
  "type": "paragraph",
  "style": {
    "text": "custom-paragraph-style"
  },
  "fieldProps": {
    "content": "Your paragraph content here"
  },
  "visibility": "visible", // optional
  "className": "additional-class" // optional
}
```

In this example, the Paragraph Field is configured to render a paragraph with custom styles and content. Adjust the `content` property to suit your needs. The `visibility` and `className` fields are optional and can be omitted if not needed.
