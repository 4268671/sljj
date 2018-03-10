<template>
    <div class="w3-center">
        <div>
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <div class="" style="padding:50px 120px">
            <h2>
                加盟
                <span class="w3-text-red">申请</span>
            </h2>
            <p class="w3-panel w3-padding-24" style="width:900px;margin:auto">
                感谢您关注舒览家具，如您已基本了解并确认合作意向，请填写并提交以下内容，工作人员将及时与您取得联系，谢谢您的合作！ 如果您再加盟过程中有任何不明白之处，可随时咨询：
                <span class="w3-text-red">028-xxxxx-xxxx</span>（周一至周五9：00—17：00）
            </p>

            <div class="w3-row w3-panel">
                <div class="w3-third w3-padding">
                    <input type="text" class="w3-input w3-round w3-border" placeholder="姓名：">
                </div>
                <div class="w3-third w3-padding">
                    <input type="text" class="w3-input w3-round w3-border" placeholder="手机号码：">
                </div>
                <div class="w3-third w3-padding">
                    <input type="text" class="w3-input w3-round w3-border" placeholder="电子邮箱：">
                </div>
            </div>
            <div class="w3-row w3-panel">
                <div class="w3-third w3-padding">
                    <input type="text" class="w3-input w3-round w3-border" placeholder="QQ号码：">
                </div>
                <div class="w3-rest w3-padding">
                    <input type="text" class="w3-input w3-round w3-border" placeholder="意向城市：">
                </div>
            </div>
            <div class="w3-row w3-panel">
                <div class="w3-padding">
                    <textarea type="text" rows="3" class="w3-input w3-round w3-border" placeholder="留言内容："></textarea>
                </div>
            </div>
            <div>
                <button type="submit" class="w3-button w3-light-gray w3-round"> 清空重置 </button>
                <button type="submit" class="w3-button w3-red w3-margin-left w3-round"> 提交申请 </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "joinform",
        data() {
            return {
                imgsrc: Mock.Random.image("1800x500", "#eeeeee"),
                imgp: Mock.Random.image("400x300", "#eeeeee")
            };
        },
        components: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    textarea {
        resize: none;
    }
</style>