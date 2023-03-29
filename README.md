<h1 align="center">
ichat
</h1>

<p align="center">
  <a href="https://www.javascript.com/">
    <img
      alt="javaScript"
      src="https://img.shields.io/badge/javaScript-yellow.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"
    />
  </a>
  <a href="https://react.dev/">
    <img
      alt="reactjs"
      src="https://img.shields.io/badge/ReactJs-%2357A143.svg?&style=for-the-badge&logo=React&logoColor=white"
    />
  </a>
</p>

![demo](https://github.com/amiof/images/blob/main/ichat-frontend.gif)

## 📢 Introduction

ichat is a reactjs  projct allow you sign in and chat whit users . it now have many bug and it is in develope :)

## ✨ Features

- add group and chat in group 
- nothing ...

## 💾 Persistence

NeoColumn maintains the ColorColumn settings for each file, including visibility and position, across sessions.

## 🛠️ Usage

for running ichat-frontend  you need  `ichat-backend` you cant get it from my github :

- [ichat-backend](https://github.com/amiof/ichat-backend.git)



## 📦 Installation

1. after clone you can install dependency 


```js
npm install 
```
after install dependencyes you cant start project : 
```Js
npm start 
```

2. Setup the plugin in your `init.lua`. This step is not needed with lazy.nvim if `opts` is set as above.
```Lua
require("NeoColumn").setup()
```

## 🔧 Configuration

You can pass your config table into the `setup()` function or `opts` if you use lazy.nvim.

The available options:

- `NeoColumn` (string) : the character position at which the ColorColumn appears
  - `"80"` (default)

### Default Config

```Lua
local config = {
  NeoColumn = "80",
}
```
