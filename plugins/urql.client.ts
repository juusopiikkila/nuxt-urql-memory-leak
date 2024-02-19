import {
    createClient,
    fetchExchange,
    ssrExchange,
} from '@urql/vue';

export default defineNuxtPlugin(async (nuxtApp) => {
    const ssr = ssrExchange({
        isClient: true,
    });

    // Restore SSR payload once app is created
    nuxtApp.hook('app:created', () => {
        if (nuxtApp.payload.data?.urql) {
            ssr.restoreData(nuxtApp.payload.data.urql);
        }
    });

    const client = createClient({
        url: 'http://localhost:3000/api',
        exchanges: [
            ssr,
            fetchExchange,
        ],
    });

    nuxtApp.vueApp.provide('$urql', ref(client));
});
