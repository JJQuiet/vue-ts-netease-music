<template>
  <div class="My">
    <my-head :userBaseinfo="userBaseInfo" />
    <my-music />
    <my-songslist :songsList="mySongsList" />
    <router-view />
  </div>
</template>

<script lang='ts'>
import myHead from "./childComp/head.vue";
import myMusic from "./childComp/my_music.vue";
import mySongslist from "./childComp/my_songslist.vue";
import { loginStatus } from "@/service/user";
import { UserBaseInfo, IProfile } from "@/service/user";
import { userSongsManageMixin } from "@/utils/mixin";
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "My",
  components: {
    myHead,
    myMusic,
    mySongslist
  },
  mixins: [userSongsManageMixin]
})
export default class My extends Vue {
  private userBaseInfo: IProfile = {
    userId: -1,
    nickname: "",
    avatarUrl: ""
  };

  created() {
    this.getLoginStatus();
  }
  async getLoginStatus() {
    try {
      let res = await loginStatus();
      console.log(res);
      
      if (res.data.code === 200) {
        console.log('hhhhhhhhhhhhhhh')
        this.userBaseInfo = new UserBaseInfo(res.data.profile);
        (this as any).getUserSongsheet();
      }else{
        console.log('eeeeeeeeeeeeeeeee')
      }
    } catch (err) {
      console.log("loginStatus" + err);
    }
  }
}
</script>
<style scoped lang='less'>
// .My {
// }
</style>