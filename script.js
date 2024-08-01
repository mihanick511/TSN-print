"use strict"
let list=document.querySelector('.header__list')
let header = document.querySelector('.header')
let show=function(instance)
{
	if(instance.classList.contains('active'))
	{
		instance.classList.remove('active')
		list.classList.remove('active')
		header.style.marginBottom = '0';
	}
	else
	{
		instance.classList.add('active')
		list.classList.add('active')
		header.style.marginBottom = '290px';
	}
}
let accordeon=function(instance)
{
	let proffiPrintInfo=instance.closest('._accordeonParent')
	let mobile=proffiPrintInfo.querySelector('._accordeonContent')
	if(mobile.style.maxHeight)
	{
		mobile.style.maxHeight = null;
		instance.classList.remove('active')
	}
	else
	{
		mobile.style.maxHeight = mobile.scrollHeight + 'px';
		instance.classList.add('active')
	}
}
let products = document.querySelectorAll('._product')
let search = function(instance)
{
	products.forEach(function(el)
	{
		if(el.innerText !== instance.value)
		{
			el.closest('.tsn-global__item').style.display = 'none'
		}
	})
	console.log(instance.value)
}
let options = // создаем объект, который хранит наши настройки слайдера
{
	rangeBetween: 30, // расстояние между слайдерами
	showSlideCount: 2, // количество показываемых слайдеров
	scrollCount: 1, // на сколько прокручиваем слайдер
	step: 0, // хранение значения для translateX
}
let options1 =
{
	rangeBetween: 15,
	showSlideCount: 3,
	scrollCount: 1,
	step: 0,
}
let options2 =
{
	rangeBetween: 30,
	showSlideCount: 3,
	scrollCount: 1,
	step: 0,
}

let checkLastElem = function(slide,slidess,opt) // функция рассчета значенния последнего слайда
{
	let allSizesSlides = 0; // размер всех слайдов 
	let allSlidesShow = (slide.offsetWidth * opt.showSlideCount) + (opt.rangeBetween * opt.showSlideCount); // размер видимых слайдов
	slidess.forEach(function(el) // перебор наших слайдов
	{
		allSizesSlides += (el.offsetWidth + opt.rangeBetween) // вычисление общего размера слайдера
	})
	let res = allSizesSlides - allSlidesShow // получение значения последнего слайда
	return res // дальнейшее использование значения
}
// функция расчета слайда
let calcSliding = function(slidess,param,opt)
{
	param === 'next'? opt.step += ((slidess[0].offsetWidth + opt.rangeBetween)*opt.scrollCount):opt.step -= (slidess[0].offsetWidth + opt.rangeBetween) // условие расчета step если нажата кнопка next, то +, если нажата prev, то -
	// if(param === 'next')
	// 	opt.step += ((slidess[0].offsetWidth + opt.rangeBetween)*opt.scrollCount)
	// else
	// 	opt.step -= (slidess[0].offsetWidth + opt.rangeBetween)
	slidess.forEach(function(el) // перебор наших слайдов
	{
		el.style.transform = `translateX(-${opt.step}px)` // динамично двигаем слайдер
	})
}
// Шаг вперед
let next = function(btn,slide,slides,opt)
{
	btn.addEventListener('click',function()// вешаем слушатель событий на стрелку вправо
	{
		if(opt.step === checkLastElem(slide,slides,opt)) return // проверка на конец слайдера
		calcSliding(slides,'next',opt) // вычисление и присвоение значения step
	})	
}
// Шаг назад
let prev = function(btn,slide,slides,opt)
{
	btn.addEventListener('click',function()// вешаем слушатель событий на стрелку влево
	{
		if(opt.step === 0) return // проверка на начало слайдера
		calcSliding(slides,'prev',opt) // вычисление и присвоение значения step
	})
}


let init = function(opt, sliderClass) // функция инициализации (получения наших тегов)
{
	let parent = document.querySelector(`.${sliderClass}`) // получение родительского тега слайдера
	let slider = parent.querySelector('._slider') // получение всех слайдов вместе
	let slides = slider.querySelectorAll('._slide') // получение доступа каждого слайдера через массив
	let nextBtn = parent.querySelector('._next') // получение кнопки вправо
	let prevBtn = parent.querySelector('._prev') // получение кнопки влево
	next(nextBtn,slides[0],slides,opt) // функция остановки прокрутки
	prev(prevBtn,slides[0],slides,opt) // функция остановки прокрутки
	slider.style.gap = opt.rangeBetween + 'px' // назначение стиля gap в styles
	slides.forEach((el)=> // перебор каждого слайда
	{
		el.style.width = ((slider.offsetWidth - opt.rangeBetween * (opt.showSlideCount - 1))/opt.showSlideCount) + 'px' // для того чтобы все что поместилось в рамку слайдера(в нашем случае 2 слайда и 1 gap)
	})
}
init(options, '_assort') // указываем область нашего слайдера
init(options1, '_assort1') // указываем область нашего слайдера
init(options2, '_assort2')











