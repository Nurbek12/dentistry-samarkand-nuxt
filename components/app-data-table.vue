<template>
    <div class="p-2 rounded border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 bg-white dark:bg-neutral-900 dark:border-neutral-500">
        <div class="border w-full rounded">
            <input v-show="!props.hideSearch" @inputed="search_items" type="text" class="rounded px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
        </div>
        <!-- <template v-for="f in props.customFilters" :key="f.name">
            <app-select v-model="filtering[f.name]" :items="f.items" @changed="handleFetching" :nullvalue="f.nv" />
        </template> -->
        <slot name="table-top" :handleFetch="handleFetching" />
    </div>
    <slot name="table-top-extra" :handleFetch="handleFetching" />

    <div class="border w-full rounded mt-2 overflow-hidden">
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <template v-for="header in props.headers" :key="header.value">
                            <th v-if="header.sortable" scope="col" class="px-6 py-3">
                                <div class="select-none flex gap-1 cursor-pointer" @click="set_sorting(header.value)">
                                    {{ header.name }}
                                    <CaArrowDown v-show="sorting[header.value] !== undefined" class="font-medium w-4 h-4" :class="{'rotate-180': sorting[header.value] === 'desc'}"/>
                                </div>
                            </th>
                            <th v-else scope="col" class="px-6 py-3">
                                {{ header.name }}
                            </th>
                        </template>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="items.length===0||loading" class="bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-500" :class="{'border-b':loading&&items.length>0}">
                        <td scope="row" :colspan="props.headers.length" class="py-2 text-center dark:text-white">
                            <div class="flex items-center justify-center gap-1">
                                <span v-show="!loading">Пусто</span>
                                <McLoading2Line class="w-6 h-6 animate-spin" v-show="loading" />
                                <span v-show="loading" class="mb-0.5">Загрузка...</span>
                            </div>
                        </td>
                    </tr>
                    <template v-for="item,i in items" :key="i">
                        <tr @click="emits('row-click', i)" class="bg-white hover:bg-gray-50 border-b dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-500" :class="{'cursor-pointer active:bg-gray-200 dark:active:bg-neutral-700':props.cursoredRow}">
                            <template v-for="h in props.headers" :key="h.value">
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <slot v-if="h.custom" :name="`table-item-${h.value}`" :table-item="item" :index="i" :open-tr="() => openRow(item.id)" :is-opened="item.id == expandRow" />
                                    <div v-else class="text-xs" :class="{'text-balance':h.balancedText}">{{ item[h.value]||'Нет' }}</div>
                                </th>
                            </template>
                        </tr>
                        <tr v-if="props.expanded" v-show="expandRow===item.id">
                            <td scope="row" :colspan="props.headers.length" class="px-3 py-2 bg-white dark:bg-neutral-900 dark:text-white">
                                <slot name="table-expand" :table-item="item" :index="i" />
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>

    <div v-show="!hideBottom" class="py-2 flex items-center justify-between">
        <div class="border rounded overflow-hidden w-full max-w-[100px]">
            <select v-model="limit" @change="handleFetching()" class="bg-white px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
                <option :value="20" selected>20</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
            </select>
        </div>
        <div class="border rounded flex items-center justify-between gap-4 bg-white p-2">
            <span class="text-sm">{{ limit*(page-1)+1 }}-{{ limit*(page-1)+items.length }} / {{ count }}</span>
            <div class="flex items-center gap-2">
                <button :disabled="page===1" @click="page--,handleFetching()" class="disabled:bg-teal-900 bg-teal-600 hover:bg-teal-500 text-white text-xs p-3 rounded-full">
                    <AkChevronLeft />
                </button>
                <button :disabled="page >= Math.ceil(count / limit)" @click="page++,handleFetching()" class="disabled:bg-teal-900 bg-teal-600 hover:bg-teal-500 text-white text-xs p-3 rounded-full">
                    <AkChevronRight />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import lodash from 'lodash'
import { ref, reactive, computed, toRefs, defineProps, defineEmits } from 'vue'
import { CaArrowDown, AkChevronRight, AkChevronLeft, McLoading2Line } from '@kalimahapps/vue-icons'

interface TableHeaders {
    name: string
    value: string
    sortable?: boolean,
    balancedText?: boolean,
    custom?: boolean,
}

interface Props {
    headers: TableHeaders[],
    items: any[],
    count: number,
    expanded?: boolean,
    loading?: boolean,
    hideSearch?: boolean,
    customFilters?: any[],
    hideBottom?: boolean,
    cursoredRow?: boolean
}

const { debounce } = lodash

const emits = defineEmits(['fetching','searched','row-click'])
const props = defineProps<Props>()
const { count, items, loading } = toRefs(props)

const page = ref(1)
const limit = ref(20)
const search = ref('')
const sorting: any = reactive({})
const filtering: any = reactive({})
const expandRow = ref<number|null>(null)

const queryfilter = computed(() => {
    const qry: any = {}

    if(page.value) qry.page = page.value
    if(limit.value) qry.limit = limit.value
    if(search.value?.trim()) qry.search = search.value

    props.customFilters?.map(cf => {
        if(filtering[cf.name]) qry[cf.name] = filtering[cf.name]
    })

    return { ...qry, sorting }
})

const set_sorting = debounce((key: string) => {
    if (sorting[key] === 'asc') sorting[key] = 'desc'
    else if (sorting[key] === 'desc') delete sorting[key]
    else if(Object.keys(sorting).length == 1) {
        Object.keys(sorting).map(d => delete sorting[d])
        set_sorting(key)
    }
    else sorting[key] = 'asc'

    handleFetching()
}, 500)

const search_items = debounce((e: any) => {
    emits('searched', e.target.value)
    search.value = e.target.value
    page.value = 1
    handleFetching()
}, 500)

const handleFetching = (cq?: any) => emits('fetching', cq?{...queryfilter.value,...cq}:queryfilter.value)

const openRow = (i: number) => {
    if(expandRow.value == i) expandRow.value = null 
    else expandRow.value = i
}

handleFetching()
</script>