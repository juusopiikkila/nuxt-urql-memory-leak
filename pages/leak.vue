<template>
    <div>
        Country name: {{ data?.country.name }}<br>
        Country 2 name: {{ data2?.country.name }}
    </div>
</template>

<script setup lang="ts">
import { gql, useClientHandle } from '@urql/vue';

const handle = useClientHandle();

const { data } = await handle.useQuery({
    query: gql`
        query {
            country(code: "FI") {
                name
                code
            }
        }
    `,
});

const { data: data2 } = await handle.useQuery({
    query: gql`
        query {
            country(code: "FI") {
                name
                code
            }
        }
    `,
});
</script>
