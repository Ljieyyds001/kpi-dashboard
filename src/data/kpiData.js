const janData = [
  { id: 1, name: '马松武', department: '品质中心', totalScore: 63.40, metrics: [
    { name: '管报税期净利润额（亿元）', weight: 0.05, actual: '0.8499', achievementRate: 1.2, score: 5 },
    { name: '客户满意度（%）', weight: 0.10, actual: '0', achievementRate: 1, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.38, score: 15 },
    { name: '不良质量成本（万元）', weight: 0.20, actual: '393', achievementRate: 0.89, score: 17.8 },
    { name: 'FAT一次验收合格率（%）', weight: 0.20, actual: '0.9541', achievementRate: 1.004, score: 20 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '体系成熟度评价（分）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '核心关键岗位齐备合格人数（人）', weight: 0.05, actual: '0.04', achievementRate: 1, score: 5 },
    { name: '人工成本占比值（%）', weight: 0.05, actual: '/', achievementRate: null, score: null }
  ]},
  { id: 2, name: '徐艺洋', department: '品质体系部', totalScore: 39.50, metrics: [
    { name: '客户满意度（%）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.25, actual: '0.69', achievementRate: 1.38, score: 15 },
    { name: '不良质量成本（万元）', weight: 0.10, actual: '393', achievementRate: 0.89, score: 8.9 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 3, name: '陈楠', department: '品质体系部', totalScore: 45.57, metrics: [
    { name: '质量月活动策划完成率', weight: 0.25, actual: '0', achievementRate: 0, score: 0 },
    { name: '文件更新及时率（3年以内）', weight: 0.20, actual: '1', achievementRate: 1, score: 20 },
    { name: '体系成熟度评价（分）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '合理化建议达成率', weight: 0.25, actual: '0.6', achievementRate: 0.706, score: 17.65 },
    { name: 'KPI月度统计分析', weight: 0.10, actual: '63.4', achievementRate: 0.793, score: 7.93 }
  ]},
  { id: 4, name: '陈华容', department: '品质体系部', totalScore: 41.58, metrics: [
    { name: '品质部门预算达成率', weight: 0.10, actual: '1', achievementRate: 1, score: 10 },
    { name: '考勤维护及时性和准确性', weight: 0.10, actual: '1', achievementRate: 1, score: 10 },
    { name: '部门重点工作闭环率', weight: 0.20, actual: '0.18', achievementRate: 0.212, score: 4.24 },
    { name: '仪器校准及时率', weight: 0.20, actual: '0.85', achievementRate: 0.867, score: 17.35 },
    { name: '固定资产投资管理达成率', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '品质学院培训达成率', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 5, name: '卓恩达', department: '研发品质部', totalScore: 43.21, metrics: [
    { name: '客户满意度（%）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.10, actual: '0.961', achievementRate: 0.981, score: 9.81 },
    { name: '不良质量成本（万元）', weight: 0.20, actual: '393', achievementRate: 0.89, score: 17.8 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '体系成熟度评价（分）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '研发项目财务成功率', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 6, name: '何鹏飞', department: '研发品质部', totalScore: 75.70, metrics: [
    { name: '不良质量成本（产品线一）', weight: 0.25, actual: '33.66', achievementRate: 1.526, score: 25 },
    { name: 'FAT一次验收合格率（产品线一）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'QCC项目完成数量', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '产品安全事故发生次数（产品线一）', weight: 0.10, actual: '0.01', achievementRate: 0.9, score: 9 },
    { name: '大部屋问题关闭率（产品线一）', weight: 0.20, actual: '0.7647', achievementRate: 0.85, score: 16.99 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.10, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 7, name: '刘大森', department: '研发品质部', totalScore: 63.66, metrics: [
    { name: '不良质量成本（产品线二）', weight: 0.25, actual: '9.89', achievementRate: 1.529, score: 25 },
    { name: 'FAT一次验收合格率（产品线二）', weight: 0.10, actual: '0.958', achievementRate: 0.978, score: 9.78 },
    { name: 'QCC项目完成数量', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '大部屋问题关闭率（产品线二）', weight: 0.15, actual: '0.8261', achievementRate: 0.888, score: 13.32 },
    { name: '产品安全事故发生次数（产品线二）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: 'ECN审核、复盘', weight: 0.10, actual: '0.5', achievementRate: 0.556, score: 5.56 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.10, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 8, name: '王兵', department: '研发品质部', totalScore: 87.64, metrics: [
    { name: '不良质量成本（产品线三）', weight: 0.35, actual: '13.37', achievementRate: 1.045, score: 35 },
    { name: 'FAT一次验收合格率（产品三线）', weight: 0.15, actual: '0.962', achievementRate: 0.982, score: 14.72 },
    { name: '产品安全事故发生次数（产品三线）', weight: 0.10, actual: '1', achievementRate: 0.9, score: 9 },
    { name: '大部屋问题关闭率（产品三线）', weight: 0.20, actual: '0.8511', achievementRate: 0.946, score: 18.91 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.10, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 9, name: '张旭冉', department: '研发品质部', totalScore: 45.06, metrics: [
    { name: '不良质量成本（万元）', weight: 0.15, actual: '393', achievementRate: 0.89, score: 13.35 },
    { name: '大部屋问题关闭率（研发问题）', weight: 0.15, actual: '0.9234', achievementRate: 1.086, score: 15 },
    { name: 'QCC项目完成数量', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键件测试能力覆盖率', weight: 0.20, actual: '0.1', achievementRate: 0.1, score: 2 },
    { name: '物料标准化率', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 }
  ]},
  { id: 10, name: '郭祖祥', department: '研发品质部', totalScore: 46.16, metrics: [
    { name: '不良质量成本（万元）', weight: 0.25, actual: '393', achievementRate: 0.89, score: 22.25 },
    { name: '关键件测试能力覆盖率', weight: 0.20, actual: '0.1', achievementRate: 0.1, score: 2 },
    { name: '设备维护状况及SOP完整性', weight: 0.10, actual: '0.568', achievementRate: 0.631, score: 6.31 },
    { name: 'QCC项目完成数量', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '物料标准化率', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 }
  ]},
  { id: 11, name: '王理想', department: '供应链品质部', totalScore: 47.20, metrics: [
    { name: '客户满意度（%）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '不良质量成本（万元）(光伏)', weight: 0.30, actual: '393', achievementRate: 0.89, score: 26.7 },
    { name: '来料合格率（%）', weight: 0.15, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '体系成熟度评价（分）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.05, actual: '0.961', achievementRate: 0.981, score: 4.9 }
  ]},
  { id: 12, name: '王贝', department: '供应链品质部', totalScore: 40.20, metrics: [
    { name: '不良质量成本（石英管、小舟、小件）', weight: 0.10, actual: '11.31', achievementRate: 1.766, score: 25 },
    { name: '物料质量损失追责达成率（石英管、小舟）', weight: 0.15, actual: '8.643', achievementRate: 9.294, score: 0.2 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.30, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '来料合格率（%）', weight: 0.15, actual: '0.8472', achievementRate: -0.713, score: 0 },
    { name: '物料上线投诉次数', weight: 0.20, actual: '5', achievementRate: -1, score: 0 },
    { name: 'TOP问题双归零', weight: 0.05, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 13, name: '曹煜', department: '供应链品质部', totalScore: 52.16, metrics: [
    { name: '不良质量成本（碳化硅桨+石英舟托、炉门）', weight: 0.25, actual: '5.54', achievementRate: 1.602, score: 25 },
    { name: '物料质量损失追责达成率', weight: 0.20, actual: '0.0973', achievementRate: 0.108, score: 2.16 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.8472', achievementRate: -0.713, score: 0 },
    { name: '物料上线投诉次数', weight: 0.10, actual: '0', achievementRate: 0, score: 10 },
    { name: 'TOP问题双归零', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 14, name: '何雨蝶', department: '供应链品质部', totalScore: 48.12, metrics: [
    { name: '不良质量成本（内偶、继电器、密封圈、PLC、辅热管）', weight: 0.20, actual: '21.38', achievementRate: 0.464, score: 9.27 },
    { name: '物料质量损失追责达成率', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '物料上线异常工时', weight: 0.10, actual: '23.5', achievementRate: 0.825, score: 8.25 },
    { name: '物料上线批不合格率', weight: 0.10, actual: '0.9975', achievementRate: 0.999, score: 9.99 },
    { name: '品质相关报表完成率', weight: 0.05, actual: '1', achievementRate: 1, score: 5 }
  ]},
  { id: 15, name: '刘航', department: '供应链品质部', totalScore: 47.44, metrics: [
    { name: '不良质量成本（模组、干泵、热场、流量计、真空计）', weight: 0.20, actual: '21.38', achievementRate: 0.464, score: 9.27 },
    { name: '物料质量损失追责达成率', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '物料上线异常工时', weight: 0.10, actual: '23.5', achievementRate: 0.825, score: 8.25 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0.9975', achievementRate: 0.999, score: 10 },
    { name: 'TOP问题双归零', weight: 0.10, actual: '1', achievementRate: 1, score: 5 }
  ]},
  { id: 16, name: '朱东岭', department: '供应链品质部', totalScore: 65.60, metrics: [
    { name: '不良质量成本（机架、法兰）', weight: 0.15, actual: '0.45', achievementRate: 1.55, score: 15 },
    { name: '物料质量损失追责达成率', weight: 0.20, actual: '1.8222', achievementRate: 1.918, score: 20 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.10, actual: '0.69', achievementRate: 1.15, score: 10 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '物料上线异常工时', weight: 0.20, actual: '10', achievementRate: 1, score: 20 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TOP问题双归零', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 17, name: '赵云', department: '供应链品质部', totalScore: 45.80, metrics: [
    { name: '不良质量成本（蝶阀、腔体、铝舟）', weight: 0.20, actual: '1.07', achievementRate: 1.599, score: 20 },
    { name: '物料质量损失追责达成率', weight: 0.20, actual: '1.2336', achievementRate: 1.371, score: 0.2 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 15 },
    { name: '来料合格率（%）', weight: 0.10, actual: '0.9003', achievementRate: 0.17, score: 0.6 },
    { name: '物料上线异常工时', weight: 0.10, actual: '0', achievementRate: 1, score: 10 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TOP问题双归零', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 18, name: '王瓒', department: '制程品质部', totalScore: 64.42, metrics: [
    { name: '客户满意度（%）', weight: 0.10, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.20, actual: '0.69', achievementRate: 1.15, score: 20 },
    { name: 'FAT一次合格率（%）', weight: 0.30, actual: '0.961', achievementRate: 0.981, score: 29.42 },
    { name: '不良质量成本（售后工时损失）', weight: 0.15, actual: '28', achievementRate: 1.3, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 19, name: '朱静茹', department: '制程品质部', totalScore: 53.63, metrics: [
    { name: '品质数字化成熟度(%)', weight: 0.30, actual: '0.4921', achievementRate: 0.579, score: 17.37 },
    { name: '品质数字化体系流程在线率(%)', weight: 0.15, actual: '0.35', achievementRate: 0.412, score: 6.18 },
    { name: '品质数字化体系流程发布率(%)', weight: 0.15, actual: '0.4375', achievementRate: 0.599, score: 8.99 },
    { name: '品质数字化体系流程合格率(%)', weight: 0.15, actual: '0.31', achievementRate: 0.517, score: 7.75 },
    { name: '不良质量成本（万元）', weight: 0.15, actual: '393', achievementRate: 0.89, score: 13.35 }
  ]},
  { id: 20, name: '孙琛', department: '制程品质部', totalScore: 57.32, metrics: [
    { name: '不良质量成本（万元）', weight: 0.20, actual: '393', achievementRate: 0.89, score: 17.8 },
    { name: 'QCC项目推进', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（%)', weight: 0.25, actual: '0.961', achievementRate: 0.981, score: 24.52 },
    { name: 'FAT标准受控发布率', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '精益改善周（次）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 21, name: '农华恒', department: '制程品质部', totalScore: 54.54, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.20, actual: '28', achievementRate: 1.3, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（产品三线）', weight: 0.25, actual: '0.962', achievementRate: 0.982, score: 24.54 },
    { name: 'FAT标准受控发布率（产品三线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: 'QCC项目完成数量', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 22, name: '范子建', department: '制程品质部', totalScore: 69.52, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.20, actual: '28', achievementRate: 1.3, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键岗位作业符合率', weight: 0.15, actual: '0.977', achievementRate: 1.028, score: 15 },
    { name: 'FAT一次验收合格率（产品一线）', weight: 0.25, actual: '0.961', achievementRate: 0.981, score: 24.52 },
    { name: 'FAT标准受控发布率（产品一线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 }
  ]},
  { id: 23, name: '苏磊', department: '制程品质部', totalScore: 68.66, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.20, actual: '28', achievementRate: 1.3, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（产品二线）', weight: 0.25, actual: '0.958', achievementRate: 0.978, score: 24.44 },
    { name: 'FAT标准受控发布率（产品二线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '首台机关键问题关闭率', weight: 0.15, actual: '0.948', achievementRate: 0.948, score: 14.22 }
  ]},
  { id: 24, name: '汪振宇', department: '客户品质部', totalScore: 48.06, metrics: [
    { name: '客户满意度（%）', weight: 0.30, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.69', achievementRate: 1.15, score: 20 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: '不良质量成本（万元）', weight: 0.15, actual: '393', achievementRate: 0.89, score: 13.35 },
    { name: '体系成熟度评价（分）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 25, name: '朱雯晖', department: '客户品质部', totalScore: 44.71, metrics: [
    { name: '不良质量成本率（晶科客户基地）', weight: 0.30, actual: '7.04', achievementRate: 1.77, score: 30 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 26, name: '张佩', department: '客户品质部', totalScore: 44.71, metrics: [
    { name: '不良质量成本率（隆基客户基地）', weight: 0.30, actual: '9.88', achievementRate: 1.887, score: 30 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 27, name: '杨二利', department: '客户品质部', totalScore: 29.71, metrics: [
    { name: '不良质量成本率（爱旭客户基地）', weight: 0.30, actual: '46.35', achievementRate: -2.397, score: 0 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 28, name: '刘日明', department: '客户品质部', totalScore: 59.71, metrics: [
    { name: '不良质量成本率（海外客户）', weight: 0.30, actual: '39.9', achievementRate: 1.129, score: 30 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '2', achievementRate: 0, score: 15 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 29, name: '刘研', department: '客户品质部', totalScore: 44.71, metrics: [
    { name: '不良质量成本率（国内其他客户基地）', weight: 0.30, actual: '22.87', achievementRate: 1.645, score: 30 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 30, name: '韦尚好', department: '客户品质部', totalScore: 14.71, metrics: [
    { name: '不良质量成本率（太原晶科、鄂尔多斯隆基）', weight: 0.30, actual: '171.57', achievementRate: -0.088, score: 0 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 31, name: '车彦胜', department: '客户品质部', totalScore: 14.71, metrics: [
    { name: '不良质量成本率（宜宾东磁、宜宾英发）', weight: 0.30, actual: '81.42', achievementRate: -0.443, score: 0 },
    { name: '客户满意度（%）', weight: 0.20, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.961', achievementRate: 0.981, score: 14.71 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.10, actual: '0', achievementRate: 0, score: 0 }
  ]}
]

const febData = [
  { id: 1, name: '马松武', department: '品质中心', totalScore: 70, metrics: [
    { name: '管报税期净利润额（亿元）', weight: 0.05, actual: '1.309', achievementRate: 1.2, score: 5 },
    { name: '客户满意度（%）', weight: 0.1, actual: '0', achievementRate: 1, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.558, score: 15 },
    { name: '不良质量成本（万元）', weight: 0.2, actual: '251.46', achievementRate: 1, score: 20 },
    { name: 'FAT一次验收合格率（%）', weight: 0.2, actual: '0.9571', achievementRate: 1.0075, score: 20 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: -1.2967, score: 0 },
    { name: '体系成熟度评价（分）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '核心关键岗位齐备合格人数（人）', weight: 0.05, actual: '6', achievementRate: 1, score: 5 },
    { name: '人工成本占比值（%）', weight: 0.05, actual: '0.0029', achievementRate: 1, score: 5 }
  ]},
  { id: 2, name: '徐艺洋', department: '品质体系部', totalScore: 40, metrics: [
    { name: '客户满意度（%）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.25, actual: '0.779', achievementRate: 1.558, score: 15 },
    { name: '不良质量成本（万元）', weight: 0.1, actual: '251.46', achievementRate: 1, score: 10 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: -1.2967, score: 0 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 3, name: '陈楠', department: '品质体系部', totalScore: 47.87, metrics: [
    { name: '质量月活动策划完成率', weight: 0.25, actual: '0', achievementRate: 0, score: 0 },
    { name: '文件更新及时率（3年以内）', weight: 0.2, actual: '1', achievementRate: 1, score: 20 },
    { name: '体系成熟度评价（分）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '合理化建议达成率', weight: 0.25, actual: '0.65', achievementRate: 0.7647, score: 19.12 },
    { name: 'KPI月度统计分析', weight: 0.1, actual: '63.4', achievementRate: 0.875, score: 8.75 }
  ]},
  { id: 4, name: '陈华容', department: '品质体系部', totalScore: 63.56, metrics: [
    { name: '品质部门预算达成率', weight: 0.1, actual: '1', achievementRate: 1, score: 10 },
    { name: '考勤维护及时性和准确性', weight: 0.1, actual: '1', achievementRate: 1, score: 10 },
    { name: '部门重点工作闭环率', weight: 0.2, actual: '0.39', achievementRate: 0.4588, score: 9.18 },
    { name: '仪器校准及时率', weight: 0.2, actual: '0.95', achievementRate: 0.9694, score: 19.39 },
    { name: '固定资产投资管理达成率', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '品质学院培训达成率', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 5, name: '卓恩达', department: '研发品质部', totalScore: 44.77, metrics: [
    { name: '客户满意度（%）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.1, actual: '0.9571', achievementRate: 0.9766, score: 9.77 },
    { name: '不良质量成本（万元）', weight: 0.2, actual: '251.46', achievementRate: 1, score: 20 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '体系成熟度评价（分）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '研发项目财务成功率', weight: 0.1, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 6, name: '何鹏飞', department: '研发品质部', totalScore: 78.58, metrics: [
    { name: '不良质量成本（产品线一）', weight: 0.25, actual: '53', achievementRate: 1.675, score: 25 },
    { name: 'FAT一次验收合格率（产品线一）', weight: 0.15, actual: '0.9528', achievementRate: 0.9722, score: 14.58 },
    { name: 'QCC项目完成数量', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '产品安全事故发生次数（产品线一）', weight: 0.1, actual: '1', achievementRate: 0.9, score: 9 },
    { name: '大部屋问题关闭率（产品线一）', weight: 0.2, actual: '0.9481', achievementRate: 1.0534, score: 20 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.1, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 7, name: '刘大森', department: '研发品质部', totalScore: 68.11, metrics: [
    { name: '不良质量成本（产品线二）', weight: 0.25, actual: '4', achievementRate: 1.8095, score: 25 },
    { name: 'FAT一次验收合格率（产品线二）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: 'QCC项目完成数量', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '大部屋问题关闭率（产品线二）', weight: 0.15, actual: '0.875', achievementRate: 0.9409, score: 14.11 },
    { name: '产品安全事故发生次数（产品线二）', weight: 0.1, actual: '1', achievementRate: 0.9, score: 9 },
    { name: 'ECN审核、复盘', weight: 0.1, actual: '1', achievementRate: 1.1111, score: 10 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.1, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 8, name: '王兵', department: '研发品质部', totalScore: 88.87, metrics: [
    { name: '不良质量成本（产品线三）', weight: 0.35, actual: '9', achievementRate: 1.3571, score: 35 },
    { name: 'FAT一次验收合格率（产品三线）', weight: 0.15, actual: '0.9687', achievementRate: 0.9885, score: 14.83 },
    { name: '产品安全事故发生次数（产品三线）', weight: 0.1, actual: '0', achievementRate: 1, score: 10 },
    { name: '大部屋问题关闭率（产品三线）', weight: 0.2, actual: '0.8571', achievementRate: 0.9523, score: 19.05 },
    { name: 'TR交付件齐备合格率（%）', weight: 0.1, actual: '1', achievementRate: 1, score: 10 }
  ]},
  { id: 9, name: '张旭冉', department: '研发品质部', totalScore: 52.32, metrics: [
    { name: '不良质量成本（万元）', weight: 0.15, actual: '251.46', achievementRate: 1, score: 15 },
    { name: '大部屋问题关闭率（研发问题）', weight: 0.15, actual: '0.8934', achievementRate: 1.0511, score: 15 },
    { name: 'QCC项目完成数量', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键件测试能力覆盖率', weight: 0.2, actual: '0.33', achievementRate: 0.33, score: 6.6 },
    { name: '物料标准化率', weight: 0.15, actual: '1', achievementRate: 0.0714, score: 1.07 },
    { name: 'FAT一次验收合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 }
  ]},
  { id: 10, name: '郭祖祥', department: '研发品质部', totalScore: 46.11, metrics: [
    { name: '不良质量成本（万元）', weight: 0.25, actual: '251.46', achievementRate: 1, score: 25 },
    { name: '关键件测试能力覆盖率', weight: 0.2, actual: '0.33', achievementRate: 0.33, score: 6.6 },
    { name: '设备维护状况及SOP完整性', weight: 0.1, actual: '0.8', achievementRate: 0.8889, score: 8.89 },
    { name: 'QCC项目完成数量', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '物料标准化率', weight: 0.15, actual: '3', achievementRate: 0.375, score: 5.62 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 }
  ]},
  { id: 11, name: '王理想', department: '供应链品质部', totalScore: 49.88, metrics: [
    { name: '客户满意度（%）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '不良质量成本（万元）(光伏)', weight: 0.3, actual: '251.46', achievementRate: 1, score: 30 },
    { name: '来料合格率（%）', weight: 0.15, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '体系成熟度评价（分）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.05, actual: '0.9571', achievementRate: 0.9766, score: 4.88 }
  ]},
  { id: 12, name: '王贝', department: '供应链品质部', totalScore: 50.2, metrics: [
    { name: '不良质量成本（石英管、小舟、小件）', weight: 0.1, actual: '7.04', achievementRate: 1.8546, score: 25 },
    { name: '物料质量损失追责达成率（石英管、小舟）', weight: 0.15, actual: '0', achievementRate: 0, score: 0.2 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.3, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '来料合格率（%）', weight: 0.15, actual: '0.703', achievementRate: -3.1167, score: 0 },
    { name: '物料上线投诉次数', weight: 0.2, actual: '1', achievementRate: 1, score: 10 },
    { name: 'TOP问题双归零', weight: 0.05, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 13, name: '曹煜', department: '供应链品质部', totalScore: 58.65, metrics: [
    { name: '不良质量成本（碳化硅桨+石英舟托、炉门）', weight: 0.25, actual: '3.39', achievementRate: 1.7564, score: 25 },
    { name: '物料质量损失追责达成率', weight: 0.2, actual: '0.3894', achievementRate: 0.4327, score: 8.65 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.7003', achievementRate: -3.1617, score: 0 },
    { name: '物料上线投诉次数', weight: 0.1, actual: '0', achievementRate: 0, score: 10 },
    { name: 'TOP问题双归零', weight: 0.1, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 14, name: '何雨蝶', department: '供应链品质部', totalScore: 59.96, metrics: [
    { name: '不良质量成本（内偶、继电器、密封圈、PLC、辅热管）', weight: 0.2, actual: '1.26', achievementRate: 1.9095, score: 20 },
    { name: '物料质量损失追责达成率', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '物料上线异常工时', weight: 0.1, actual: '0', achievementRate: 2, score: 10 },
    { name: '物料上线批不合格率', weight: 0.1, actual: '0.9944', achievementRate: 0.9964, score: 9.96 },
    { name: '品质相关报表完成率', weight: 0.05, actual: '1', achievementRate: 1, score: 5 }
  ]},
  { id: 15, name: '刘航', department: '供应链品质部', totalScore: 47.51, metrics: [
    { name: '不良质量成本（模组、干泵、热场、流量计、真空计）', weight: 0.2, actual: '1.26', achievementRate: 1.9095, score: 20 },
    { name: '物料质量损失追责达成率', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '物料上线异常工时', weight: 0.1, actual: '0', achievementRate: 2, score: 10 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0.9944', achievementRate: 0.9964, score: 9.96 },
    { name: 'TOP问题双归零', weight: 0.1, actual: '1', achievementRate: 1, score: 5 }
  ]},
  { id: 16, name: '朱东岭', department: '供应链品质部', totalScore: 65, metrics: [
    { name: '不良质量成本（机架、法兰）', weight: 0.15, actual: '0.2', achievementRate: 1.8, score: 15 },
    { name: '物料质量损失追责达成率', weight: 0.2, actual: '3.075', achievementRate: 3.2368, score: 20 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.1, actual: '0.779', achievementRate: 1.2983, score: 10 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '物料上线异常工时', weight: 0.2, actual: '3', achievementRate: 1, score: 20 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TOP问题双归零', weight: 0.1, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 17, name: '赵云', department: '供应链品质部', totalScore: 47.34, metrics: [
    { name: '不良质量成本（蝶阀、腔体、铝舟）', weight: 0.2, actual: '0.95', achievementRate: 1.6438, score: 20 },
    { name: '物料质量损失追责达成率', weight: 0.2, actual: '0.1053', achievementRate: 0.117, score: 2.34 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 15 },
    { name: '来料合格率（%）', weight: 0.1, actual: '0.8122', achievementRate: 0.17, score: 0 },
    { name: '物料上线异常工时', weight: 0.1, actual: '0', achievementRate: 1, score: 10 },
    { name: 'QCC项目完成数量', weight: 0.05, actual: '0', achievementRate: 0, score: 0 },
    { name: 'TOP问题双归零', weight: 0.1, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 18, name: '王瓒', department: '制程品质部', totalScore: 64.3, metrics: [
    { name: '客户满意度（%）', weight: 0.1, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.2, actual: '0.779', achievementRate: 1.2983, score: 20 },
    { name: 'FAT一次合格率（%）', weight: 0.3, actual: '0.9571', achievementRate: 0.9766, score: 29.3 },
    { name: '不良质量成本（售后工时损失）', weight: 0.15, actual: '15', achievementRate: 1.625, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 19, name: '朱静茹', department: '制程品质部', totalScore: 82.38, metrics: [
    { name: '品质数字化成熟度(%)', weight: 0.3, actual: '0.55', achievementRate: 0.9483, score: 28.45 },
    { name: '品质数字化体系流程在线率(%)', weight: 0.15, actual: '0.44', achievementRate: 0.9167, score: 13.75 },
    { name: '品质数字化体系流程发布率(%)', weight: 0.15, actual: '0.44', achievementRate: 0.8627, score: 12.94 },
    { name: '品质数字化体系流程合格率(%)', weight: 0.15, actual: '0.31', achievementRate: 0.8158, score: 12.24 },
    { name: '不良质量成本（万元）', weight: 0.15, actual: '251.46', achievementRate: 1, score: 15 }
  ]},
  { id: 20, name: '孙琛', department: '制程品质部', totalScore: 59.42, metrics: [
    { name: '不良质量成本（万元）', weight: 0.2, actual: '251.46', achievementRate: 1, score: 20 },
    { name: 'QCC项目推进', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（%）', weight: 0.25, actual: '0.9571', achievementRate: 0.9766, score: 24.42 },
    { name: 'FAT标准受控发布率', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '精益改善周（次）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 21, name: '农华恒', department: '制程品质部', totalScore: 59.71, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.2, actual: '15', achievementRate: 1.625, score: 20 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（产品三线）', weight: 0.25, actual: '0.9687', achievementRate: 0.9885, score: 24.71 },
    { name: 'FAT标准受控发布率（产品三线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: 'QCC项目完成数量', weight: 0.15, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 22, name: '范子建', department: '制程品质部', totalScore: 69.31, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.2, actual: '15', achievementRate: 1.625, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键岗位作业符合率', weight: 0.15, actual: '0.997', achievementRate: 1.0495, score: 15 },
    { name: 'FAT一次验收合格率（产品一线）', weight: 0.25, actual: '0.9528', achievementRate: 0.9722, score: 24.31 },
    { name: 'FAT标准受控发布率（产品一线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 }
  ]},
  { id: 23, name: '苏磊', department: '制程品质部', totalScore: 45, metrics: [
    { name: '不良质量成本（售后工时损失）', weight: 0.2, actual: '15', achievementRate: 1.625, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次验收合格率（产品二线）', weight: 0.25, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT标准受控发布率（产品二线）', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '首台机关键问题关闭率', weight: 0.15, actual: '1', achievementRate: 1, score: 15 }
  ]},
  { id: 24, name: '汪振宇', department: '客户品质部', totalScore: 49.65, metrics: [
    { name: '客户满意度（%）', weight: 0.3, actual: '0', achievementRate: 0, score: 0 },
    { name: '关键物料追溯闭环覆盖率（%）', weight: 0.15, actual: '0.779', achievementRate: 1.2983, score: 20 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: '不良质量成本（万元）', weight: 0.15, actual: '251.46', achievementRate: 1, score: 15 },
    { name: '体系成熟度评价（分）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 }
  ]},
  { id: 25, name: '朱雯晖', department: '客户品质部', totalScore: 44.65, metrics: [
    { name: '不良质量成本率（晶科客户基地）', weight: 0.3, actual: '8.75', achievementRate: 1.7139, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.1, actual: '74', achievementRate: 0.8706, score: 8.71 }
  ]},
  { id: 26, name: '张佩', department: '客户品质部', totalScore: 54.3, metrics: [
    { name: '不良质量成本率（隆基客户基地）', weight: 0.3, actual: '12.07', achievementRate: 1.8623, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.1, actual: '82', achievementRate: 0.9647, score: 9.65 }
  ]},
  { id: 27, name: '杨二利', department: '客户品质部', totalScore: 48.09, metrics: [
    { name: '不良质量成本率（爱旭客户基地）', weight: 0.3, actual: '17.84', achievementRate: 0.3077, score: 9.23 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '1', achievementRate: 1, score: 15 },
    { name: '项目交付线评分', weight: 0.1, actual: '78.33', achievementRate: 0.9215, score: 9.22 }
  ]},
  { id: 28, name: '刘日明', department: '客户品质部', totalScore: 66.3, metrics: [
    { name: '不良质量成本率（海外客户）', weight: 0.3, actual: '20.09', achievementRate: 1.5617, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '4', achievementRate: 2, score: 12 },
    { name: '项目交付线评分', weight: 0.1, actual: '82', achievementRate: 0.9647, score: 9.65 }
  ]},
  { id: 29, name: '刘研', department: '客户品质部', totalScore: 54.3, metrics: [
    { name: '不良质量成本率（国内其他客户基地）', weight: 0.3, actual: '3.53', achievementRate: 1.9451, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.1, actual: '82', achievementRate: 0.9647, score: 9.65 }
  ]},
  { id: 30, name: '韦尚好', department: '客户品质部', totalScore: 53.59, metrics: [
    { name: '不良质量成本率（太原晶科、鄂尔多斯隆基）', weight: 0.3, actual: '32.39', achievementRate: 1.6058, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.1, actual: '76', achievementRate: 0.8941, score: 8.94 }
  ]},
  { id: 31, name: '车彦胜', department: '客户品质部', totalScore: 54.3, metrics: [
    { name: '不良质量成本率（宜宾东磁、宜宾英发）', weight: 0.3, actual: '14.85', achievementRate: 1.5545, score: 30 },
    { name: '客户满意度（%）', weight: 0.2, actual: '0', achievementRate: 0, score: 0 },
    { name: 'FAT一次合格率（%）', weight: 0.15, actual: '0.9571', achievementRate: 0.9766, score: 14.65 },
    { name: 'TOP问题双归零', weight: 0.15, actual: '0', achievementRate: 0, score: 0 },
    { name: '项目交付线评分', weight: 0.1, actual: '82', achievementRate: 0.9647, score: 9.65 }
  ]}
]

export const allData = {
  '2026年1月': janData,
  '2026年2月': febData,
}

export const months = Object.keys(allData)

export default janData
