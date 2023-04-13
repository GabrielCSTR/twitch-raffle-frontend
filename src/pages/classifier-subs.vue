
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutWrapperPanel from '@/components/layout/LayoutWrapperPanel.jsx'
import MainContent from '@/components/MainContent.vue';

export default defineComponent({
    components: {
        LayoutWrapperPanel,
        MainContent
    },
    setup() {
        
    },
})
</script>

<template>
    <LayoutWrapperPanel>
        <template v-slot:default>
            <h1>NEWWWWW SUBB</h1>
        </template>
    </LayoutWrapperPanel>
</template>
