
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutWrapperPanel from '@/components/layout/LayoutWrapperPanel.jsx'
import MainContent from '@/components/MainContent.vue';
import MainRewardsSub from '@/components/MainRewardsSub.vue';
export default defineComponent({
    components: {
        LayoutWrapperPanel,
        MainContent,
        MainRewardsSub
    },
    setup() {
        
    },
})
</script>

<template>
    <LayoutWrapperPanel>
        <template v-slot:default>
           <MainRewardsSub/>
        </template>
    </LayoutWrapperPanel>
</template>
