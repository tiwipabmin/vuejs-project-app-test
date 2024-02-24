import axios from 'axios'

const STRESS_QUANTI_VAL = {
  max_perfusion: null,
  ocr_max_perfusion: 10,
  ocr_clv_max_perfusion: 10,

  interval: null,
  ocr_interval: 10,
  ocr_clv_interval: 10,

  es: null,
  ocr_es: 10,
  ocr_clv_es: 10,

  ed: null,
  ocr_ed: 10,
  ocr_clv_ed: 10,

  lvef: null,
  ocr_lvef: 10,
  ocr_clv_lvef: 10,

  lad_perf_mean: null,
  ocr_lad_perf_mean: 10,
  ocr_clv_lad_perf_mean: 10,

  lad_perf_sd: null,
  ocr_lad_perf_sd: 10,
  ocr_clv_lad_perf_sd: 10,

  lad_wt_mean: null,
  ocr_lad_wt_mean: 10,
  ocr_clv_lad_wt_mean: 10,

  lad_wt_sd: null,
  ocr_lad_wt_sd: 10,
  ocr_clv_lad_wt_sd: 10,

  lad_wm_mean: null,
  ocr_lad_wm_mean: 10,
  ocr_clv_lad_wm_mean: 10,

  lad_wm_sd: null,
  ocr_lad_wm_sd: 10,
  ocr_clv_lad_wm_sd: 10,

  lcx_perf_mean: null,
  ocr_lcx_perf_mean: 10,
  ocr_clv_lcx_perf_mean: 10,

  lcx_perf_sd: null,
  ocr_lcx_perf_sd: 10,
  ocr_clv_lcx_perf_sd: 10,

  lcx_wt_mean: null,
  ocr_lcx_wt_mean: 10,
  ocr_clv_lcx_wt_mean: 10,

  lcx_wt_sd: null,
  ocr_lcx_wt_sd: 10,
  ocr_clv_lcx_wt_sd: 10,

  lcx_wm_mean: null,
  ocr_lcx_wm_mean: 10,
  ocr_clv_lcx_wm_mean: 10,

  lcx_wm_sd: null,
  ocr_lcx_wm_sd: 10,
  ocr_clv_lcx_wm_sd: 10,

  rca_perf_mean: null,
  ocr_rca_perf_mean: 10,
  ocr_clv_rca_perf_mean: 10,

  rca_perf_sd: null,
  ocr_rca_perf_sd: 10,
  ocr_clv_rca_perf_sd: 10,

  rca_wt_mean: null,
  ocr_rca_wt_mean: 10,
  ocr_clv_rca_wt_mean: 10,

  rca_wt_sd: null,
  ocr_rca_wt_sd: 10,
  ocr_clv_rca_wt_sd: 10,

  rca_wm_mean: null,
  ocr_rca_wm_mean: 10,
  ocr_clv_rca_wm_mean: 10,

  rca_wm_sd: null,
  ocr_rca_wm_sd: 10,
  ocr_clv_rca_wm_sd: 10,

  tot_perf_mean: null,
  ocr_tot_perf_mean: 10,
  ocr_clv_tot_perf_mean: 10,

  tot_perf_sd: null,
  ocr_tot_perf_sd: 10,
  ocr_clv_tot_perf_sd: 10,

  tot_wt_mean: null,
  ocr_tot_wt_mean: 10,
  ocr_clv_tot_wt_mean: 10,

  tot_wt_sd: null,
  ocr_tot_wt_sd: 10,
  ocr_clv_tot_wt_sd: 10,

  tot_wm_mean: null,
  ocr_tot_wm_mean: 10,
  ocr_clv_tot_wm_mean: 10,

  tot_wm_sd: null,
  ocr_tot_wm_sd: 10,
  ocr_clv_tot_wm_sd: 10,

  lad_perf_ext: null,
  ocr_lad_perf_ext: 25,
  ocr_clv_lad_perf_ext: 25,

  lad_perf_sev: null,
  ocr_lad_perf_sev: 25,
  ocr_clv_lad_perf_sev: 25,

  lad_wt_ext: null,
  ocr_lad_wt_ext: 25,
  ocr_clv_lad_wt_ext: 25,

  lad_wt_sev: null,
  ocr_lad_wt_sev: 25,
  ocr_clv_lad_wt_sev: 25,

  lad_wm_ext: null,
  ocr_lad_wm_ext: 25,
  ocr_clv_lad_wm_ext: 25,

  lad_wm_sev: null,
  ocr_lad_wm_sev: 25,
  ocr_clv_lad_wm_sev: 25,

  lcx_perf_ext: null,
  ocr_lcx_perf_ext: 25,
  ocr_clv_lcx_perf_ext: 25,

  lcx_perf_sev: null,
  ocr_lcx_perf_sev: 25,
  ocr_clv_lcx_perf_sev: 25,

  lcx_wt_ext: null,
  ocr_lcx_wt_ext: 25,
  ocr_clv_lcx_wt_ext: 25,

  lcx_wt_sev: null,
  ocr_lcx_wt_sev: 25,
  ocr_clv_lcx_wt_sev: 25,

  lcx_wm_ext: null,
  ocr_lcx_wm_ext: 25,
  ocr_clv_lcx_wm_ext: 25,

  lcx_wm_sev: null,
  ocr_lcx_wm_sev: 25,
  ocr_clv_lcx_wm_sev: 25,

  rca_perf_ext: null,
  ocr_rca_perf_ext: 25,
  ocr_clv_rca_perf_ext: 25,

  rca_perf_sev: null,
  ocr_rca_perf_sev: 25,
  ocr_clv_rca_perf_sev: 25,

  rca_wt_ext: null,
  ocr_rca_wt_ext: 25,
  ocr_clv_rca_wt_ext: 25,

  rca_wt_sev: null,
  ocr_rca_wt_sev: 25,
  ocr_clv_rca_wt_sev: 25,

  rca_wm_ext: null,
  ocr_rca_wm_ext: 25,
  ocr_clv_rca_wm_ext: 25,

  rca_wm_sev: null,
  ocr_rca_wm_sev: 25,
  ocr_clv_rca_wm_sev: 25,

  tot_perf_ext: null,
  ocr_tot_perf_ext: 25,
  ocr_clv_tot_perf_ext: 25,

  tot_perf_sev: null,
  ocr_tot_perf_sev: 25,
  ocr_clv_tot_perf_sev: 25,

  tot_wt_ext: null,
  ocr_tot_wt_ext: 25,
  ocr_clv_tot_wt_ext: 25,

  tot_wt_sev: null,
  ocr_tot_wt_sev: 25,
  ocr_clv_tot_wt_sev: 25,

  tot_wm_ext: null,
  ocr_tot_wm_ext: 25,
  ocr_clv_tot_wm_ext: 25,

  tot_wm_sev: null,
  ocr_tot_wm_sev: 25,
  ocr_clv_tot_wm_sev: 25,

  stress_sss: null,
  ocr_stress_sss: 10,
  ocr_clv_stress_sss: 10,

  stress_sts: null,
  ocr_stress_sts: 10,
  ocr_clv_stress_sts: 10,

  stress_sms: null,
  ocr_stress_sms: 10,
  ocr_clv_stress_sms: 10,
}

// const STRESS_QUANTI_VAL_TEST = {
//   max_perfusion: 150,
//   ocr_max_perfusion: 150,
//   ocr_clv_max_perfusion: 10,

//   interval: 150,
//   ocr_interval: 150,
//   ocr_clv_interval: 10,

//   es: 150,
//   ocr_es: 150,
//   ocr_clv_es: 10,

//   ed: 150,
//   ocr_ed: 150,
//   ocr_clv_ed: 10,

//   lvef: 150,
//   ocr_lvef: 150,
//   ocr_clv_lvef: 10,

//   lad_perf_mean: 150,
//   ocr_lad_perf_mean: 150,
//   ocr_clv_lad_perf_mean: 10,

//   lad_perf_sd: 150,
//   ocr_lad_perf_sd: 150,
//   ocr_clv_lad_perf_sd: 10,

//   lad_wt_mean: 150,
//   ocr_lad_wt_mean: 150,
//   ocr_clv_lad_wt_mean: 10,

//   lad_wt_sd: 150,
//   ocr_lad_wt_sd: 150,
//   ocr_clv_lad_wt_sd: 10,

//   lad_wm_mean: 150,
//   ocr_lad_wm_mean: 150,
//   ocr_clv_lad_wm_mean: 10,

//   lad_wm_sd: 150,
//   ocr_lad_wm_sd: 150,
//   ocr_clv_lad_wm_sd: 10,

//   lcx_perf_mean: 150,
//   ocr_lcx_perf_mean: 150,
//   ocr_clv_lcx_perf_mean: 10,

//   lcx_perf_sd: 150,
//   ocr_lcx_perf_sd: 150,
//   ocr_clv_lcx_perf_sd: 10,

//   lcx_wt_mean: 150,
//   ocr_lcx_wt_mean: 150,
//   ocr_clv_lcx_wt_mean: 10,

//   lcx_wt_sd: 150,
//   ocr_lcx_wt_sd: 150,
//   ocr_clv_lcx_wt_sd: 10,

//   lcx_wm_mean: 150,
//   ocr_lcx_wm_mean: 150,
//   ocr_clv_lcx_wm_mean: 10,

//   lcx_wm_sd: 150,
//   ocr_lcx_wm_sd: 150,
//   ocr_clv_lcx_wm_sd: 10,

//   rca_perf_mean: 150,
//   ocr_rca_perf_mean: 150,
//   ocr_clv_rca_perf_mean: 10,

//   rca_perf_sd: 150,
//   ocr_rca_perf_sd: 150,
//   ocr_clv_rca_perf_sd: 10,

//   rca_wt_mean: 150,
//   ocr_rca_wt_mean: 150,
//   ocr_clv_rca_wt_mean: 10,

//   rca_wt_sd: 150,
//   ocr_rca_wt_sd: 150,
//   ocr_clv_rca_wt_sd: 10,

//   rca_wm_mean: 150,
//   ocr_rca_wm_mean: 150,
//   ocr_clv_rca_wm_mean: 10,

//   rca_wm_sd: 150,
//   ocr_rca_wm_sd: 150,
//   ocr_clv_rca_wm_sd: 10,

//   tot_perf_mean: 150,
//   ocr_tot_perf_mean: 150,
//   ocr_clv_tot_perf_mean: 10,

//   tot_perf_sd: 150,
//   ocr_tot_perf_sd: 150,
//   ocr_clv_tot_perf_sd: 10,

//   tot_wt_mean: 150,
//   ocr_tot_wt_mean: 150,
//   ocr_clv_tot_wt_mean: 10,

//   tot_wt_sd: 150,
//   ocr_tot_wt_sd: 150,
//   ocr_clv_tot_wt_sd: 10,

//   tot_wm_mean: 150,
//   ocr_tot_wm_mean: 150,
//   ocr_clv_tot_wm_mean: 10,

//   tot_wm_sd: 150,
//   ocr_tot_wm_sd: 150,
//   ocr_clv_tot_wm_sd: 10,

//   lad_perf_ext: 150,
//   ocr_lad_perf_ext: 150,
//   ocr_clv_lad_perf_ext: 25,

//   lad_perf_sev: 150,
//   ocr_lad_perf_sev: 150,
//   ocr_clv_lad_perf_sev: 25,

//   lad_wt_ext: 150,
//   ocr_lad_wt_ext: 150,
//   ocr_clv_lad_wt_ext: 25,

//   lad_wt_sev: 150,
//   ocr_lad_wt_sev: 150,
//   ocr_clv_lad_wt_sev: 25,

//   lad_wm_ext: 150,
//   ocr_lad_wm_ext: 150,
//   ocr_clv_lad_wm_ext: 25,

//   lad_wm_sev: 150,
//   ocr_lad_wm_sev: 150,
//   ocr_clv_lad_wm_sev: 25,

//   lcx_perf_ext: 150,
//   ocr_lcx_perf_ext: 150,
//   ocr_clv_lcx_perf_ext: 25,

//   lcx_perf_sev: 150,
//   ocr_lcx_perf_sev: 150,
//   ocr_clv_lcx_perf_sev: 25,

//   lcx_wt_ext: 150,
//   ocr_lcx_wt_ext: 150,
//   ocr_clv_lcx_wt_ext: 25,

//   lcx_wt_sev: 150,
//   ocr_lcx_wt_sev: 150,
//   ocr_clv_lcx_wt_sev: 25,

//   lcx_wm_ext: 150,
//   ocr_lcx_wm_ext: 150,
//   ocr_clv_lcx_wm_ext: 25,

//   lcx_wm_sev: 150,
//   ocr_lcx_wm_sev: 150,
//   ocr_clv_lcx_wm_sev: 25,

//   rca_perf_ext: 150,
//   ocr_rca_perf_ext: 150,
//   ocr_clv_rca_perf_ext: 25,

//   rca_perf_sev: 150,
//   ocr_rca_perf_sev: 150,
//   ocr_clv_rca_perf_sev: 25,

//   rca_wt_ext: 150,
//   ocr_rca_wt_ext: 150,
//   ocr_clv_rca_wt_ext: 25,

//   rca_wt_sev: 150,
//   ocr_rca_wt_sev: 150,
//   ocr_clv_rca_wt_sev: 25,

//   rca_wm_ext: 150,
//   ocr_rca_wm_ext: 150,
//   ocr_clv_rca_wm_ext: 25,

//   rca_wm_sev: 150,
//   ocr_rca_wm_sev: 150,
//   ocr_clv_rca_wm_sev: 25,

//   tot_perf_ext: 150,
//   ocr_tot_perf_ext: 150,
//   ocr_clv_tot_perf_ext: 25,

//   tot_perf_sev: 150,
//   ocr_tot_perf_sev: 150,
//   ocr_clv_tot_perf_sev: 25,

//   tot_wt_ext: 150,
//   ocr_tot_wt_ext: 150,
//   ocr_clv_tot_wt_ext: 25,

//   tot_wt_sev: 150,
//   ocr_tot_wt_sev: 150,
//   ocr_clv_tot_wt_sev: 25,

//   tot_wm_ext: 150,
//   ocr_tot_wm_ext: 150,
//   ocr_clv_tot_wm_ext: 25,

//   tot_wm_sev: 150,
//   ocr_tot_wm_sev: 150,
//   ocr_clv_tot_wm_sev: 25,

//   stress_sss: 150,
//   ocr_stress_sss: 150,
//   ocr_clv_stress_sss: 10,

//   stress_sts: 150,
//   ocr_stress_sts: 150,
//   ocr_clv_stress_sts: 10,

//   stress_sms: 150,
//   ocr_stress_sms: 150,
//   ocr_clv_stress_sms: 10,
// }

const REST_QUANTI_VAL = {
  max_perfusion: null,
  ocr_max_perfusion: 10,
  ocr_clv_max_perfusion: 10,

  interval: null,
  ocr_interval: 10,
  ocr_clv_interval: 10,

  es: null,
  ocr_es: 10,
  ocr_clv_es: 10,

  ed: null,
  ocr_ed: 10,
  ocr_clv_ed: 10,

  lvef: null,
  ocr_lvef: 10,
  ocr_clv_lvef: 10,

  lad_perf_mean: null,
  ocr_lad_perf_mean: 10,
  ocr_clv_lad_perf_mean: 10,

  lad_perf_sd: null,
  ocr_lad_perf_sd: 10,
  ocr_clv_lad_perf_sd: 10,

  lad_wt_mean: null,
  ocr_lad_wt_mean: 10,
  ocr_clv_lad_wt_mean: 10,

  lad_wt_sd: null,
  ocr_lad_wt_sd: 10,
  ocr_clv_lad_wt_sd: 10,

  lad_wm_mean: null,
  ocr_lad_wm_mean: 10,
  ocr_clv_lad_wm_mean: 10,

  lad_wm_sd: null,
  ocr_lad_wm_sd: 10,
  ocr_clv_lad_wm_sd: 10,

  lcx_perf_mean: null,
  ocr_lcx_perf_mean: 10,
  ocr_clv_lcx_perf_mean: 10,

  lcx_perf_sd: null,
  ocr_lcx_perf_sd: 10,
  ocr_clv_lcx_perf_sd: 10,

  lcx_wt_mean: null,
  ocr_lcx_wt_mean: 10,
  ocr_clv_lcx_wt_mean: 10,

  lcx_wt_sd: null,
  ocr_lcx_wt_sd: 10,
  ocr_clv_lcx_wt_sd: 10,

  lcx_wm_mean: null,
  ocr_lcx_wm_mean: 10,
  ocr_clv_lcx_wm_mean: 10,

  lcx_wm_sd: null,
  ocr_lcx_wm_sd: 10,
  ocr_clv_lcx_wm_sd: 10,

  rca_perf_mean: null,
  ocr_rca_perf_mean: 10,
  ocr_clv_rca_perf_mean: 10,

  rca_perf_sd: null,
  ocr_rca_perf_sd: 10,
  ocr_clv_rca_perf_sd: 10,

  rca_wt_mean: null,
  ocr_rca_wt_mean: 10,
  ocr_clv_rca_wt_mean: 10,

  rca_wt_sd: null,
  ocr_rca_wt_sd: 10,
  ocr_clv_rca_wt_sd: 10,

  rca_wm_mean: null,
  ocr_rca_wm_mean: 10,
  ocr_clv_rca_wm_mean: 10,

  rca_wm_sd: null,
  ocr_rca_wm_sd: 10,
  ocr_clv_rca_wm_sd: 10,

  tot_perf_mean: null,
  ocr_tot_perf_mean: 10,
  ocr_clv_tot_perf_mean: 10,

  tot_perf_sd: null,
  ocr_tot_perf_sd: 10,
  ocr_clv_tot_perf_sd: 10,

  tot_wt_mean: null,
  ocr_tot_wt_mean: 10,
  ocr_clv_tot_wt_mean: 10,

  tot_wt_sd: null,
  ocr_tot_wt_sd: 10,
  ocr_clv_tot_wt_sd: 10,

  tot_wm_mean: null,
  ocr_tot_wm_mean: 10,
  ocr_clv_tot_wm_mean: 10,

  tot_wm_sd: null,
  ocr_tot_wm_sd: 10,
  ocr_clv_tot_wm_sd: 10,

  lad_perf_ext: null,
  ocr_lad_perf_ext: 25,
  ocr_clv_lad_perf_ext: 25,

  lad_perf_sev: null,
  ocr_lad_perf_sev: 25,
  ocr_clv_lad_perf_sev: 25,

  lad_wt_ext: null,
  ocr_lad_wt_ext: 25,
  ocr_clv_lad_wt_ext: 25,

  lad_wt_sev: null,
  ocr_lad_wt_sev: 25,
  ocr_clv_lad_wt_sev: 25,

  lad_wm_ext: null,
  ocr_lad_wm_ext: 25,
  ocr_clv_lad_wm_ext: 25,

  lad_wm_sev: null,
  ocr_lad_wm_sev: 25,
  ocr_clv_lad_wm_sev: 25,

  lcx_perf_ext: null,
  ocr_lcx_perf_ext: 25,
  ocr_clv_lcx_perf_ext: 25,

  lcx_perf_sev: null,
  ocr_lcx_perf_sev: 25,
  ocr_clv_lcx_perf_sev: 25,

  lcx_wt_ext: null,
  ocr_lcx_wt_ext: 25,
  ocr_clv_lcx_wt_ext: 25,

  lcx_wt_sev: null,
  ocr_lcx_wt_sev: 25,
  ocr_clv_lcx_wt_sev: 25,

  lcx_wm_ext: null,
  ocr_lcx_wm_ext: 25,
  ocr_clv_lcx_wm_ext: 25,

  lcx_wm_sev: null,
  ocr_lcx_wm_sev: 25,
  ocr_clv_lcx_wm_sev: 25,

  rca_perf_ext: null,
  ocr_rca_perf_ext: 25,
  ocr_clv_rca_perf_ext: 25,

  rca_perf_sev: null,
  ocr_rca_perf_sev: 25,
  ocr_clv_rca_perf_sev: 25,

  rca_wt_ext: null,
  ocr_rca_wt_ext: 25,
  ocr_clv_rca_wt_ext: 25,

  rca_wt_sev: null,
  ocr_rca_wt_sev: 25,
  ocr_clv_rca_wt_sev: 25,

  rca_wm_ext: null,
  ocr_rca_wm_ext: 25,
  ocr_clv_rca_wm_ext: 25,

  rca_wm_sev: null,
  ocr_rca_wm_sev: 25,
  ocr_clv_rca_wm_sev: 25,

  tot_perf_ext: null,
  ocr_tot_perf_ext: 25,
  ocr_clv_tot_perf_ext: 25,

  tot_perf_sev: null,
  ocr_tot_perf_sev: 25,
  ocr_clv_tot_perf_sev: 25,

  tot_wt_ext: null,
  ocr_tot_wt_ext: 25,
  ocr_clv_tot_wt_ext: 25,

  tot_wt_sev: null,
  ocr_tot_wt_sev: 25,
  ocr_clv_tot_wt_sev: 25,

  tot_wm_ext: null,
  ocr_tot_wm_ext: 25,
  ocr_clv_tot_wm_ext: 25,

  tot_wm_sev: null,
  ocr_tot_wm_sev: 25,
  ocr_clv_tot_wm_sev: 25,

  rest_srs: null,
  ocr_rest_srs: 25,
  ocr_clv_rest_srs: 25,

  rest_sts: null,
  ocr_rest_sts: 25,
  ocr_clv_rest_sts: 25,

  rest_sms: null,
  ocr_rest_sms: 25,
  ocr_clv_rest_sms: 25,
}

// const REST_QUANTI_VAL_TEST = {
//   max_perfusion: 200,
//   ocr_max_perfusion: 200,
//   ocr_clv_max_perfusion: 10,

//   interval: 200,
//   ocr_interval: 200,
//   ocr_clv_interval: 10,

//   es: 200,
//   ocr_es: 200,
//   ocr_clv_es: 10,

//   ed: 200,
//   ocr_ed: 200,
//   ocr_clv_ed: 10,

//   lvef: 200,
//   ocr_lvef: 200,
//   ocr_clv_lvef: 10,

//   lad_perf_mean: 200,
//   ocr_lad_perf_mean: 200,
//   ocr_clv_lad_perf_mean: 10,

//   lad_perf_sd: 200,
//   ocr_lad_perf_sd: 200,
//   ocr_clv_lad_perf_sd: 10,

//   lad_wt_mean: 200,
//   ocr_lad_wt_mean: 200,
//   ocr_clv_lad_wt_mean: 10,

//   lad_wt_sd: 200,
//   ocr_lad_wt_sd: 200,
//   ocr_clv_lad_wt_sd: 10,

//   lad_wm_mean: 200,
//   ocr_lad_wm_mean: 200,
//   ocr_clv_lad_wm_mean: 10,

//   lad_wm_sd: 200,
//   ocr_lad_wm_sd: 200,
//   ocr_clv_lad_wm_sd: 10,

//   lcx_perf_mean: 200,
//   ocr_lcx_perf_mean: 200,
//   ocr_clv_lcx_perf_mean: 10,

//   lcx_perf_sd: 200,
//   ocr_lcx_perf_sd: 200,
//   ocr_clv_lcx_perf_sd: 10,

//   lcx_wt_mean: 200,
//   ocr_lcx_wt_mean: 200,
//   ocr_clv_lcx_wt_mean: 10,

//   lcx_wt_sd: 200,
//   ocr_lcx_wt_sd: 200,
//   ocr_clv_lcx_wt_sd: 10,

//   lcx_wm_mean: 200,
//   ocr_lcx_wm_mean: 200,
//   ocr_clv_lcx_wm_mean: 10,

//   lcx_wm_sd: 200,
//   ocr_lcx_wm_sd: 200,
//   ocr_clv_lcx_wm_sd: 10,

//   rca_perf_mean: 200,
//   ocr_rca_perf_mean: 200,
//   ocr_clv_rca_perf_mean: 10,

//   rca_perf_sd: 200,
//   ocr_rca_perf_sd: 200,
//   ocr_clv_rca_perf_sd: 10,

//   rca_wt_mean: 200,
//   ocr_rca_wt_mean: 200,
//   ocr_clv_rca_wt_mean: 10,

//   rca_wt_sd: 200,
//   ocr_rca_wt_sd: 200,
//   ocr_clv_rca_wt_sd: 10,

//   rca_wm_mean: 200,
//   ocr_rca_wm_mean: 200,
//   ocr_clv_rca_wm_mean: 10,

//   rca_wm_sd: 200,
//   ocr_rca_wm_sd: 200,
//   ocr_clv_rca_wm_sd: 10,

//   tot_perf_mean: 200,
//   ocr_tot_perf_mean: 200,
//   ocr_clv_tot_perf_mean: 10,

//   tot_perf_sd: 200,
//   ocr_tot_perf_sd: 200,
//   ocr_clv_tot_perf_sd: 10,

//   tot_wt_mean: 200,
//   ocr_tot_wt_mean: 200,
//   ocr_clv_tot_wt_mean: 10,

//   tot_wt_sd: 200,
//   ocr_tot_wt_sd: 200,
//   ocr_clv_tot_wt_sd: 10,

//   tot_wm_mean: 200,
//   ocr_tot_wm_mean: 200,
//   ocr_clv_tot_wm_mean: 10,

//   tot_wm_sd: 200,
//   ocr_tot_wm_sd: 200,
//   ocr_clv_tot_wm_sd: 10,

//   lad_perf_ext: 200,
//   ocr_lad_perf_ext: 200,
//   ocr_clv_lad_perf_ext: 25,

//   lad_perf_sev: 200,
//   ocr_lad_perf_sev: 200,
//   ocr_clv_lad_perf_sev: 25,

//   lad_wt_ext: 200,
//   ocr_lad_wt_ext: 200,
//   ocr_clv_lad_wt_ext: 25,

//   lad_wt_sev: 200,
//   ocr_lad_wt_sev: 200,
//   ocr_clv_lad_wt_sev: 25,

//   lad_wm_ext: 200,
//   ocr_lad_wm_ext: 200,
//   ocr_clv_lad_wm_ext: 25,

//   lad_wm_sev: 200,
//   ocr_lad_wm_sev: 200,
//   ocr_clv_lad_wm_sev: 25,

//   lcx_perf_ext: 200,
//   ocr_lcx_perf_ext: 200,
//   ocr_clv_lcx_perf_ext: 25,

//   lcx_perf_sev: 200,
//   ocr_lcx_perf_sev: 200,
//   ocr_clv_lcx_perf_sev: 25,

//   lcx_wt_ext: 200,
//   ocr_lcx_wt_ext: 200,
//   ocr_clv_lcx_wt_ext: 25,

//   lcx_wt_sev: 200,
//   ocr_lcx_wt_sev: 200,
//   ocr_clv_lcx_wt_sev: 25,

//   lcx_wm_ext: 200,
//   ocr_lcx_wm_ext: 200,
//   ocr_clv_lcx_wm_ext: 25,

//   lcx_wm_sev: 200,
//   ocr_lcx_wm_sev: 200,
//   ocr_clv_lcx_wm_sev: 25,

//   rca_perf_ext: 200,
//   ocr_rca_perf_ext: 200,
//   ocr_clv_rca_perf_ext: 25,

//   rca_perf_sev: 200,
//   ocr_rca_perf_sev: 200,
//   ocr_clv_rca_perf_sev: 25,

//   rca_wt_ext: 200,
//   ocr_rca_wt_ext: 200,
//   ocr_clv_rca_wt_ext: 25,

//   rca_wt_sev: 200,
//   ocr_rca_wt_sev: 200,
//   ocr_clv_rca_wt_sev: 25,

//   rca_wm_ext: 200,
//   ocr_rca_wm_ext: 200,
//   ocr_clv_rca_wm_ext: 25,

//   rca_wm_sev: 200,
//   ocr_rca_wm_sev: 200,
//   ocr_clv_rca_wm_sev: 25,

//   tot_perf_ext: 200,
//   ocr_tot_perf_ext: 200,
//   ocr_clv_tot_perf_ext: 25,

//   tot_perf_sev: 200,
//   ocr_tot_perf_sev: 200,
//   ocr_clv_tot_perf_sev: 25,

//   tot_wt_ext: 200,
//   ocr_tot_wt_ext: 200,
//   ocr_clv_tot_wt_ext: 25,

//   tot_wt_sev: 200,
//   ocr_tot_wt_sev: 200,
//   ocr_clv_tot_wt_sev: 25,

//   tot_wm_ext: 200,
//   ocr_tot_wm_ext: 200,
//   ocr_clv_tot_wm_ext: 25,

//   tot_wm_sev: 200,
//   ocr_tot_wm_sev: 200,
//   ocr_clv_tot_wm_sev: 25,

//   rest_srs: 200,
//   ocr_rest_srs: 200,
//   ocr_clv_rest_srs: 25,

//   rest_sts: 200,
//   ocr_rest_sts: 200,
//   ocr_clv_rest_sts: 25,

//   rest_sms: 200,
//   ocr_rest_sms: 200,
//   ocr_clv_rest_sms: 25,
// }

const ML_DIAGS = [
  {
    id: 4,
    created_at: '10.01.2023',
    name: 'Adaptive',
    indicator: 'Quantitative',
    lad_type: 'Incremental',
    lcx_type: 'Incremental',
    rca_type: 'Incremental',
    patient_type: 'Incremental',
    lad_version: '01.01.2023',
    lcx_version: '01.01.2023',
    rca_version: '01.01.2023',
    patient_version: '01.01.2023',
    lad_val_acc: 55,
    lcx_val_acc: 50,
    rca_val_acc: 80,
    patient_val_acc: 89,
    used_by: 'ดร. หมอแปลก มาร์เวล',
    predict: {
      lad: { predict: 'positive: mild', proba: 0.1 },
      lcx: { predict: 'positive: severe', proba: 0.1 },
      rca: { predict: 'negative', proba: 0.1 },
      patient: { predict: 'negative', proba: 0.1 },
    },
    isMixed: false,
  },
  {
    id: 3,
    created_at: '09.01.2023',
    name: 'Adaptive',
    indicator: 'Quantitative',
    lad_type: 'Incremental',
    lcx_type: 'Incremental',
    rca_type: 'Incremental',
    patient_type: 'Incremental',
    lad_version: '01.01.2023',
    lcx_version: '01.02.2023',
    rca_version: '01.03.2023',
    patient_version: '01.04.2023',
    lad_val_acc: 52,
    lcx_val_acc: 45,
    rca_val_acc: 78,
    patient_val_acc: 89,
    used_by: 'ดร. หมอแปลก มาร์เวล',
    predict: {
      lad: { predict: 'positive: mild', proba: 0.1 },
      lcx: { predict: 'positive: severe', proba: 0.1 },
      rca: { predict: 'negative', proba: 0.1 },
      patient: { predict: 'negative', proba: 0.1 },
    },
    isMixed: true,
  },
  {
    id: 2,
    created_at: '08.01.2023',
    name: 'Adaptive',
    indicator: 'Quantitative',
    lad_type: 'Incremental',
    lcx_type: 'Base',
    rca_type: 'Fully Re-train',
    patient_type: 'Base',
    lad_version: '01.01.2023',
    lcx_version: '01.02.2023',
    rca_version: '01.03.2023',
    patient_version: '01.04.2023',
    lad_val_acc: 50,
    lcx_val_acc: 30,
    rca_val_acc: 78,
    patient_val_acc: 89,
    used_by: 'ดร. หมอแปลก มาร์เวล',
    predict: {
      lad: { predict: 'positive: mild', proba: 0.1 },
      lcx: { predict: 'positive: severe', proba: 0.1 },
      rca: { predict: 'negative', proba: 0.1 },
      patient: { predict: 'negative', proba: 0.1 },
    },
    isMixed: true,
  },
  {
    id: 1,
    created_at: '07.01.2023',
    name: 'Adaptive',
    indicator: 'Quantitative',
    lad_type: 'Base',
    lcx_type: 'Base',
    rca_type: 'Base',
    patient_type: 'Base',
    lad_version: '01.01.2023',
    lcx_version: '01.01.2023',
    rca_version: '01.01.2023',
    patient_version: '01.01.2023',
    lad_val_acc: 34,
    lcx_val_acc: 30,
    rca_val_acc: 78,
    patient_val_acc: 89,
    used_by: 'ดร. หมอแปลก มาร์เวล',
    predict: {
      lad: { predict: 'positive: mild', proba: 0.1 },
      lcx: { predict: 'positive: severe', proba: 0.1 },
      rca: { predict: 'negative', proba: 0.1 },
      patient: { predict: 'negative', proba: 0.1 },
    },
    isMixed: false,
  },
  {
    id: 0,
    created_at: '06.01.2023',
    name: 'Base',
    indicator: 'Quantitative',
    lad_type: '-',
    lcx_type: '-',
    rca_type: '-',
    patient_type: '-',
    lad_version: '01.01.2023',
    lcx_version: '01.01.2023',
    rca_version: '01.01.2023',
    patient_version: '01.01.2023',
    lad_val_acc: 30,
    lcx_val_acc: 24,
    rca_val_acc: 78,
    patient_val_acc: 89,
    used_by: 'ดร. หมอแปลก มาร์เวล',
    predict: {
      lad: { predict: 'positive: mild', proba: 0.1 },
      lcx: { predict: 'positive: severe', proba: 0.1 },
      rca: { predict: 'negative', proba: 0.1 },
      patient: { predict: 'negative', proba: 0.1 },
    },
    isMixed: false,
  },
]

const DOCTOR_DIAGS = [
  {
    id: 0,
    created_at: null,
    lad_predict: null,
    lcx_predict: null,
    rca_predict: null,
    patient_predict: null,
    predictedBy: 'dc',
  },
]

// ML = Machine Learning
const SELECTED_MLS = [
  {
    id: 4,
    created_at: '10.01.2023',
    lad_predict: 'positive: mild',
    lcx_predict: 'positive: severe',
    rca_predict: 'negative',
    patient_predict: 'negative',
    predictedBy: 'ml',
  },
  {
    id: 3,
    created_at: '09.01.2023',
    lad_predict: 'positive: mild',
    lcx_predict: 'positive: severe',
    rca_predict: 'negative',
    patient_predict: 'negative',
    predictedBy: 'ml',
  },
  {
    id: 2,
    created_at: '08.01.2023',
    lad_predict: 'positive: mild',
    lcx_predict: 'positive: severe',
    rca_predict: 'negative',
    patient_predict: 'negative',
    predictedBy: 'ml',
  },
]

const SELECTED_MODELS = []

// initial state
const state = () => ({
  mpiTestId: null,
  stressQuanti: {},
  restQuanti: {},
  mlDiags: [],
  // Selected Machine Leanrning
  selectedMls: [],
  selectedModels: [],
  doctorDiags: [],
})

// getters
const getters = {}

// actions
const actions = {
  async fetchStressQuantiAssr({ commit, state }, mpiId) {
    // commit('INITIAL_STRESS_QUANTI', { ...STRESS_QUANTI_VAL_TEST })
    await axios
      .get('../../../../../api/session/show/mpi-draft/features-extraction/', {
        params: {
          mpi_id: mpiId,
          feature: 'stress',
        },
      })
      .then((response) => {
        // console.log('CHECK INITIAL_STRESS_QUANTI')
        // console.log(response.data)
        commit('INITIAL_STRESS_QUANTI', response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    // commit('INITIAL_STRESS_QUANTI', tmpStressQ)
  },
  async fetchRestQuantiAssr({ commit, state }, mpiId) {
    // commit('INITIAL_REST_QUANTI', { ...REST_QUANTI_VAL_TEST })
    await axios
      .get('../../../../../api/session/show/mpi-draft/features-extraction/', {
        params: {
          mpi_id: mpiId,
          feature: 'rest',
        },
      })
      .then((response) => {
        commit('INITIAL_REST_QUANTI', response.data)
        // commit('INITIAL_STRESS_QUANTI', tmpStressQ)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  async fetchStressQuanti({ commit, state }, mpiId) {
    // commit('INITIAL_STRESS_QUANTI', { ...STRESS_QUANTI_VAL_TEST })
    await axios
      .get('../../../../api/session/show/mpi-draft/features-extraction/', {
        params: {
          mpi_id: mpiId,
          feature: 'stress',
        },
      })
      .then((response) => {
        commit('INITIAL_STRESS_QUANTI', response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    // commit('INITIAL_STRESS_QUANTI', tmpStressQ)
  },
  async fetchRestQuanti({ commit, state }, mpiId) {
    // commit('INITIAL_REST_QUANTI', { ...REST_QUANTI_VAL_TEST })
    await axios
      .get('../../../../api/session/show/mpi-draft/features-extraction/', {
        params: {
          mpi_id: mpiId,
          feature: 'rest',
        },
      })
      .then((response) => {
        commit('INITIAL_REST_QUANTI', response.data)
        // commit('INITIAL_STRESS_QUANTI', tmpStressQ)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  async fetchMpiTest({ commit, state }, _) {
    const result = {}
    await axios
      .get('../api/session/show/mpi/draft/', {})
      .then((response) => {
        // PERSONAL_PATIENTS.hn_number = response.data.result.hn_number
        // PERSONAL_PATIENTS.first_name = response.data.result.fname
        // // this.hn_number = response.data.result.hn_number
        // // this.fname = response.data.result.fname
        // PERSONAL_PATIENTS.last_name = response.data.result.lname
        // PERSONAL_PATIENTS.gender = response.data.result.gender
        // PERSONAL_PATIENTS.dob = response.data.result.dob
        // PERSONAL_PATIENTS.weight = response.data.result.weight
        // PERSONAL_PATIENTS.height = response.data.result.height
        // // this.age = response.data.result.age
        // const res = { ...PERSONAL_PATIENTS }
        // console.log(res)
        // res.age = parseInt(moment(res.dob, 'YYYY-MM-DD').from(moment()).split(' ')[0])
        // commit('SET_ALL', res)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  async fetchDoctorDiags({ commit, state }, _) {
    commit('SET_DOCTOR_DIAGS', [...DOCTOR_DIAGS])
  },
  async fetchSelectedMls({ commit, state }, _) {
    commit('SET_SELECTED_MLS', [...SELECTED_MLS])
  },
  async fetchMlDiag() {
    commit('SET_ML_DIAG', [...ML_DIAGS])
  },
  updateStressVal({ commit }, payload) {
    commit('SET_STRESS_VAL', payload)
  },
  updateRestVal({ commit }, payload) {
    commit('SET_REST_VAL', payload)
  },
  updateDoctorDiags({ commit }, payload) {
    commit('SET_DOCTOR_DIAGS', payload)
  },
  updateSelectedMls({ commit }, payload) {
    commit('SET_SELECTED_MLS', payload)
  },
  async updateSelectedModels({ commit }, payload, mpi_id) {
    console.log('แสดงค่า mpi id')
    // console.log(mpi_id)
    // const valueList = [];
    // for (let key in payload) {
    //   if (payload.hasOwnProperty(key)) {
    //     const value = payload[key];
    //     console.log(value.id);

    //     this.valueList.push(value.id);
    //   }
    // }
    const valueList = Object.entries(payload).map(([key, value]) => {
      return value.id
    })

    await axios
      .post('../../../../api/session/predict/mldiag/', {
        valueList: valueList,
        // mpiId : mpi_id,
        mpiId: localStorage.getItem('mpi_id'),
        username: localStorage.getItem('username'),
      })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
        // localStorage.removeItem('username')
        // this.$router.push({ name: `home` })
      })

    // commit('SET_SELECTED_MODELS', payload)
  },
}

// mutations
const mutations = {
  SET_STRESS_VAL(state, payload) {
    state.stressQuanti[payload.key] = payload.value
  },
  SET_REST_VAL(state, payload) {
    state.restQuanti[payload.key] = payload.value
  },
  SET_ML_DIAG(state, payload) {
    state.mlDiags = [...payload]
  },
  SET_DOCTOR_DIAGS(state, payload) {
    state.doctorDiags = [...payload]
  },
  SET_SELECTED_MLS(state, payload) {
    state.selectedMls = [...payload]
  },
  SET_SELECTED_MODELS(state, payload) {
    state.selectedModels = [...payload]
  },
  INITIAL_STRESS_QUANTI(state, payload) {
    state.stressQuanti = { ...payload }
  },
  INITIAL_REST_QUANTI(state, payload) {
    state.restQuanti = { ...payload }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
