export default{
	saveVal(state, data) {
		console.log(data, '保存值的')
		state.test = data
	}
}