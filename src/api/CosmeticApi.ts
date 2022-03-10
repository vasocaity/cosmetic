import { axiosInstant } from './axoisInstant';

export const CosmeticApi = {
  getAll: () => {
    return axiosInstant.get('/cosmetics');
  },
};
