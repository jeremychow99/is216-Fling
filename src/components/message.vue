<template>
    <div class="message mt-2 mx-2">
        <span v-if="!sender">{{ senderName }}</span>
        <div class="d-flex flex-row" :class="sender ? 'flex-row-reverse' : 'flex-row'">
            <div class="rounded-2 bg-light" style="max-width: 55vw; overflow-wrap: break-word;">
                <div class=" px-3 pt-2">
                    <slot></slot>
                </div>
                <p class="text-muted text-end px-1" style="margin-bottom: 0; font-size: x-small;">{{ dateTime }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['senderName', 'sender', 'timestamp'],
    computed: {
        dateTime() {
            var month_arr = [
                'Jan', 'Feb', 'Mar', 'Apr', 
                'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec'
            ]

            var date = new Date(this.timestamp);

            let day = date.getDate()
            let month = month_arr[date.getMonth()]
            let hours = date.getHours().toString().length == 1 ? "0" + date.getHours().toString() : date.getHours().toString()
            let minutes = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes().toString() : date.getMinutes().toString()


            let datetime_str = `${day} ${month} ${hours}:${minutes}`
            return datetime_str;
        }
    }
}
</script>
