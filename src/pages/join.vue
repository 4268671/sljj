<template>
  <div class="w3-center">
    <div>
      <img v-if="channelthumb" :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block wow bounceIn w3-border-bottom">
    </div>
    <div class="wow fadeInUp" style="padding:50px 120px;max-width:1500px;margin:auto">
      <h2>
        加盟
        <span class="w3-text-red">申请</span>
      </h2>
      <p>Merchants Joined</p>

      <p class="w3-panel w3-padding-24" style="width:900px;margin:auto">
        感谢您关注舒览家具，如您已基本了解并确认合作意向，请填写并提交以下内容，工作人员将及时与您取得联系，谢谢您的合作！ 如果您再加盟过程中有任何不明白之处，可随时咨询：
        <span class="w3-text-red w3-large">028-6505-2524</span>（周一至周五9：00—17：00）
      </p>

      <div class="w3-row w3-panel">
        <div class="w3-third w3-padding">
          <input type="text" class="w3-input w3-round w3-border" placeholder="姓名：" id="name" v-model="apiData.name">
        </div>
        <div class="w3-third w3-padding">
          <input type="text" class="w3-input w3-round w3-border" placeholder="手机号码：" id="telphone" v-model="apiData.telphone">
        </div>
        <div class="w3-third w3-padding">
          <input type="text" class="w3-input w3-round w3-border" placeholder="电子邮箱：" id="email" v-model="apiData.email">
        </div>
      </div>
      <div class="w3-row w3-panel">
        <div class="w3-third w3-padding">
          <input type="text" class="w3-input w3-round w3-border" placeholder="QQ号码：" id="qq" v-model="apiData.qq">
        </div>
        <div class="w3-rest w3-padding">
          <input type="text" class="w3-input w3-round w3-border" placeholder="意向城市：" id="city" v-model="apiData.city">
        </div>
      </div>
      <div class="w3-row w3-panel">
        <div class="w3-padding">
          <textarea type="text" rows="3" class="w3-input w3-round w3-border" placeholder="留言内容：" id="message" v-model="apiData.message"></textarea>
        </div>
      </div>
      <div>
        <button class="w3-button w3-light-gray w3-round" @click="resetForm"> 清空重置 </button>
        <button :disabled="!isCommit" class="w3-button w3-red w3-hover-red w3-margin-left w3-round" @click="commitClick">
          <span v-show="!commitLoading">提交申请</span>
          <span v-show="commitLoading">提交中...</span>
        </button>
        <p class="w3-text-red openMessage" v-show="openMessage">{{commitMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
import { URL_PREFIX } from "../utils/consts";
import { getChannelThumb } from "../utils/fns";

export default {
  name: "joinform",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelthumb: "",
      channelid: "",
      path: "",
      apiData: {
        name: "",
        telphone: "",
        email: "",
        qq: "",
        city: "",
        message: ""
      },
      isCommit: false,
      openMessage: false
    };
  },
  computed: mapState({
    commitLoading: ({ apply }) => apply.loading,
    commitMessage: ({ apply }) => apply.message,
    channelist: ({ channel }) => channel.channelist
  }),
  watch: {
    channelist(channelist) {
      this.channelid = channelist.filter(
        item => item.path === this.path
      )[0].channelid;
      // console.log(this.channelid, "channelid");
      // console.log(channelist, "channelist");
      this.getPageData(this.channelid, channelist);
    },
    // 监听apiData
    apiData: {
      handler() {
        this.checkCommit();
      },
      deep: true
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.init.apply(vm, [to.params.id, to.path.substring(1)]);
    });
  },
  methods: {
    // 初始化
    init(id, path) {
      this.path = path;
      if (this.channelist.length) {
        this.channelid =
          id || this.channelist.filter(item => item.path === path)[0].channelid;
        this.getPageData(this.channelid, this.channelist);
      }
    },
    // 获取数据
    getPageData(channelid, channelist) {
      this.channelthumb = getChannelThumb(channelid, channelist);
    },
    async commitClick() {
      const { dispatch } = this.$store;
      //   console.log(this.apiData, "apiData");
      await dispatch({
        type: "apply/addNewApply",
        payload: this.apiData
      });
      this.openMessage = true;
      setTimeout(() => {
        this.openMessage = false;
        this.resetForm();
      }, 1500);
    },
    checkCommit() {
      const { name, telphone, email, qq, city, message } = this.apiData;
      this.isCommit =
        (name && telphone && email && qq && city && message) || false;
    },
    resetForm() {
      this.apiData = {
        name: "",
        telphone: "",
        email: "",
        qq: "",
        city: "",
        message: ""
      };
      this.isCommit = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
}
.openMessage {
  padding-left: 8;
}
</style>