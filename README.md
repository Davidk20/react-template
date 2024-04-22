# React Template

<div align="center">
  <img src=assets/branding/logo.png alt="Logo" width="25%"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react logo"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript logo"/>
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind logo"/>

</div>

<div align="center" width="50%">
Template for a React project
</div>

## Getting Started

To configure this template for a new project

1) Change the title in [package.json](package.json)
2) Change the details in [index.html](public/index.html)
3) Change logo's
4) Delete this section from the README


## Development

### Pre-Commit

This project makes use of [pre-commit](https://pre-commit.com/) as a tool for development. Usage requires Python to be installed, however, this should already be installed should you have followed the [installation steps](#back-end-solutions).

```shell
# only run this if not already installed
pip install pre-commit
# the following command should be successful
pre-commit --version
# inside the project directory, run this command to install the git hook scripts
pre-commit install --hook-type pre-commit --hook-type pre-push
```
