import moment from 'moment'
import axios from 'axios'

const PERSONAL_PATIENTS = {
  hn_number: '000000-00',
  first_name: 'พรศักดิ์',
  last_name: 'ส่องแสง',
  dob: '1970-01-01',
  age_at_reg: '53',
  gender: 'ชาย',
  weight: null,
  height: null,
  age: '',
  bmi: '',
}

// initial state
const state = () => ({
  hnNumber: '000000-00',
  fname: 'no fname',
  lname: 'no lname',
  gender: 'no gender',
  dob: 'no dob',
  ageAtReg: 'no ageAtReg',
  age: '', // Error or NaN or Null
  weight: null,
  height: null,
  bmi: '',
})

// getters
const getters = {
  getBuddistDate: (_) => (date) => {
    return date ? moment(date).add(543, 'years').format('DD/MM/YYYY') : null
  },
  getBuddistDatePredictRecord: (_) => (date) => {
    return date ? moment(date, 'DD/MM/YYYY').add(543, 'years').format('DD/MM/YYYY') : null
  },
  getDate: (_) => (date) => {
    return date ? moment(date).add(0, 'years').format('DD/MM/YYYY') : null
  },
  getBuddistDateTime: (_) => (date) => {
    return date ? moment(date).add(543, 'years').format('DD/MM/YYYY เวลา HH:mm:ss น.') : null
  },
  getBuddistTime: (_) => (date) => {
    return date ? moment(date).add(543, 'years').format('DD/MM/YYYY เวลา HH:mm:ss น.').split(' ').slice(1).join(' ') : null
  },
  getBuddhistYear: (_) => (date) => {
    return moment(date).add(543, 'years').format('YYYY')
  },
  getBuddhistYearCustom: (_) => (date) => {
    console.log('วันที่')
    console.log(date)
    console.log(typeof date)
    if (typeof date === 'string') {
      console.log('เป็น string')
      date = moment(date, 'DD/MM/YYYY', true)
      console.log(date)
    }
    return moment(date).add(543, 'years').format('YYYY')
  },
  getAll(state) {
    return {
      hnNumber: state.hnNumber,
      fname: state.fname,
      lname: state.lname,
      gender: state.gender,
      dob: state.dob,
      ageAtReg: state.ageAtReg,
      age: state.age,
      weight: state.weight,
      height: state.height,
      bmi: state.bmi,
    }
  },
}

// actions
// sam edit while create

const actions = {
  async fetchPersonalPatient({ commit, state }, hn_number = null) {
    await axios
      .get('/api/session/view/patient/', {
        params: {
          hnnumber: hn_number,
        },
      })
      .then((response) => {
        PERSONAL_PATIENTS.hn_number = response.data.result.hn_number
        PERSONAL_PATIENTS.first_name = response.data.result.fname
        // this.hn_number = response.data.result.hn_number
        // this.fname = response.data.result.fname
        PERSONAL_PATIENTS.last_name = response.data.result.lname
        PERSONAL_PATIENTS.gender = response.data.result.gender
        PERSONAL_PATIENTS.dob = response.data.result.dob
        PERSONAL_PATIENTS.weight = response.data.result.weight
        PERSONAL_PATIENTS.height = response.data.result.height
        PERSONAL_PATIENTS.age_at_reg = response.data.result.age
        PERSONAL_PATIENTS.age = response.data.result.age
        PERSONAL_PATIENTS.bmi = response.data.result.bmi

        // this.age = response.data.result.age
        const res = { ...PERSONAL_PATIENTS }
        // res.age = parseInt(moment(res.dob, 'YYYY-MM-DD').from(moment()).split(' ')[0])
        commit('SET_ALL', res)
      })
      .catch((error) => {
        console.error(error)
      })

    // const res = { ...PERSONAL_PATIENTS }
    // console.log(res)
    // res.age = parseInt(moment(res.dob, 'YYYY-MM-DD').from(moment()).split(' ')[0])
    // commit('SET_ALL', res)
  },
  updateAll({ commit }, payload = {}) {
    commit('SET_ALL', payload)
  },
  updateHnNumber({ commit }, hnNumber = null) {
    commit('SET_HN_NUMBER', hnNumber)
  },
  updateFirstName({ commit }, fname = null) {
    commit('SET_FRIST_NAME', fname)
  },
  updateLastName({ commit }, lname = null) {
    commit('SET_LAST_NAME', lname)
  },
  updateGender({ commit }, gender = null) {
    commit('SET_GENDER', gender)
  },
  updateDob({ commit }, dob = null) {
    commit('SET_DOB', dob)
  },
  updateAgeAtReg({ commit }, ageAtReg = null) {
    commit('SET_AGE_AT_REG', ageAtReg)
  },
  updateAge({ commit }, age = null) {
    commit('SET_AGE', age)
  },
  updateWeight({ commit }, weight = null) {
    commit('SET_WEIGHT', weight)
  },
  updateHeight({ commit }, height = null) {
    commit('SET_HEIGHT', height)
  },
  updateBmi({ commit }, bmi = null) {
    commit('SET_BMI', bmi)
  },
}

// mutations
const mutations = {
  SET_ALL(state, payload) {
    state.hnNumber = payload.hn_number ?? '000000-00'
    state.fname = payload.first_name ?? 'no fname'
    state.lname = payload.last_name ?? 'no lname'
    state.gender = payload.gender ?? 'no gender'
    state.dob = payload.dob ?? 'no dob'
    state.age = payload.age ?? ''
    state.weight = payload.weight ?? null
    state.height = payload.height ?? null
    state.bmi = payload.bmi ?? ''
  },
  SET_HN_NUMBER(state, hnNumber) {
    state.hnNumber = hnNumber ?? '000000-00'
  },
  SET_FIRST_NAME(state, fname) {
    state.fname = fname ?? 'no fname'
  },
  SET_LAST_NAME(state, lname) {
    state.lname = lname ?? 'no lname'
  },
  SET_GENDER(state, gender) {
    state.gender = gender ?? 'no gender'
  },
  SET_DOB(state, dob) {
    state.dob = dob ?? 'no dob'
  },
  SET_AGE_AT_REG(state, ageAtReg) {
    state.ageAtReg = ageAtReg ?? 'no ageAtReg'
  },
  SET_AGE(state, age) {
    state.age = age ?? ''
  },
  SET_WEIGHT(state, weight) {
    state.weight = weight ?? null
  },
  SET_HEIGHT(state, height) {
    state.height = height ?? null
  },
  SET_BMI(state, bmi) {
    state.bmi = bmi ?? ''
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
