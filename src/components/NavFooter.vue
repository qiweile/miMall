<template>
    <div class="Nav-footer">
        <div class="container">
            <div class="footer-logo">
                <a href="javascript:;" class="logo-img"></a>
                <span>小米商城</span>
            </div>
            <div class="footer-title">
                <a href="javascript:;">河畔一角主页 | </a>
                <a href="javascript:;">Vue全栈课程 | </a>
                <a href="javascript:;">React全家桶课程 | </a>
                <a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo） Copyright <span class="urlspan">mi.51purse.com</span> All Rights Reserved</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-footer',
    data() {
        return {}
    },
    computed: {},
    created() { },
    methods: {},
}
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.Nav-footer {
    height: 233.8px;
    background: #333333;
    .container {
        text-align: center;
        .footer-logo {
            color: #999999;
            a {
                @include bgImg(53px, 36px, "../../public/imgs/logo-footer.png");
                margin: 46px 0 13px;
            }
            span {
                display: block;
                margin: 0 auto;
            }
        }
        .footer-title {
            display: inline-block;
            width: 530px;
            margin: 31px auto 0;
            line-height: 28px;
            a {
                color: #999999;
            }
            .urlspan {
                color: $colorA;
            }
        }
    }
}
</style>