<!-- views/home/home.vue -->
<template>
    <div>
        <Table border :columns="columns" :data="datas"></Table>
    </div>
</template>

<script>
import { apiUrl } from '@/common/js/api'
import { ajaxPost } from '@/common/js/public'

export default {
    data () {
        return {
            columns: [{
                title: 'id',
                key: 'id',
                width: 80,
                sortable: true
            },{
                title: 'title',
                key: 'title',
                sortable: true
            },{
                title: 'brief',
                key: 'brief',
            },{
                title: 'time',
                key: 'time',
                sortable: true,
                render: (h, params) => {
                    let t = this.timestampToTime(Number(params.row.time));
                    return h('div', t);
                }
            }],
            datas: []
        };
    },
    created() {
        const _this = this;
        ajaxPost(apiUrl.table, {
            "page": 1,
            "limit": 10
        }, (data) => {
            _this.datas = data.data.data;
        }, () => {

        })
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(parseInt(timestamp)),
                Y = date.getFullYear() + '-',
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
                D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ',
                h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':',
                m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':',
                s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + '';
            return Y + M + D + h + m + s;
        }
    }
}

</script>
<style lang='less' scoped>
</style>