import { ArcadeSVG } from '@public/images/ArcadeSVG';
import { AdvancedSVG } from '@public/images/AdvancedSVG';
import { ProSVG } from '@public/images/ProSVG';

export const STEP_LIST = [
  { value: '1', label: 'STEP 1', description: 'YOUR INFO' },
  { value: '2', label: 'STEP 2', description: 'SELECT PLAN' },
  { value: '3', label: 'STEP 3', description: 'ADD-ONS' },
  { value: '4', label: 'STEP 4', description: 'SUMMARY' },
];

export const INPUT_LIST = [
  { label: 'Name', type: 'text', name: 'name', placeholder: 'Stephen King' },
  { label: 'Email Address', type: 'email', name: 'email', placeholder: 'stephenking@lorem.com' },
  { label: 'Phone Number', type: 'number', name: 'number', placeholder: '+57 313 111 1111' },
];

export const RADIO_LIST = (type: boolean) => {
  const priceList = !type ? ['$9/mo', '$12/mo', '$15/mo'] : ['$90/yr', '$120/yr', '$150/yr'];
  const hasDiscount = !type ? '' : '2 months free';

  return [
    { icon: <ArcadeSVG />, label: 'Arcade', price: priceList[0], hasDiscount },
    { icon: <AdvancedSVG />, label: 'Advanced', price: priceList[1], hasDiscount },
    { icon: <ProSVG />, label: 'Pro', price: priceList[2], hasDiscount },
  ];
};