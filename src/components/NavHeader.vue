<template>
    <div class="header">
        <div class="nav-topber">
            <div class="container">
                <div class="topber-menu">
                    <a href="javascript:;">松果出行</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topber-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">详情</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="javascript:;" class="icon-logo"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <a href="javascript:;">小米手机</a>
                        <div class="children">
                            <ul class="children_ul">
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{333|currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <a href="javascript:;">Redmi红米</a>
                        <div class="children">
                            <ul class="children_ul">
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <a href="javascript:;">电视</a>
                        <div class="children">
                            <ul class="children_ul">
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="por-img">
                                            <img src="../../public/imgs/nav-img/nav-1.png" class="IPhImg" alt="">
                                        </div>
                                        <div class="por-name">小米9</div>
                                        <div class="por-price">{{3333|currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <span class="tips">小米9</span>
                        <span class="tips1">小米9 ES</span>
                        <input type="text">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'nav-header',
    data() {
        return {}
    },
    computed: {},
    filters: {
        currency(value, num) {
            let str = value.toString()
            let decimal = num ? str.substr(str.length - num, num) : '00'
            str = str.replace(decimal, '')
            let remainder = str.length % 3
            let str1 = str.substr(0, remainder)
            for (let i = remainder; i < str.length; i++) {
                if (i % 3 == remainder && i != 0) {
                    str1 += ','
                }
                str1 += str[i]
            }
            return str1 + '.' + decimal
        }
    },
    created() { },
    methods: {

    },
}
</script>
<style lang="scss">
@import "@/assets/scss/public.scss";
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/config.scss";

.header {
    .nav-topber {
        height: 39px;
        line-height: 39px;
        background: #333333;
        .container {
            @include flex();
            a {
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }
            .my-cart {
                width: 110px;
                background-color: #ff6600;
                text-align: center;
                margin-right: 0;
                color: #ffffff;
            }
            .icon-cart {
                @include bgImg(16px, 12px, "../../public/imgs/icon-cart.png");
                margin-right: 4px;
            }
        }
    }
    .nav-header {
        .container {
            @include flex();
            position: relative;
            height: 112px;
            .header-logo {
                width: 55px;
                height: 55px;
                overflow: hidden;
                .icon-logo {
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    background: $colorA;
                    &:before {
                        @include bgImg(
                            55px,
                            55px,
                            "../../public/imgs/mi-logo.png"
                        );
                        content: "";
                        transition: margin 0.2s;
                    }
                    &:after {
                        content: "";
                        @include bgImg(
                            55px,
                            55px,
                            "../../public/imgs/mi-home.png"
                        );
                    }
                    &:hover:before {
                        margin-left: -55px;
                        transition: margin 0.2s;
                    }
                }
            }
            .header-menu {
                width: 369px;
                @include flex(flex-start);
                .item-menu {
                    margin-right: 20px;
                    font-family: FZLanTingHeiS-R-GB;
                    font-weight: bold;
                    font-size: 16px;
                    a {
                        color: #333333;
                    }
                    &:hover {
                        & > a {
                            color: $colorA;
                        }
                        .children {
                            height: 220px;
                            opacity: 1;
                            transition: all 0.5s;
                        }
                    }
                    .children {
                        position: absolute;
                        opacity: 0;
                        height: 0;
                        overflow: hidden;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        text-align: center;
                        color: red;
                        transition: all 0.5s;
                        .children_ul {
                            border-top: 1px solid #e5e5e5;
                            .product {
                                position: relative;
                                float: left;
                                width: 204px;
                                font-size: 12px;
                                &:after {
                                    content: "";
                                    width: 0px;
                                    height: 100px;
                                    position: absolute;
                                    right: 0;
                                    top: 28px;
                                    border-left: 1px solid #d7d7d7;
                                }
                                &:last-child:after {
                                    display: none;
                                }
                            }
                            .IPhImg {
                                margin-top: 26px;
                                width: 165px;
                            }
                            .por-name {
                                margin-top: 19px;
                            }
                            .por-price {
                                margin-top: 6px;
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .header-search {
                .wrapper {
                    position: relative;
                    border: 1px solid #ccc;
                    height: 50px;
                    .tips,
                    .tips1 {
                        display: inline-block;
                        position: absolute;
                        background: rgba(0, 0, 0, 0.11);
                        color: #666666;
                        text-align: center;
                        top: 50%;
                        transform: translateY(-50%);
                        height: 20px;
                        line-height: 20px;
                        cursor: pointer;
                        box-sizing: border-box;
                    }
                    .tips1 {
                        right: 73px;
                        width: 60px;
                    }
                    .tips {
                        right: 139px;
                        width: 40px;
                    }
                    input {
                        vertical-align: top;
                        border: none;
                        width: 264px;
                        height: 50px;
                        font-size: 20px;
                        padding: 0 10px;
                        box-sizing: border-box;
                    }
                    a {
                        @include bgImg( 55px, 50px, "../../public/imgs/icon-search.png", 18px );
                        border-left: 1px solid #ccc;
                    }
                }
            }
        }
    }
}
</style>