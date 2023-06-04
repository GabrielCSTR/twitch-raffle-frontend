
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutWrapperPanel from '@/components/layout/LayoutWrapperPanel.jsx'
import MainContent from '@/components/MainContent.vue';
import MainRewardsViews from '@/components/MainRewardsViews.vue';
export default defineComponent({
    components: {
        LayoutWrapperPanel,
        MainContent,
        MainRewardsViews
    },
    setup() {
        
    },
})
</script>

<template>
    <LayoutWrapperPanel>
        <template v-slot:default>
           <MainRewardsViews/>
        </template>
    </LayoutWrapperPanel>
</template>
