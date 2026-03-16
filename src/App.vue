<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import * as echarts from 'echarts'
import { allData, months } from './data/kpiData.js'

// === State ===
const selectedMonth = ref(months[months.length - 1])
const selectedDept = ref(null)
const selectedPerson = ref(null)

// === Computed ===
const kpiData = computed(() => allData[selectedMonth.value])

const departments = computed(() => {
  const map = {}
  kpiData.value.forEach(p => {
    if (!map[p.department]) map[p.department] = []
    map[p.department].push(p)
  })
  return Object.entries(map).map(([name, members]) => ({
    name,
    count: members.length,
    avg: +(members.reduce((s, m) => s + m.totalScore, 0) / members.length).toFixed(1),
    max: +Math.max(...members.map(m => m.totalScore)).toFixed(1),
    min: +Math.min(...members.map(m => m.totalScore)).toFixed(1)
  })).sort((a, b) => b.avg - a.avg)
})

const currentPersons = computed(() => {
  let list = selectedDept.value
    ? kpiData.value.filter(p => p.department === selectedDept.value)
    : [...kpiData.value]
  return list.sort((a, b) => b.totalScore - a.totalScore)
})

const avgScore = computed(() => +(kpiData.value.reduce((s, p) => s + p.totalScore, 0) / kpiData.value.length).toFixed(1))
const maxPerson = computed(() => kpiData.value.reduce((b, p) => p.totalScore > b.totalScore ? p : b, kpiData.value[0]))
const minPerson = computed(() => kpiData.value.reduce((w, p) => p.totalScore < w.totalScore ? p : w, kpiData.value[0]))
const top10Best = computed(() => [...kpiData.value].sort((a, b) => b.totalScore - a.totalScore).slice(0, 10))
const top10Worst = computed(() => [...kpiData.value].sort((a, b) => a.totalScore - b.totalScore).slice(0, 10))

const gradeDistribution = computed(() => {
  const d = { S: 0, A: 0, B: 0, C: 0, D: 0 }
  const list = selectedDept.value ? kpiData.value.filter(p => p.department === selectedDept.value) : kpiData.value
  list.forEach(p => { d[getGrade(p.totalScore)]++ })
  return d
})

function getGrade(s) { return s >= 80 ? 'S' : s >= 70 ? 'A' : s >= 60 ? 'B' : s >= 50 ? 'C' : 'D' }
function gradeColor(s) { return s >= 80 ? '#ffd700' : s >= 70 ? '#00e676' : s >= 60 ? '#00a8ff' : s >= 50 ? '#ffab00' : '#ff1744' }
function metricColor(s) { if (s == null) return '#3d7aaa'; return s >= 15 ? '#00e676' : s >= 8 ? '#00a8ff' : s >= 3 ? '#ffab00' : '#ff1744' }

function barPct(m) {
  if (m.score == null) return 0
  return Math.min(m.score / (m.weight * 100) * 100, 100)
}

// === Actions ===
function selectDept(name) {
  selectedDept.value = selectedDept.value === name ? null : name
  nextTick(updateChart)
}
function selectPerson(p) {
  selectedPerson.value = selectedPerson.value?.id === p.id ? null : p
}
function closeModal() {
  selectedPerson.value = null
}
function goOverview() {
  selectedDept.value = null
  selectedPerson.value = null
  nextTick(updateChart)
}
function goDept() {
  selectedPerson.value = null
}
function switchMonth(m) {
  selectedMonth.value = m
  selectedDept.value = null
  selectedPerson.value = null
  nextTick(updateChart)
}

// Close modal on Escape key
function handleKeydown(e) {
  if (e.key === 'Escape' && selectedPerson.value) closeModal()
}
onMounted(() => window.addEventListener('keydown', handleKeydown))

// === ECharts ===
const chartRef = ref(null)
let chart = null

function updateChart() {
  if (!chart) return
  if (selectedDept.value) {
    const persons = kpiData.value.filter(p => p.department === selectedDept.value).sort((a, b) => b.totalScore - a.totalScore)
    chart.setOption({
      title: { text: selectedDept.value + ' 员工得分', left: 'center', top: 8, textStyle: { color: '#7eb8e0', fontFamily: 'Rajdhani', fontSize: 15, fontWeight: 600 } },
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, backgroundColor: '#06142b', borderColor: '#0f3460', textStyle: { color: '#e8f4fd', fontFamily: 'Rajdhani', fontSize: 14 } },
      legend: { show: false },
      grid: { left: 60, right: 30, top: 40, bottom: 28 },
      xAxis: { type: 'category', data: persons.map(p => p.name), axisLine: { lineStyle: { color: '#0f3460' } }, axisLabel: { color: '#7eb8e0', fontSize: 13, fontFamily: 'Rajdhani' } },
      yAxis: { type: 'value', max: 90, splitLine: { lineStyle: { color: 'rgba(15,52,96,0.5)' } }, axisLine: { lineStyle: { color: '#0f3460' } }, axisLabel: { color: '#3d7aaa', fontSize: 12 } },
      series: [{
        type: 'bar', barWidth: persons.length > 10 ? 18 : 32,
        data: persons.map(p => ({
          value: p.totalScore,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: gradeColor(p.totalScore) },
              { offset: 1, color: gradeColor(p.totalScore) + '33' }
            ]),
            borderRadius: [3, 3, 0, 0]
          }
        })),
        label: { show: true, position: 'top', color: '#e8f4fd', fontFamily: 'Orbitron', fontSize: 11, fontWeight: 700 }
      }]
    }, true)
  } else {
    const depts = departments.value
    chart.setOption({
      title: { text: '部门绩效对比', left: 'center', top: 8, textStyle: { color: '#7eb8e0', fontFamily: 'Rajdhani', fontSize: 15, fontWeight: 600 } },
      tooltip: { trigger: 'axis', backgroundColor: '#06142b', borderColor: '#0f3460', textStyle: { color: '#e8f4fd', fontFamily: 'Rajdhani', fontSize: 14 } },
      legend: { show: true, data: ['平均分', '最高分', '最低分'], top: 28, textStyle: { color: '#3d7aaa', fontSize: 12 }, itemWidth: 14, itemHeight: 9 },
      grid: { left: 60, right: 30, top: 56, bottom: 28 },
      xAxis: {
        type: 'category',
        data: depts.map(d => d.name.replace('品质部', '\n品质部').replace('品质中心', '\n品质中心')),
        axisLine: { lineStyle: { color: '#0f3460' } },
        axisLabel: { color: '#7eb8e0', fontSize: 12, fontFamily: 'Rajdhani', interval: 0 }
      },
      yAxis: { type: 'value', max: 90, splitLine: { lineStyle: { color: 'rgba(15,52,96,0.5)' } }, axisLine: { lineStyle: { color: '#0f3460' } }, axisLabel: { color: '#3d7aaa', fontSize: 12 } },
      series: [
        { name: '平均分', type: 'bar', barWidth: 16, data: depts.map(d => d.avg), itemStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00a8ff'},{offset:1,color:'#00a8ff33'}]), borderRadius: [3,3,0,0] } },
        { name: '最高分', type: 'bar', barWidth: 16, data: depts.map(d => d.max), itemStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00e676'},{offset:1,color:'#00e67633'}]), borderRadius: [3,3,0,0] } },
        { name: '最低分', type: 'bar', barWidth: 16, data: depts.map(d => d.min), itemStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#ff1744'},{offset:1,color:'#ff174433'}]), borderRadius: [3,3,0,0] } }
      ]
    }, true)
  }
}

onMounted(() => {
  nextTick(() => {
    chart = echarts.init(chartRef.value)
    updateChart()
    window.addEventListener('resize', () => chart?.resize())
  })
})
</script>

<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="hdr">
      <h1>光伏品质中心 KPI 绩效看板</h1>
      <div class="hdr-info">
        <div class="month-switch">
          <button
            v-for="m in months" :key="m"
            class="month-btn"
            :class="{ active: selectedMonth === m }"
            @click="switchMonth(m)"
          >{{ m.replace('2026年', '') }}</button>
        </div>
        <div class="hdr-tag">周期 <span>{{ selectedMonth }}</span></div>
        <div class="hdr-tag">员工 <span>{{ kpiData.length }}</span></div>
        <div class="hdr-tag">部门 <span>{{ departments.length }}</span></div>
      </div>
    </header>

    <!-- Body Grid -->
    <div class="dash-body">
      <!-- KPI Strip -->
      <div class="kpi-strip">
        <div class="kpi-card">
          <div class="k-label">员工总数</div>
          <div class="k-val">{{ kpiData.length }}</div>
          <div class="k-sub">{{ departments.length }} 个部门</div>
        </div>
        <div class="kpi-card">
          <div class="k-label">平均得分</div>
          <div class="k-val">{{ avgScore }}</div>
          <div class="k-sub">满分 90</div>
        </div>
        <div class="kpi-card">
          <div class="k-label">最高得分</div>
          <div class="k-val">{{ maxPerson.totalScore.toFixed(1) }}</div>
          <div class="k-sub">{{ maxPerson.name }}</div>
        </div>
        <div class="kpi-card">
          <div class="k-label">等级分布</div>
          <div class="k-val" style="font-size:0.9rem;display:flex;gap:6px;flex-wrap:wrap;">
            <span style="color:#ffd700">S:{{ gradeDistribution.S }}</span>
            <span style="color:#00e676">A:{{ gradeDistribution.A }}</span>
            <span style="color:#00a8ff">B:{{ gradeDistribution.B }}</span>
            <span style="color:#ffab00">C:{{ gradeDistribution.C }}</span>
            <span style="color:#ff1744">D:{{ gradeDistribution.D }}</span>
          </div>
          <div class="k-sub">满分90分制</div>
        </div>
        <div class="kpi-card">
          <div class="k-label">最低得分</div>
          <div class="k-val">{{ minPerson.totalScore.toFixed(1) }}</div>
          <div class="k-sub">{{ minPerson.name }}</div>
        </div>
      </div>

      <!-- Left: Departments -->
      <div class="panel">
        <div class="panel-head">
          <div class="panel-title">部门导航</div>
          <span v-if="selectedDept" class="panel-action" @click="goOverview">清除筛选</span>
        </div>
        <div class="panel-body">
          <div class="dept-list">
            <div
              v-for="dept in departments" :key="dept.name"
              class="dept-row-item"
              :class="{ active: selectedDept === dept.name }"
              @click="selectDept(dept.name)"
            >
              <div>
                <div class="dept-name">{{ dept.name }}</div>
                <div class="dept-cnt">{{ dept.count }}人</div>
              </div>
              <div class="dept-stats">
                <span class="dept-avg" :style="{ color: gradeColor(dept.avg) }">{{ dept.avg }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Center: Chart + TOP10 -->
      <div class="panel center-panel">
        <div class="panel-head">
          <div class="breadcrumb">
            <span class="bc-item" :class="{ active: !selectedDept }" @click="goOverview">总览</span>
            <template v-if="selectedDept">
              <span class="bc-sep">▸</span>
              <span class="bc-item active" @click="goDept">{{ selectedDept }}</span>
            </template>
          </div>
        </div>
        <div class="center-body">
          <div class="chart-wrap" :class="{ compact: !selectedDept }">
            <div class="chart-box" ref="chartRef"></div>
          </div>
          <div v-if="!selectedDept" class="top10-area">
            <div class="top10-col top10-best">
              <div class="top10-title"><span class="top10-icon">▲</span> TOP 10 最佳</div>
              <div class="top10-list">
                <div
                  v-for="(p, idx) in top10Best" :key="'best-'+p.id"
                  class="top10-row" @click="selectPerson(p)"
                >
                  <span class="top10-rank" :class="{ 'rank-gold': idx === 0, 'rank-silver': idx === 1, 'rank-bronze': idx === 2 }">{{ idx + 1 }}</span>
                  <span class="top10-name">{{ p.name }}</span>
                  <span class="top10-dept">{{ p.department.replace('品质','') }}</span>
                  <span class="top10-score" :style="{ color: gradeColor(p.totalScore) }">{{ p.totalScore.toFixed(1) }}</span>
                  <span class="p-grade" :class="'p-grade-' + getGrade(p.totalScore)">{{ getGrade(p.totalScore) }}</span>
                </div>
              </div>
            </div>
            <div class="top10-col top10-worst">
              <div class="top10-title"><span class="top10-icon down">▼</span> TOP 10 待改进</div>
              <div class="top10-list">
                <div
                  v-for="(p, idx) in top10Worst" :key="'worst-'+p.id"
                  class="top10-row" @click="selectPerson(p)"
                >
                  <span class="top10-rank rank-warn">{{ idx + 1 }}</span>
                  <span class="top10-name">{{ p.name }}</span>
                  <span class="top10-dept">{{ p.department.replace('品质','') }}</span>
                  <span class="top10-score" :style="{ color: gradeColor(p.totalScore) }">{{ p.totalScore.toFixed(1) }}</span>
                  <span class="p-grade" :class="'p-grade-' + getGrade(p.totalScore)">{{ getGrade(p.totalScore) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Person List -->
      <div class="panel">
        <div class="panel-head">
          <div class="panel-title">{{ selectedDept || '全部' }}员工排名</div>
          <span style="font-family:Orbitron;font-size:0.72rem;color:#3d7aaa;">{{ currentPersons.length }}人</span>
        </div>
        <div class="panel-body" style="padding:8px 10px;">
          <div class="person-list">
            <div
              v-for="(p, idx) in currentPersons" :key="p.id"
              class="person-row"
              :class="{ active: selectedPerson?.id === p.id }"
              @click="selectPerson(p)"
            >
              <span class="p-rank">{{ idx + 1 }}</span>
              <span class="p-name">{{ p.name }}</span>
              <span class="p-score" :style="{ color: gradeColor(p.totalScore) }">{{ p.totalScore.toFixed(1) }}</span>
              <span class="p-grade" :class="'p-grade-' + getGrade(p.totalScore)">{{ getGrade(p.totalScore) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Overlay for Person Detail -->
    <Teleport to="body">
      <div v-if="selectedPerson" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">✕</button>
          <div class="modal-hdr">
            <div class="modal-person-info">
              <div>
                <div class="modal-name">{{ selectedPerson.name }}</div>
                <div class="modal-dept">{{ selectedPerson.department }}</div>
              </div>
            </div>
            <div class="modal-score-box">
              <div class="modal-score" :style="{ color: gradeColor(selectedPerson.totalScore) }">
                {{ selectedPerson.totalScore.toFixed(1) }}
              </div>
              <div class="modal-grade-label">
                等级
                <span :style="{ color: gradeColor(selectedPerson.totalScore), fontWeight: 700, fontFamily: 'Orbitron' }">
                  {{ getGrade(selectedPerson.totalScore) }}
                </span>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <table class="metric-table">
              <thead>
                <tr>
                  <th style="min-width:180px;">指标名称</th>
                  <th style="min-width:160px;">得分</th>
                  <th>权重</th>
                  <th>实际值</th>
                  <th>达成率</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(m, i) in selectedPerson.metrics" :key="i">
                  <td><span class="mt-name">{{ m.name }}</span></td>
                  <td>
                    <div class="mt-bar-wrap">
                      <div class="mt-bar">
                        <div class="mt-bar-fill" :style="{
                          width: barPct(m) + '%',
                          background: metricColor(m.score)
                        }"></div>
                      </div>
                      <span class="mt-bar-pct" :style="{ color: metricColor(m.score) }">
                        {{ m.score != null ? m.score.toFixed(1) : '—' }}
                      </span>
                    </div>
                  </td>
                  <td><span class="mt-weight">{{ (m.weight * 100).toFixed(0) }}%</span></td>
                  <td><span class="mt-actual">{{ m.actual ?? '—' }}</span></td>
                  <td>
                    <span class="mt-achieve" :style="{ color: m.achievementRate != null && m.achievementRate >= 1 ? '#00e676' : m.achievementRate != null && m.achievementRate >= 0.6 ? '#00a8ff' : '#ffab00' }">
                      {{ m.achievementRate != null ? (m.achievementRate * 100).toFixed(1) + '%' : '—' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.dashboard { height: 100%; display: flex; flex-direction: column; }
</style>
