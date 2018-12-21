# nice-random-id-generator

## Installation

```bash
npm i --save nice-random-id-generator
```

## Usage

```js
const generateRandomId = require('nice-random-id-generator');

generateRandomId(); // 'OAeB04QI'
generateRandomId({ prefix: 'id-' }) // 'id-oPFbLzsG'
generateRandomId({ prefix: 'id-', length: 15 }) // 'id-T+5x8FlhpaES8NN'
generateRandomId({ prefix: 'id-', length: 15, character_set: 'base64url' }) // 'id-AAtjeXc_UQJqOFW'
```
