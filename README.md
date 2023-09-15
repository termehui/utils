# Utils

Utility functions for different data types and operations.

## Installation

### CDN

This package published as `utils` module in umd.

```html
<script src="https://unpkg.com/@termehui/utils"></script>
```

### NPM

```bash
npm i @termehui/utils
```

## Number

### unifySeparator

Replace all non-numeric character in string with separator character.

```ts
import { unifySeparator } from "@termehui/utils";
unifySeparator("-3,233,312.33", "/"); // -3/233/312.33
unifySeparator("123   ,   456", ","); // 123,456
```

### formatNumber

Format number with separator.

```ts
import { formatNumber } from "@termehui/utils";
formatNumber(12345.456, ","); // 12,345.345
formatNumber("-3214.222", ","); // -3,214.222
```

### extractNumeric

Extract numeric character from string.

**Caution**: this function extract all numeric characters (`-`, `[0-9]`, `.`)/ for parsing number use `parseNumber` function.

```ts
import { extractNumeric } from "@termehui/utils";
extractNumeric("$ 12345.00002"); // "12345.00002"
extractNumeric("Balance is : -32123.0001"); // "-32123.0001"
parseNumber("with none - string number ."); // "-."
```

### parseNumber

Parse number from string.

```ts
import { parseNumber } from "@termehui/utils";
parseNumber("$ 12345.00002"); // 12345.00002
parseNumber("with none . string number -"); // NaN
```

## Object

### deepClone

Create a deep clone of object.

```ts
function deepClone<T = any>(v: unknown): T;
```

## String

### alter

Return alter for empty value.

### slugify

Make slugify string from strings. join multiple strings and remove spaces.

### mapper

Search for value in replacement object and return replacement if found, otherwise returns value itself.

**Note**: you can use \* key in replacement to define default value if no replacement is defined.

### truncate

Truncate string and add ... to end of string if string length bigger than truncate length.

### str

Convert value to string. if falsy value passed this function returns empty string.

### joiner

Concatenate non-falsy value with space.
