// ' http://192.168.89.49:3000/ibs/manager/'
const baseUrl = process.env.NODE_ENV === 'development' ? '/api/' : '/callcome/console/'
// const baseUrl = '/api/'
// const baseUrl = '/api/'
// process.env.NODE_ENV === 'development' ? 'http://rd.utuapp.cn' : '/ibs'
// const socketUrl = process.env.NODE_ENV === 'development' ? 'http://172.18.1.11:3000/ibs' : '/ibs'
const upLoadUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/callcome/console/tools/upload' : '/callcome/console/tools/upload'
// const upLoadUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/' : ''
const fileUploadUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/callcome/console/room/uploadRoomExcel' : '/callcome/console/room/uploadRoomExcel'
const temDownUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/callcome/console/room/downloadRoomExcelModel' : '/callcome/console/room/downloadRoomExcelModel'
const temWifiDownUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/callcome/console/room/downloadRoomWifiExcelModel' : '/callcome/console/room/downloadRoomWifiExcelModel'
const wifiUploadUrl = process.env.NODE_ENV === 'development' ? 'https://rd.utuapp.cn/callcome/console/room/uploadRoomWifiExcel' : '/callcome/console/room/uploadRoomWifiExcel'
export default { baseUrl, upLoadUrl, fileUploadUrl, temDownUrl, temWifiDownUrl, wifiUploadUrl}