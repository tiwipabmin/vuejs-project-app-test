import moment from 'moment'
import axios from 'axios'

const RESEARCH_PROJECT = {
  id: '222301-02',
  project_name: 'จักรวาลภาพยนตร์มาร์เวล',
  description:
    '<p>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span>	<span style="color: rgb(32, 33, 34);">เป็นสื่อแฟรนไชส์อเมริกันและจักรวาลร่วมซึ่งมีศูนย์กลางอยู่ที่ภาพยนตร์ชุดของภาพยนตร์ซูเปอร์ฮีโรที่สร้างโดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลสตูดิโอส์</span>	<span style="color: rgb(32, 33, 34);">ซึ่งสร้างจากตัวละครที่ปรากฏอยู่ในหนังสือการ์ตูนอเมริกันที่ตีพิมพ์โดย&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">มาร์เวลคอมิกส์ </span><span style="color: rgb(32, 33, 34);">แฟรนไชส์ยังประกอบด้วย หนังสือการ์ตูน ภาพยนตร์สั้น ละครชุดโทรทัศน์และดิจิทัลซีรีส์ จักรวาลร่วมนั้นเหมือนกับ&nbsp;</span><span style="background-color: rgb(255, 255, 255); color: rgb(51, 102, 204);">จักรวาลมาร์เวล</span> <span style="color: rgb(32, 33, 34);">ในหนังสือการ์ตูน ที่มีการข้ามฝั่งระหว่างองค์ประกอบโครงเรื่องทั่วไป สถานที่ดำเนินเรื่อง นักแสดงและตัวละคร</span></p>',
  progressStatus: 'drafted',
  start_date: '01.01.2023',
  end_date: '01.01.2023',
  pi_id: '1',
  is_quantitative_model_used: false,
  is_qualitative_model_used: true,
  is_hybrid_model_used: false,
}

// initial state
const state = () => ({
  id: '000000-00',
  projectName: 'no projectName',
  description: 'no description',
  progressStatus: 'no progressStatus',
  startDate: 'no startDate',
  endDate: 'no endDate',
  piId: 'no piId',
  isQuantiMu: false, // is_quantitative_model_used
  isQualiMu: false, // is_qualitative_model_used
  isHybMu: false, // is_hybrid_model_used
})

// getters
const getters = {
  getBuddistDate: (_) => (date) => {
    return date ? moment(date).add(543, 'years').format('DD/MM/YYYY') : null
  },
  getDate: (_) => (date) => {
    return date ? moment(date).add(0, 'years').format('DD/MM/YYYY') : null
  },
  getBuddistDateTime: (_) => (date) => {
    return date ? moment(date).add(543, 'years').format('DD/MM/YYYY เวลา HH:mm:ss น.') : null
  },
  getAll(state) {
    return {
      id: state.id,
      projectName: state.projectName,
      description: state.description,
      progressStatus: state.progressStatus,
      startDate: state.startDate,
      endDate: state.endDate,
      piId: state.piId,
      isQuantiMu: state.isQuantiMu, // is_quantitative_model_used
      isQualiMu: state.isQualiMu, // is_qualitative_model_used
      isHybMu: state.isHybMu, // is_hybrid_model_used
    }
  },
}

// actions
const actions = {
  async fetchResearchProject({ commit }, rpId = null) {
    console.log('>> fetchResearchProject')
    console.log(rpId)
    await axios
    .get('../../../../api/research/show/selected/project/', {
      params: {
        rp_id: rpId,
      },
    })
    .then((response) => {
      console.log('success')
      console.log(response.data.result)
      const res = response.data.result
      console.log(res)
      commit('SET_ALL', res)
      
    })
    .catch((error) => {
      console.error(error)
    })
    // const res = { ...RESEARCH_PROJECT }
    // commit('SET_ALL', res)
  },
  async fetchResearchProjectAssr({ commit }, rpId = null) {
    console.log('>> fetchResearchProject')
    console.log(rpId)
    await axios
    .get('../../../../../api/research/show/selected/project/', {
      params: {
        rp_id: rpId,
      },
    })
    .then((response) => {
      // console.log('success')
      // console.log(response.data.result)
      const res = response.data.result
      console.log(res)
      commit('SET_ALL', res)
      
    })
    .catch((error) => {
      console.error(error)
    })
    // const res = { ...RESEARCH_PROJECT }
    // commit('SET_ALL', res)
  },
  updateAll({ commit }, payload = {}) {
    commit('SET_ALL', payload)
  },
  updateId({ commit }, id = null) {
    commit('SET_ID', id)
  },
  updateProjectName({ commit }, projectName = null) {
    commit('SET_PROJECT_NAME', projectName)
  },
  updateDescription({ commit }, description = null) {
    commit('SET_DESCRIPTION', description)
  },
  updateProgressStatus({ commit }, progressStatus = null) {
    commit('SET_PROGRESS_STATUS', progressStatus)
  },
  updateStartDate({ commit }, startDate = null) {
    commit('SET_START_DATE', startDate)
  },
  updateEndDate({ commit }, endDate = null) {
    commit('SET_END_DATE', endDate)
  },
  updatePiId({ commit }, piId = null) {
    commit('SET_PI_ID', piId)
  },
  updateIsQuantitativeModelUsed({ commit }, isQuantiMu = null) {
    commit('SET_IS_QUANTITATIVE_MODEL_USED', isQuantiMu)
  },
  updateIsQualitativeModelUsed({ commit }, isQualiMu = null) {
    commit('SET_IS_QUALITATIVE_MODEL_USED', isQualiMu)
  },
  updateIsHybridModelUsed({ commit }, isHybMu = null) {
    commit('SET_IS_HYBRID_MODEL_USED', isHybMu)
  },
}

// mutations
const mutations = {
  SET_ALL(state, payload) {
    state.id = payload.id ?? '000000-00'
    state.projectName = payload.project_name ?? 'no projectName'
    state.description = payload.description ?? 'no description'
    state.progressStatus = payload.progressStatus ?? 'no progressStatus'
    state.startDate = payload.start_date ?? 'no startDate'
    state.endDate = payload.end_date ?? 'no endDate'
    state.piId = payload.pi_id ?? 'no piId'
    state.isQuantiMu = payload.is_quantitative_model_used ?? false
    state.isQualiMu = payload.is_qualitative_model_used ?? false
    state.isHybMu = payload.is_hybrid_model_used ?? false
  },
  SET_ID(state, id) {
    state.id = id ?? '000000-00'
  },
  SET_PROJECT_NAME(state, projectName) {
    state.projectName = projectName ?? 'no projectName'
  },
  SET_DESCRIPTION(state, description) {
    state.description = description ?? 'no description'
  },
  SET_PROGRESS_STATUS(state, progressStatus) {
    state.progressStatus = progressStatus ?? 'no progressStatus'
  },
  SET_START_DATE(state, startDate) {
    state.startDate = startDate ?? 'no startDate'
  },
  SET_END_DATE(state, endDate) {
    state.endDate = endDate ?? 'no endDate'
  },
  SET_PI_ID(state, piId) {
    state.piId = piId ?? 'no piId'
  },
  SET_IS_QUANTITATIVE_MODEL_USED(state, isQuantiMu) {
    state.isQuantiMu = isQuantiMu ?? false
  },
  SET_IS_QUALITATIVE_MODEL_USED(state, isQualiMu) {
    state.isQualiMu = isQualiMu ?? false
  },
  SET_IS_HYBRID_MODEL_USED(state, isHybMu) {
    state.isHybMu = isHybMu ?? false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
