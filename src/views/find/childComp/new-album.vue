<template>
  <div class="new-album">
    <div class="clearfix">
      <span class="fl title">新碟</span>
      <span class="fr more">更多新碟</span>
    </div>
    <template v-if="newalbumlist.length!=0">
      <grid-view :cols="3" :v-margin="8">
        <div
          v-for="item of newalbumlist"
          :key="item.id"
          class="new-album-item"
          @click="goAlbumContent(item.id)"
        >
          <img v-lazy="item.picUrl" alt />
          <p class="name">{{ item.name }}</p>
        </div>
      </grid-view>
    </template>
    <ContentLoader v-else :speed="1" :height="350">
      <rect x="5" y="0" rx="0" ry="0" width="120" height="100" />
      <rect x="5" y="110" rx="0" ry="0" width="120" height="20" />
      <rect x="135" y="0" rx="0" ry="0" width="120" height="100" />
      <rect x="135" y="110" rx="0" ry="0" width="120" height="20" />
      <rect x="265" y="0" rx="0" ry="0" width="120" height="100" />
      <rect x="265" y="110" rx="0" ry="0" width="120" height="20" />
      <rect x="5" y="150" rx="0" ry="0" width="120" height="100" />
      <rect x="5" y="260" rx="0" ry="0" width="120" height="20" />
      <rect x="135" y="150" rx="0" ry="0" width="120" height="100" />
      <rect x="135" y="260" rx="0" ry="0" width="120" height="20" />
      <rect x="265" y="150" rx="0" ry="0" width="120" height="100" />
      <rect x="265" y="260" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
  </div>
</template>

<script lang='ts'>
import gridView from "@/components/common/gridview/grid-view.vue";
import { ContentLoader } from "vue-content-loader";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    ContentLoader,
    gridView
  }
})
export default class NewAlbum extends Vue {
  @Prop({
    default() {
      return [];
    }
  })
  private newalbumlist!: object[];
  goAlbumContent(id: number) {
    this.$router.push("/album/" + id);
  }
}
</script>

<style lang="less" scoped>
.new-album {
  .clearfix {
    padding: 0 10px;
    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .more {
      border-radius: 12px;
      border: 1px solid #ccc;
      padding: 3px;
      font-size: 12px;
    }
  }
  .new-album-item {
    position: relative;
    .play-count {
      position: absolute;
      top: 0;
      right: 0;
      color: #eee;
      font-size: 12px;
    }
    img {
      width: 100%;
    }
    .name {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>