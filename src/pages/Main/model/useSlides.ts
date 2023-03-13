import React from 'react'
import { To } from 'react-router-dom'
import { useTranslate } from 'src/proccess'

interface Slide {
  id: number
  url: string
  desc: string
  button: string
  gradient: string
  to: To
}

export const useSlides = () => {
  const { translate } = useTranslate('pages/Main/Slides')

  const slides = React.useMemo<Slide[]>(
    () => [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.0.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.0.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.1.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.1.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.2.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.2.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.3.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.3.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.4.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.4.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.5.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.5.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.6.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.6.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: translate('slides.7.desc', 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!'),
        button: translate('slides.7.button', 'Играть'),
        gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
        to: '#',
      },
    ],
    [translate]
  )

  return slides
}
