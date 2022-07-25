<template>
    <div>

        <div v-if="color_red == false" class="p-2">
            <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div v-if="color_red == true" class="p-2">
            <div class="progress">
                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:["color_red"]
}
</script>

<style>
</style>