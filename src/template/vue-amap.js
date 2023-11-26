import {initAMapApiLoader} from '@vuemap/vue-amap'

let installed = false
await loadStyle()

export function setupLoader() {
  if (installed) return
  installed = true
  initAMapApiLoader({
    key: '131de8dce165c06abe06564c351099f3',
    securityJsCode: 'e2ef604bb7b4fecdc69bacd5c2400b6f',
    Loca: {
      version: '2.0.0'
    },
    plugins: ['AMap.HawkEye', 'AMap.DistrictSearch']
  })
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '#STYLE#'
    link.addEventListener('load', resolve)
    link.addEventListener('error', reject)
    document.body.append(link)
  })
}
