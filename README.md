# Nuxt 3 urql memory leak reproduction

Here are the steps to reproduce the memory leak

```bash
yarn install
yarn build
yarn start

# for memory leak (in another console)
yarn autocannon:leak

# for no memory leak (in another console)
yarn autocannon:no-leak
```
