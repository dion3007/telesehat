# Tele Bot (Front End)

<!-- [![pipeline status](https://gitlab.com/aruna_core_system/naomi/badges/master/pipeline.svg)](https://dev.azure.com/joygabriel/Tele%20Sehat%20Tech/_git/telesehat-bot-fe/commits/main) [![coverage report](https://gitlab.com/aruna_core_system/naomi/badges/master/coverage.svg)](https://dev.azure.com/joygabriel/Tele%20Sehat%20Tech/_git/telesehat-bot-fe/commits/main) -->

## Introduction

Tele Sehat is a [React JS](https://reactjs.org/) web application to display a list of questions for tracking covid patient symptoms.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install to Local Machine](#install-to-local-Machine)
- [Files/Folder Structure](#filesfolder-structure)
- [Built With](#built-with)

## Getting Started

In order to run this app on your local machine, you need to do the prequisites

### Prerequisites

- [Node.js](https://nodejs.org/en/) version 10.13 or later
- [Yarn](https://yarnpkg.com/getting-started/install)

### Install to Local Machine

Run the following commands to build an apk and install it on your device.

```bash
# Install dependencies
> yarn

# Build app and made it available on http://localhost:3000/
> yarn start
```

### Files/Folder Structure

Here is a brief explanation of the template folder structure and some of its main files usage:

```bash
└── public               # files that exposed to public
└── src                  # core folder data.
    └── assets           # all image used in apps.
    └── components       # general components used in apps
    └── pages            # all screen in apps
    └── store            # redux
│       └── actions      # global functions used in apps.
│       └── reducers     # global app state in apps
└── .eslinrc             # eslint config and rules.
└── .gitignore           # ignored files in Git.
└── .prettierignore      # ignored files for prettier.
└── package.json         # Package metadata and scripts
└── yarn.lock            # Package metadata generated by yarn.
```

## Built With

- [eslint](https://github.com/eslint/eslint)
- [husky](https://github.com/typicode/husky)
- [material ui](https://github.com/mui-org/material-ui)
- [prettier](https://github.com/prettier/prettier)
- [react](https://github.com/facebook/react/)
- [react-redux](https://github.com/reduxjs/react-redux/)
- [redux](https://github.com/reduxjs/redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
