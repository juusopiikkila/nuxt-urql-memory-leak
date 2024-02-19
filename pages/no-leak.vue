<template>
    <div>
        Country name: {{ data?.country.name }}<br>
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
</script>
