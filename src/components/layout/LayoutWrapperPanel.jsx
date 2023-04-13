import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";
import Header from "@/components/header/index.vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        <SideBar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <Header />
          {slots.default()}
        </div>
      </>
    );
  }
});
