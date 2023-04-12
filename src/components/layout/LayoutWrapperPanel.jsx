import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        <div class="flex min-h-screen flex-no-wrap bg-gray-200">
          <SideBar />

          <div class="container mx-auto py-10 min-h-screen md:w-4/5 w-11/12 px-6">
            {slots.default()}
          </div>
        </div>
      </>
    );
  }
});
