# Nuxt 3 urql memory leak reproduction

Here are the steps to reproduce the memory leak

```bash
yarn install
yarn build
yarn start
yarn autocannon (in another console)
```
