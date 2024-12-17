// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]')
if(inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: '+7 999 999 99 99',
			placeholder: '+7 XXX XXX XX XX',
		}).mask(input);
	})
}

// SWIPER
if(document.querySelector('.info-swiper')) {
	const swiper = new Swiper('.info-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
}

// MODAL
const modal = document.querySelectorAll('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
if(modal.length > 0) {
	const openers = document.querySelectorAll('[data-modal-open]');
	const closers = document.querySelectorAll('[data-modal-close]');

	window.addEventListener('click', (e) => {
		if(e.composedPath()[0].classList.contains('modal-wrapper') || e.composedPath()[0].classList.contains('modal-wrapper__content')) {
			modal.forEach((modal) => {
				modal.classList.remove('active');
			})
			modalWrapper.classList.remove('active');
		}
	})

	openers.forEach((opener) => {
		opener.addEventListener('click', () => {
			const modalId = opener.getAttribute('data-modal-open');
			const modal = document.getElementById(modalId);
			modal.classList.add('active');
			modalWrapper.classList.add('active');
		})
	})

	closers.forEach((closer) => {
		closer.addEventListener('click', () => {
			const modalId = closer.getAttribute('data-modal-close');
			const modal = document.getElementById(modalId);
			modal.classList.remove('active');
			modalWrapper.classList.remove('active');
		})
	})
}

// CHART
const ctx = document.getElementById('lineChart')?.getContext('2d');

if(ctx) {
	console.log(ctx)
	const lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Температура окружающей среды
			datasets: [
				{
					label: '10 мм',
					data: [180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80],
					backgroundColor: "#3F73BA",
					borderColor: "#3F73BA",
					borderWidth: 4,
					fill: false,
				},
				{
					label: '13,3 мм',
					data: [160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60],
					backgroundColor: '#5198D2',
					borderColor: '#5198D2',
					borderWidth: 4,
					fill: false,
				},
				{
					label: '16 мм',
					data: [140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40],
					backgroundColor: '#A2A4A5',
					borderColor: '#A2A4A5',
					borderWidth: 4,
					fill: false,
				},
				{
					label: '21,15 мм',
					data: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20],
					backgroundColor: '#F2813C',
					borderColor: '#F2813C',
					borderWidth: 4,
					fill: false,
				},
				{
					label: '25 мм',
					data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5],
					backgroundColor: '#FDBE29',
					borderColor: '#FDBE29',
					borderWidth: 4,
					fill: false,
				},
			],
		},
		options: {
			// maintainAspectRatio: false,
			responsive: false,
			interaction: {
				mode: 'index',
				intersect: false,
			},
			plugins: {
				legend: {
					position: 'bottom',
					labels: {
						generateLabels: (chart) => {
							const datasets = chart.data.datasets;
							return datasets.map((dataset, i) => ({
								text: dataset.label,
								fillStyle: dataset.backgroundColor,
								strokeStyle: dataset.borderColor,
								lineWidth: 0, // Для линии
								hidden: !chart.isDatasetVisible(i),
								datasetIndex: i,
								pointStyle: 'rectRounded', // Форма
							}));
						},
						boxWidth: 70,
						boxHeight: 6,
						padding: 10,
						color: '#949494',
						font: {
							size: 24,
							family: 'Gilroy',
							weight: 'normal',
							lineHeight: 1.5,
						},
					},
				}
			},
			scales: {
				x: {
					border: {
						width: 2,
						color: '#D9D9D9',
					},
					grid: {
						offset: true
					},
					ticks: {
						color: "#949494",
						font: {
							family: 'Gilroy',
							size: 24,
							weight: 'normal',
							lineHeight: 1.5
						}
					},
					title: {
						display: true,
						text: ['Температура окружающей среды,','°C'],
						color: '#07302D',
						padding: {
							top: 32,
							bottom: 10,
						},
						font: {
							size: 24,
							family: 'Gilroy',
							weight: 'bold',
							lineHeight: 'normal',
						}
					},
				},
				y: {
					border: {
						width: 2,
						color: '#D9D9D9',
					},
					grid: {
						offset: true
					},
					ticks: {
						color: "#949494",
						font: {
							family: 'Gilroy',
							size: 24,
							weight: 'normal',
							lineHeight: 1.5
						}
					},
					title: {
						display: true,
						text: 'Длительно допустимые токовые нагрузки, A',
						color: '#07302D',
						padding: {
							bottom: 32,
						},
						font: {
							size: 24,
							family: 'Gilroy',
							weight: 'bold',
							lineHeight: 'normal',
						}
					},
				},
			},
			elements: {
				point: {
					radius: 0
				}
			}
		},

	});
}

// MORE-LEVEL
const handlersMoreLevel = document.querySelectorAll('[data-more-level]');
const moreLevelContainers = document.querySelectorAll('.js-more-level');
if(handlersMoreLevel.length > 0) {
	handlersMoreLevel.forEach(handler => {
		const id = handler.getAttribute('data-more-level')
		const moreLevelContainer = document.querySelector(`#${id}`);
		handler.addEventListener('mouseenter', function () {
			moreLevelContainers.forEach(container => {
				if(id.indexOf('LevelTwo') === -1) container.classList.remove('header-nav-more__column--active');
				if(id.indexOf('LevelTwo') !== -1 && container?.id.indexOf('LevelTwo') !== -1) {
					container.classList.remove('header-nav-more__column--active');
				}
			})
			moreLevelContainer.classList.add('header-nav-more__column--active');
		});
	})
}
// MORE-NAV
const handlersMoreNav = document.querySelectorAll('[data-nav-more]');
const moreNavContainers = document.querySelectorAll('.header-nav-more');
if (handlersMoreNav.length > 0) {
	const header = document.querySelector('.header');
	handlersMoreNav.forEach(handler => {
		const id = handler.getAttribute('data-nav-more')
		const moreNavContainer = document.querySelector(`#${id}`);
		if(id === 'moreNavAbout') {
			const {x} = handler.getBoundingClientRect();
			moreNavContainer.style.left = `${x}px`;
		}
		handler.addEventListener('mouseenter', function () {
			moreNavContainers.forEach(container => {
				container.classList.remove('header-nav-more--active');
			})
			moreNavContainer.classList.add('header-nav-more--active');
		});
		window.addEventListener('mousemove', (e) => {
			if(!e.composedPath().some(path => path?.classList?.contains('header'))) {
				moreNavContainer.classList.remove('header-nav-more--active');
				moreLevelContainers.forEach(container => {
					container.classList.remove('header-nav-more__column--active');
				})
			}
		})
	});
}

// FORM-STEPS
const form = document.querySelector('.modal-partners-form');
if(form) {
	let currentStep = 0;
	const nextStepButton = form.querySelector('#nextStep');
	const prevStepButton = form.querySelector('#prevStep');
	const submitButton = form.querySelector('#submit');
	const formSteps = form.querySelectorAll('.modal-partners-form__step');
	const progressStep = form.querySelectorAll('.modal-partners-progress__step');

	nextStepButton.addEventListener('click', () => {
		const inputs = formSteps[currentStep].querySelectorAll('input, textarea');
		let isValid = true
		inputs.forEach(input => {
			if(!input.checkValidity()) {
				input.reportValidity();
				isValid = false
			}
		})

		if(!isValid) return

		if(currentStep < formSteps.length - 1) {
			currentStep++
			formSteps[currentStep - 1].classList.remove('active');
			formSteps[currentStep].classList.add('active');
			progressStep[currentStep].classList.add('active');
		}
		if(currentStep === formSteps.length - 1) {
			submitButton.classList.add('active');
			nextStepButton.classList.remove('active');
		}
		if(currentStep > 0) {
			prevStepButton.classList.add('active');
		}
		if(currentStep === 0) {
			prevStepButton.classList.remove('active');
		}
	})

	prevStepButton.addEventListener('click', () => {
		if(currentStep > 0) {
			currentStep--;
			formSteps[currentStep + 1].classList.remove('active');
			formSteps[currentStep].classList.add('active');
			progressStep[currentStep + 1].classList.remove('active');
		}
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('Тут нужно отправить данные куда надо');
	})
}

// FILES
const fileInputContainers = document.querySelectorAll('.input-file');
if(fileInputContainers.length > 0) {

	fileInputContainers.forEach(container => {
		const inputTitle = container.querySelector('.input-file__title');
		const input = container.querySelector('input');
		const inputBox = container.querySelector('.input-file__box');

		const inputHandler = () => {
			if(input.files.length === 0) {
				inputTitle.textContent = 'Загрузите документ';
				container.classList.remove('input-file--filled');
				return
			}
			const fileName = input.files[0].name;
			console.log(input.files[0]);
			inputTitle.textContent = fileName;
			container.classList.add('input-file--filled');
		}

		inputBox.addEventListener('click', () => {
			input.value = '';
			input.files = null;
			inputHandler();
		})

		input.addEventListener('input', inputHandler);
	})
}
