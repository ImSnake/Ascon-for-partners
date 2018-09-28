"use strict";

/**
 * Инструкция по добавлению \ удалению информации в слайдер
 * Чтобы добавить новый слайд, нужно добавить в slider.elements[] новый объект.
 * slider.elements[].class - должен иметь уникальное имя, т.к. это атрибут id для навигации слайдера
 * Под новый слайд добавить набор стилей в _slider-css.sass
 * Чтобы удалить слайд, нужно удалить объект из slider.elements[] и стили из _slider-css.sass с именем класса
 */
const slider ={
	 container: document.getElementById('slide'),
	 navPoint: '<i class="fas fa-circle"></i>',
	 openedEl: 0,

	 elements:[
			{
				 class: 'first-image',
				 heading: `<h3>ПРИГЛАШЕНИЕ К СОТРУДНИЧЕСТВУ</h3><p>АСКОН работает на российском рынке через широкую&nbsp;партнерскую&nbsp;сеть.<br>В основе нашей работы лежит гибкая&nbsp;партнерская&nbsp;политика.<br>Свои отношения с партнерами мы строим на&nbsp;принципах взаимовыгодного сотрудничества, общности интересов&nbsp;и&nbsp;доверия.</p><a class="action-button-1" href="terms_and_conditions.html" >о партнерской программе</a>`,
			},
			{
				 class: 'second-image',
				 heading: `<h3>ПРЕИМУЩЕСТВА ПАРТНЕРСТВА</h3><p>Для нас важно, чтобы партнеры были довольны прибыльностью и&nbsp;перспективами роста своего бизнеса, поэтому мы&nbsp;предлагаем выгодные условия поставок и&nbsp;уделяем большое внимание маркетинговой и&nbsp;технической поддержке своих партнёров, а&nbsp;также обучению сотрудников.</p><a class="action-button-1" href="cooperation-advantages.html" >узнать больше</a>`,
			},
			{
				 class: 'third-image',
				 heading: `<h3>ОБ ИМПОРТОЗАМЕЩЕНИИ</h3><p>В свете текущих политических и&nbsp;экономических событий крупнейший российский разработчик инженерного программного обеспечения, компания АСКОН, предлагает своим сбытовым партнерам объединить усилия в&nbsp;области импортозамещения 2D-&nbsp;и&nbsp;3D-инструментов проектирования и конструирования&nbsp;(САПР) в&nbsp;инженерных службах отечественных предприятий.</p><a class="action-button-1" href="http://ascon.ru/special_offers/kompas-3d/" target="_blank">подробная информация</a>`,
			},
	 ],

	 /**
		*Отрисовка навигации и первого слайда слайдера, запуск авто-ротации
		*/
	 renderSlide(){
			this.addNavPoints();
			this.createSlide();

			setInterval(function () {
				 slider.getNextSlide();
			}, 8000);
	 },
	 /**
		*Формирует нижнее навигационное меню слайдера, присваивает ID каждому слайду
		*/
	 addNavPoints(){
			let el = document.getElementById('sliderTrigger');
			for (let i = 0; i < this.elements.length; i++) {
				 const pointID = this.elements[i].class;

				 let pointEl = document.createElement('li');
				 pointEl.setAttribute('id', pointID);

				 pointEl.innerHTML = this.navPoint;
				 el.appendChild(pointEl);
			}
	 },

	 /**
		*Формирует контент и задает стили для текущего слайда
		*/
	 createSlide(){
			this.container.innerHTML = '';
			this.container.removeAttribute('class');

			let setClass = this.elements[this.openedEl].class;
			this.container.setAttribute('class', setClass);
			this.container.innerHTML = this.elements[this.openedEl].heading;

			this.addActivePoint();
	 },

	 /**
		*Добавляет класс 'active' к текущему слайду
		*/
	 addActivePoint(){
	 	 for (let i = 0; i < this.elements.length; i++){
	 	 	 if (i === this.openedEl){
	 	 	 	 $('#sliderTrigger li').removeClass('active');
	 	 	 	 $(`#${this.elements[i].class}`).addClass('active');
			 }
		 }
	 },

	 /**
		*навигация вправо
		*/
	 getNextSlide() {
			let b = this.elements.length - 1;
			if (b === this.openedEl) {
				 this.openedEl = 0;
				 return this.createSlide();
			}
			this.openedEl += 1;
			this.createSlide();
	 },

	 /**
		*навигация влево
		*/
	 getPrevSlide(){
			let b = this.elements.length - 1;
			if (this.openedEl === 0) {
				 this.openedEl = b;
				 return this.createSlide();
			}
			this.openedEl = this.openedEl - 1;
			this.createSlide();
	 },

	 /**
		*открыть слайд по клику на элементе в меню навигации
		*/
	 getSelectedSlide(link){
	 	 console.log(link);
	 	 for (let i = 0; i < this.elements.length; i++) {
	 	 	 if (this.elements[i].class.includes(link)) {
	 	 	 	 console.log(`${this.elements[i].class} found ${link}`);
	 	 	 	 this.openedEl = i;
					console.log(this.openedEl);
					return this.createSlide();
	 	 	 	}
	 	 }
	 },
};


(function ($) {
    $(document).ready(
        function () {

            //запуск слайдера
            slider.renderSlide();

            $('#sliderTrigger li').click(function () {
                slider.getSelectedSlide($(this).attr('id'));
            });

            $('.control_next').click(function () {
                slider.getNextSlide();
            });
            $('.control_prev').click(function () {
                slider.getPrevSlide();
            });

        });
})(jQuery);