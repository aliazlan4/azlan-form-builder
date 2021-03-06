# Azlan Form Builder

AFB is a ReactJS Form Builder plugin that is easy to integrate in any react app. It also supports drag and drop updates of form elements.

![alt text](https://raw.githubusercontent.com/aliazlan4/azlan-form-builder/main/screenshot.png "Azlan Form Builder")

## Installation

Use the package manager [npm](https://www.npmjs.com) to install.

```bash
npm install azlan-form-builder
```

## Usage

```nodejs
import FormBuilder from "azlan-form-builder";

/// then use it as

const [items, setItems] = useState([]);

const formUpdate = (newItemsList) => {
  console.log(newItemsList);
  /// you can call an API to save form elements as soon as they are updated
};

<FormBuilder onUpdate={formUpdate} items={items} />
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/aliazlan4/azlan-form-builder/blob/main/LICENSE)
