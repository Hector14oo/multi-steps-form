import { UserInformation } from '@/types/FormTypes';

export const initialState: UserInformation = {
  userData: {
    name: undefined,
    email: undefined,
    number: undefined,
  },
  plan: undefined,
  planType: false, //false = Monthly | true = Yearly
  addOns: [],
  step: 3,
  success: false,
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
      };
    case 'STEP_3':
      return {
        ...state,
        addOns: payload.addOns,
      };

    case 'PLAN_TYPE':
      return {
        ...state,
        planType: !state.planType,
      };

    case 'GO_BACK':
      if (state.step === 1) break;
      return {
        ...state,
        step: state.step - 1,
      };
    case 'GO_NEXT':
      if (state.step === 4) {
        return {
          ...state,
          success: true,
        };
      }

      return {
        ...state,
        step: state.step + 1,
      };

    default:
      throw new Error('Unknown payload type: ' + payload.type);
  }
};
