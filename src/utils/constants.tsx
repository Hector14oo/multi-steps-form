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
  const multiplier = type ? 10 : 1;

  return [
    { icon: <ArcadeSVG />, label: 'Arcade', price: 9 * multiplier },
    { icon: <AdvancedSVG />, label: 'Advanced', price: 12 * multiplier },
    { icon: <ProSVG />, label: 'Pro', price: 15 * multiplier },
  ];
};

export const CHECKBOX_LIST = (type: boolean) => {
  const multiplier = type ? 10 : 1;

  return [
    { label: 'Online service', description: 'Acess to multiplayer games', price: 1 * multiplier },
    { label: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 * multiplier },
    { label: 'Customizable profile', description: 'Custom theme on your profile', price: 2 * multiplier },
  ];
};
