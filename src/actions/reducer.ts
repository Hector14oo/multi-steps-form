import { FormInformation } from '@/types/FormTypes';

export const initialState: FormInformation = {
  userData: {
    name: undefined,
    email: undefined,
    number: undefined,
  },
  plan: { name: undefined, price: undefined },
  planType: false, //false = Monthly | true = Yearly
  addOns: [],
  step: 1,
  errorOpacity: 0,
  errorMessage: ['Please fill out the form correctly, check the incomplete fields.', 'Please select a plan.'],
  success: false,
  total: 0,
};

export const formReducer = (state: any, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case 'STEP_1':
      return {
        ...state,
        userData: {
          ...payload,
        },
      };
    case 'STEP_2':
      return {
        ...state,
        plan: payload.plan,
        total: payload.plan.price,
      };
    case 'STEP_3':
      return {
        ...state,
        addOns: payload.addOns,
        total: state.total + payload.addOns.reduce((a: number, v: { name: string; price: number }) => a + v.price, 0),
      };
    case 'ERROR':
      return {
        ...state,
        errorOpacity: payload,
      };

    case 'PLAN_TYPE':
      return {
        ...state,
        planType: !state.planType,
      };

    case 'CHANGE_PLAN':
      if (payload)
        return {
          ...state,
          step: payload,
          total: 0,
        };
    case 'SUCCESS':
      return {
        ...state,
        success: true,
      };

    case 'GO_BACK':
      if (state.step === 1) break;
      if (state.step === 4) {
        return {
          ...state,
          step: state.step - 1,
          total: state.plan.price,
        };
      }
      return {
        ...state,
        step: state.step - 1,
      };
    case 'GO_NEXT':
      return {
        ...state,
        step: state.step + 1,
      };

    default:
      throw new Error('Unknown payload type: ' + payload.type);
  }
};
