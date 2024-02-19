export default eventHandler(async (event) => {
    return {
        data: {
            country: {
                name: 'Finland',
                code: 'FI',
            },
        },
    };
});
