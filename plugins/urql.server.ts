import {
    createClient,
    fetchExchange,
    ssrExchange,
} from '@urql/vue';

export default defineNuxtPlugin(async (nuxtApp) => {
    const ssr = ssrExchange({
        isClient: false,
    });

    // Extract SSR payload once app is rendered
    nuxtApp.hook('app:rendered', () => {
        // eslint-disable-next-line no-param-reassign
        nuxtApp.payload.data = {
            ...nuxtApp.payload?.data,
            urql: ssr.extractData(),
        };
    });

    const client = createClient({
        url: 'https://localhost:3000/api',
        exchanges: [
            ssr,
            fetchExchange,
        ],
    });

    nuxtApp.vueApp.provide('$urql', ref(client));
});
