<template>
    <div>
        Country name: {{ country }}

        <div v-if="lazyData">
            Lazy loaded country name: {{ lazyData.country.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { gql, useQuery } from '@urql/vue';

const { data } = await useQuery({
    query: gql`
        query {
            country(code: "FI") {
                name
                code
            }
        }
    `,
});

const country = computed<string | undefined>(() => data.value?.country.name);

const queryVariables = computed<{ code: string }>(() => ({
    code: data.value?.country.code || '',
}));

const { data: lazyData } = useQuery({
    query: gql`
        query ($code: ID!) {
            country(code: $code) {
                name
            }
        }
    `,
    variables: queryVariables,
    pause: computed(() => queryVariables.value.code.length === 0)
});
</script>
