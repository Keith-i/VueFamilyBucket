export default {
	namespaced: true,
	state:{
		secondVal: '+++---+++'
	},
	mutations: {
		setSecondVal(state, data){
			state.secondVal = data
		}
	}
}