import './index.scss';

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function Carrossel({slides}) {
  const swiperRef = useRef(null);
  //   const slides = [
  //   {
  //     title: 'Título 1',
  //     description: 'Descrição 1',
  //     date: '12 de junho',
  //     imgSrc: '/assets/images/carrossel-experiencias-1.png'
  //   },
  //   {
  //     title: 'Título 2',
  //     description: 'Descrição 2',
  //     date: '15 de julho',
  //     imgSrc: '/assets/images/carrossel-experiencias-2.png'
  //   },
  //   {
  //     title: 'Título 3',
  //     description: 'Descrição 3',
  //     date: '20 de agosto',
  //     imgSrc: '/assets/images/carrossel-experiencias-3.png'
  //   }, {
  //     title: 'Título 3',
  //     description: 'Descrição 3',
  //     date: '20 de agosto',
  //     imgSrc: '/assets/images/carrossel-experiencias-3.png'
  //   }
  // ];
 
  const slidesPerView = slides.length < 3 ? slides.length : 3; // Se tiver menos que 3, exibe o número de slides disponíveis

  return (


      <div className='container'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          {slides.map((item,index) => (
            <SwiperSlide key={index}>
            <div className='card'>
            <div className='card-imagem'>
                <img src={item.imagem} alt={item.titulo} />
            </div>

            <div className='card-informacoes'>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <p className='data-realizacao'>Realizado em: {new Date(item.data_realizacao).toLocaleDateString()}</p>
            </div>

          

            
        </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
  );
}