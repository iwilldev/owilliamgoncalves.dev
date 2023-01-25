import sobre1 from '~/assets/images/sobre-1.jpg';
import sobre2 from '~/assets/images/sobre-2.jpg';
import sobre3 from '~/assets/images/sobre-3.jpg';
import sobre4 from '~/assets/images/sobre-4.jpg';
import aboutBanger from '~/assets/images/sobre-banger.png';
import aboutDesign from '~/assets/images/sobre-design.png';

const aboutFamilyImages = [
  {
    alt: 'William Gonçalves, homem branco de barba, com os braços cruzados, de lado e olhando para a câmera',
    duration: '700',
    mask: 'mask-hexagon',
    place: '',
    vars: '[--rotate-photo:24deg]',
    size: 'w-48 lg:w-64',
    src: sobre1,
  },
  {
    alt: 'Pedro, 5 anos, e William, apoiados na beira da piscina, fazendo careta com as bocas abertas',
    duration: '1000',
    mask: 'mask-heart',
    place: 'ml-auto',
    vars: '[--rotate-photo:-24deg]',
    size: 'w-48 lg:w-64',
    src: sobre2,
  },
  {
    alt: 'Henry, Pedro, Laura e William. Os quatro usam máscaras e estão de pé, na plataforma de uma estação do metrô',
    duration: '1000',
    mask: 'mask-heart',
    place: '',
    vars: '[--rotate-photo:24deg]',
    size: 'w-48 lg:w-64',
    src: sobre3,
  },
  {
    alt: 'William e Laura, com casacos azuis, sorrindo para a câmera. William usa óculos e um boné vermelho. Laura usa tranças no penteado',
    duration: '700',
    mask: 'mask-heart',
    place: 'ml-auto',
    vars: '[--rotate-photo:-24deg]',
    size: 'w-48 lg:w-64',
    src: sobre4,
  }
];

export {
  aboutBanger,
  aboutFamilyImages,
  aboutDesign
}