
const intervalId = setInterval(() => {
	const customError = new Error('Something went wrong!')
	customError.come = 404;
	console.dir(customError);
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
	clearInterval(intervalId);
});