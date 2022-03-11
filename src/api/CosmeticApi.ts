import { CosmeticRequest } from '../models/Cosmetic';
import { axiosInstant } from './axoisInstant';

export const CosmeticApi = {
  getAll: () => {
    return axiosInstant.get('/cosmetics');
  },
  add: (data: CosmeticRequest) => {
    return axiosInstant.post('/cosmetics', data);
  },
  delete: (id: string) => {
    return axiosInstant.delete(`/cosmetics/${id}`);
  },
};
