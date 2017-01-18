/**
 * Created by huangchengwen on 17/1/11.
 */
module.exports = function(imitator) {
	// /bcs/push

	imitator({
		url: '/get/creditDatas',
		result: imitator.file('./test/data/creditDatas.json')
	});

	imitator({
		url: '/get/withdrawDatas',
		result: imitator.file('./test/data/withdrawDatas.json')
	});

	imitator({
		url: '/get/customer/detail',
		result: imitator.file('./test/data/customerDetail.json')
	});
}