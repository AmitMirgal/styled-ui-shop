# Welcome to styled-ui-shop

React components for faster and simpler web development. Built on styled-components to provide you a lighter react component.

## code snippet 💻

### Radio component

```javascript
import { Radio } from "styled-ui-shop";
<Radio
    name="radio"
    label="radio"
    value="radio"
    onChange={(event) => console.log('do something...')}
    bgColor="green"
    borderColor="green"
/>
```

---

### Dropdown component

```javascript
import { Dropdown } from "styled-ui-shop";

const options = [
  { id: '1', value: 'Level' },
  { id: '2', value: 'Beginner' },
  { id: '3', value: 'Intermediate' },
  { id: '4', value: 'Expert' },
];

<Dropdown
    borderColor="gray"
    color="gray"
    options={options}
    onChange={(event) => console.log('do something...')}
/>
```

More components are in progress...

Happy coding 😄
