<template>
  <div @wheel="wheelEvent($event)">
      <transition-group tag="div" :name="name">
      <div class="block" 
      v-for="(list,index) in pages" 
      :key="list" 
      :style="{'background-color':bgColor&&bgColor[index]?bgColor[index]:baseBgc}" 
      v-show="index === curIndex"
      @transitionend="end">{{list}}</div>
    </transition-group>
  </div>
</template>
<script>
export default {
    props: {
        bgColor: {
            type: Array
        },
        baseBgc: {
            default: '#c90'
        },
        pages: {
            type: Number,
            required: true
        }
    },
  data() {
    return {
      
      curIndex: 0,
      name: "",
      canWheel: true,
      endCount: 0
    }
  },
  methods: {
    wheelEvent(e) {
      if (!this.canWheel) {
        return;
      }
      this.canWheel = false;
      if (e.deltaY > 0) {
        if (this.curIndex === this.pages-1) {
          this.canWheel = true;
          this.endCount = 0;
          return;
        }
        this.name = "down";
        this.curIndex++;
      }
      if (e.deltaY < 0) {
        if (this.curIndex === 0) {
          this.canWheel = true;
          return;
        }
        this.name = "up";
        this.curIndex--;
      }
    },
    end() {
        
        this.endCount++;
        if (this.endCount === 2) {
        this.canWheel = true
        this.endCount = 0
      }
    }
  }
};
</script>
<style>
.block {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #c90;
}

.down-enter-active {
  transition: all 1s ease;
  transform: translateY(0);
}

.down-leave-active {
  transition: all 1s ease;
  transform: translateY(-100%);
}

.down-enter {
  transform: translateY(100%);
}

.down-leave {
  transform: translateY(0);
}

.up-enter-active {
  transition: all 1s ease;
  transform: translateY(0);
}

.up-leave-active {
  transition: all 1s ease;
  transform: translateY(100%);
}

.up-enter {
  transform: translateY(-100%);
}

.up-leave {
  transform: translateY(0);
}
</style>
