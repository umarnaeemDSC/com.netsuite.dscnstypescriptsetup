# TypeScript SuiteScript Project Template

This project is a template for developing NetSuite SuiteScripts using TypeScript. It includes automated compilation, linting, and uploading workflows.

## Prerequisites

*   Node.js (LTS version recommended)
*   SuiteCloud CLI (`@oracle/suitecloud-cli`) installed and configured with authentication.

## Setup

1.  Clone this repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

## Development Workflow

### 1. Automatic Compilation & Upload (Watcher)

To start the development watcher, run:

```bash
npm run watch
```

**What this does:**
*   **Compiles**: Runs `tsc --watch` to compile TypeScript files from `src/typescript` to `src/FileCabinet`.
*   **Uploads**: Watches the output directory. When a file is compiled, it automatically runs `suitecloud file:upload` for that specific file.

### 2. Linting

To check your code for styling and potential errors, run:

```bash
npm run lint
```

**Key Rules:**
*   **Semicolons**: Mandatory at the end of every statement.
*   **Complexity**: Cyclic complexity is limited to 5.
*   **No Explicit Any**: Usage of `any` type is forbidden (error).
*   **Compiled Files Ignored**: Linting runs only on `.ts` source files.

### 3. Manual Compilation

If you simply want to compile without watching/uploading:

```bash
npm run compile
```

## Project Structure

*   `src/typescript/`: **Source Code**. Write your TypeScript code here.
    *   `lib/`: Shared libraries and utilities.
        *   `global-utils.ts`: Generic logic (do not use `N/*` modules here if meant for isomorphic usage, mostly pure logic or universal modules).
        *   `client-utils.ts` / `server-utils.ts`: Re-export global utils and add platform-specific logic.
*   `src/FileCabinet/SuiteApps/...`: **Output**. Compiled JavaScript files land here. **Do not edit these files directly.**

## Global Utilities Usage

To use global utility functions in your scripts, import them from the appropriate utility file:

**Server Scripts (Suitelet, UserEvent, etc.):**
```typescript
import * as utils from '../../lib/server-utils';

utils.getAllRowsFromSearch(...);
```

**Client Scripts:**
```typescript
import * as utils from '../../lib/client-utils';

utils.injectSpinner();
```
