import { useEffect, useState } from 'react';
import { CosmeticApi } from '../api/CosmeticApi';
import { CosmeticForm } from '../components/CosmeticForm';
import { CosmeticList } from '../components/List';
import { Cosmetic, CosmeticRequest } from '../models/Cosmetic';

export default function Cosmetics() {
  const [cosmetics, setCosmetic] = useState<Cosmetic[]>([]);

  const fetchData = async () => {
    const { data } = await CosmeticApi.getAll();
    setCosmetic(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const add = async (val: CosmeticRequest) => {
    await CosmeticApi.add(val);
    await fetchData();
  };

  const remove = async (id: string) => {
    await CosmeticApi.delete(id);
    await fetchData();
  };

  const styles = {
    label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
    field:
      'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
    button:
      ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
    errorMsg: 'text-red-500 text-sm',
  };
  return (
    <div className="mx-auto max-w-lg">
      <div className="text-center">Cosmetic</div>
      <div className="">
        <CosmeticForm styles={styles} val={add} />
        <CosmeticList list={cosmetics} remove={remove} />
      </div>
    </div>
  );
}
