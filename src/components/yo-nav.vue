<template>
  <div class="w3-center w3-panel w3-text-gray animated fadeInDown" style="padding:20px 0">
    <ul class="w3-ul w3-show-inline-block">
      <li class="w3-left">
        <router-link :to="{name: 'home'}">
          <span class="w3-large">网站首页</span>
        </router-link>
      </li>

      <li class="w3-left" v-for="(item,key) in sortNav" :key="key">
        <router-link :to="{name: item.topath, params: { id: item.id }}">
          <span class="w3-large">{{item.name}}</span>
        </router-link>
      </li>
      <li class="w3-left">
        <a :href="toUrl" target="_">
          <span class="w3-large">旗舰店购买
          </span>
          <div class="w3-tag w3-red w3-tiny w3-round-xlarge">hot</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toUrl: "http://www.baidu.com" //跳转地址
    };
  },
  props: {
    channelist: {
      type: Array,
      default: []
    }
  },
  computed: {
    sortNav() {
      return this.makearrChannel(this.channelist).sort(
        (a, b) => (a.weight > b.weight ? 1 : -1)
      );
    }
  },
  methods: {
    makearrChannel(arr) {
      const channelSort = {
        "5a9f87a9d2467c1d20c8ca63": { id: 0, name: "brand" },
        "5a9f87cdd2467c1d20c8ca64": { id: 1, name: "news" },
        "5a9f87e1d2467c1d20c8ca65": { id: 2, name: "product" },
        "5a9f87f1d2467c1d20c8ca66": { id: 3, name: "shop" },
        "5a9f8806d2467c1d20c8ca67": { id: 4, name: "join" }
      };
      const newArr = arr.map(item => ({
        id: item.channelid,
        name: item.name,
        weight: channelSort[item.channelid].id,
        topath: channelSort[item.channelid].name
      }));
      return newArr;
    }
  }
};
</script>

<style scoped>
a > span {
  transition: all 0.3s;
  padding: 8px 18px;
}
.router-link-active {
  background-color: #e84441;
  color: white;
  padding: 11px 0 9px 0;
}
a:hover > span {
  background-color: #e84441;
  color: white;
  padding: 8px 18px 9px 18px;
  transition: all 0.5s;
}
.w3-tag {
  position: absolute;
  top: 20px;
  margin-left: 45px;
}
</style>