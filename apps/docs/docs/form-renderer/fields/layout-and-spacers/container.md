---
sidebar_label: 'Container'
sidebar_position: 1
---

# Container Field

The Container field is a versatile component designed to group multiple form fields together, providing a structured layout with optional titles and descriptions. It allows for the organization of related fields within a form, enhancing readability and user experience.

## Features

- **Field Grouping**: Organize multiple fields within a single container.
- **Optional Title and Description**: Add a title and description to provide context for the grouped fields.
- **Visibility Control**: Toggle the visibility of the container and its contents.
- **Style Customization**: Apply custom styles to the container, title, and description.
- **Field Disabling**: Propagate the disabled state to all contained fields.

## Usage

To use the Container field, define its properties in a JSON format, specifying the fields to be included, along with optional title and description.

```json
{
  "type": "container",
  "style": {
    "container": "container-class",
    "title": "title-class", // optional
    "description": "description-class" // optional
  },
  "fieldProps": {
    "fields": [
      {
        "type": "input",
        "formKey": "firstName",
        "style": {
          "input": "input-class",
          "label": "label-class",
          "error": "error-class"
        },
        "label": "First Name"
      },
      {
        "type": "checkbox",
        "formKey": "subscribe",
        "style": {
          "input": "checkbox-class",
          "label": "label-class",
          "error": "error-class"
        },
        "label": "Subscribe to newsletter"
      }
    ],
    "title": "Personal Information", // optional
    "description": "Please fill out the following fields." // optional
  },
  "visibility": "visible", // optional
  "disabled": false, // optional
  "className": "custom-container-class" // optional
}
```

This JSON structure defines a Container field with two child fields: an input field for "First Name" and a checkbox for "Subscribe to newsletter". The container includes a title and description, and custom styles are applied to the container and its elements.
