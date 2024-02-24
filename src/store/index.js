import { createLogger, createStore } from 'vuex'
import user from './modules/user.module.js'
import personalPatient from './modules/personal-patient.module.js'
import researchProject from './modules/research-project.module.js'
import mpi from './modules/mpi.module.js'
import loader from './modules/loader.module.js'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    personalPatient,
    researchProject,
    mpi,
    loader,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
