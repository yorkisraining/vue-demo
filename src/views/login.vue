<!-- views/login -->
<template>
    <div>
        <img src="@/assets/logo.png" alt="">
        <form>
            <Input prefix="ios-person" v-model="username" placeholder="Enter something..."  size="large" autocomplete="off" />
            <Input prefix="ios-lock" type="password" v-model="password" placeholder="Enter something..."  size="large"  autocomplete="off" />
            <Button type="success" long @click="login">LOGIN</Button>
        </form>
    </div>
</template>

<script>

import { apiUrl } from '@/common/js/api'
import { ajaxPost } from '@/common/js/public'

export default {
    data () {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            ajaxPost(apiUrl.login, {
                "username": this.username,
                "password": this.password,
            }, (data) => {
                data = data.data;
                if (data.success) {
                    localStorage.setItem('token', '123');
                    this.$Message.success({
                        content: '登录成功！',
                        onClose: () => {
                            this.$router.push('/home');
                        }
                    });
                } else {
                    this.$Message.warning({
                        content: '用户名或密码错误！'
                    });
                }
            }, () => {
                    this.$Message.warning({
                        content: '服务器错误！'
                    });
            })
        }
    }
}

</script>
<style lang='less' scoped>
    form {
        max-width: 400px;
        margin: 20px auto 0;
        padding: 20px;
        .ivu-input-wrapper {
            margin-bottom: 25px;
        }
    }

    img {
        width: 100px;
        height: 100%;
        margin: 16px auto;
        display: block;
    }
</style>