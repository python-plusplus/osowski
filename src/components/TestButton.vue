<template>

<button @click="count++"> You clicked on this button {{ count }} times! </button> 
</template>

<script>
export default {
    name: 'TestButton',
    data: function() {
        return { 
            count: 0
        }
    }
}
</script>

<style>

</style>