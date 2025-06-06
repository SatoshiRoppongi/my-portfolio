<template>
  <div class="p-6 space-y-12 max-w-4xl mx-auto">
    <div class="flex flex-col items-center p-6 md:grid md:grid-cols-2">
      <NuxtImg :src="`${baseURL}/image.png`" alt="プロフィール画像" class="rounded-xl mb-6 md:mb-0 md:ml-0"/>
      <div class="text-center md:text-left">
        <div class="p-6 text-lg font-bold ">
          フリーランス システムエンジニア
        </div>
        <h2 class="p-6 text-3xl font-bold text-white -mb-8">Roppongi Satoshi</h2>
        <h1 class="p-6 text-6xl font-bold text-primary">六本木 智 </h1>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-semibold mb-4">職務要約</h2>
      <p>
        基幹システムエンジニアとして、120万人以上が利用する業務システムの開発・運用・保守に携わった後、
        受託開発会社にてWeb開発案件のテックリーダーを務め、プロジェクトの立ち上げから安定運用まで、
        すべての工程でクライアントと伴走してきました。
        現在はフリーランスエンジニアとして活動しており、主にバックエンドを中心に、フロントエンドからインフラ領域まで幅広く対応可能です。
        ウォーターフォール、アジャイル両方の開発スタイルを経験しており、現場に応じた柔軟な立ち回りが可能です。
        新しい技術や業務知識のキャッチアップが早く、即戦力としてさまざまな現場で高く評価されています。
      </p>
    </div>

    <div>
      <h2 class="text-2xl font-semibold mb-4">得意なこと</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div 
          v-for="n in 8" 
          :key="n" 
          class="relative"
          @mouseover="showTooltip(n)"
          @mouseleave="hideTooltip"
        >
          <NuxtImg 
            :src="`${baseURL}/skill${n}.png`" 
            alt="Skill Image" 
            class="w-full h-full object-cover cursor-pointer rounded-xl"
          />
          <transition name="fade">
            <div 
              v-if="tooltipVisible === n" 
              class="absolute top-0 left-0 bg-black text-white text-xs p-2 rounded shadow-lg max-w-xs"
              style="transform: translateY(-100%);"
            >
              <!-- Rich content for the tooltip -->
              <h3 class="font-bold">{{ goodAtList[n-1].h }}</h3>
              <p class="text-sm">{{  goodAtList[n-1].p }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    
    


    <div>
      <h2 class="text-2xl font-semibold mb-4">具体的なスキル</h2>
      <SkillChart />
    </div>
      <!--

      <h2 class="text-2xl font-semibold mb-4">職務経歴 (最新順)</h2>
      <div class="space-y-12">
        <div
          v-for="exp in experiences"
          :key="exp.id"
        >
          <ExperienceCard :experience="exp" />
      </div>
      </div>
    -->
  </div>
</template>

<script setup lang="ts">

const { data: experiences } = await useAsyncData('experiences', () =>
  queryCollection('content').all()
)
// company: T社
// group: companyT
// mystatus: solo
const tooltipVisible = ref<number | null>(null);
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const goodAtList = ref([
  {
    'h': 'バックエンド開発',
    'p': 'JavaやShellScriptなどを用いて基幹システム等のバックエンド開発が得意です。'
  },
  {
    'h': 'データベース操作/連携',
    'p': 'DB(MySQL, OracleDB, NoSQL)のテーブル設計/データ更新などの操作が得意です。'
  },
  {
    'h': 'サーバレス環境での開発',
    'p': 'AWSやFirebase(GCP)を利用したサーバレス環境での開発が得意です。'
  },
  {
    'h': '業務効率化/自動化',
    'p': 'Pythonを用いた業務効率化、スクリプティング・データ操作が得意です。'
  },
  {
    'h': 'モダンな開発手法・CI/CD',
    'p': 'Dockerを用いたモダンな開発・CI/CDの調整が得意です。'
  },
  {
    'h': '高品質・高セキュリティなプロダクトの作成',
    'p': 'JSDoc等を用いた型定義、テストコードを利用した高品質なAPI開発が得意です。'
  },
  {
    'h': 'フロントエンド開発',
    'p': 'Vue,Nuxt,JS/TS等を用いたモダンなフロントエンド開発が得意です。'
  },
  {
    'h': '生成AIを利用した開発',
    'p': '生成AIを活用した迅速な開発と課題解決（プロンプティング）が得意です。'
  },
])

function showTooltip(n: number) {
  tooltipVisible.value = tooltipVisible.value === n ? null : n;
}
function hideTooltip() {
  tooltipVisible.value = null;
}

</script>


<style scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>
