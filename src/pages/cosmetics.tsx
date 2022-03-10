import { useEffect, useState } from 'react';
import { CosmeticApi } from '../api/CosmeticApi';
import { CosmeticFrom } from '../components/form';
import { CosmeticList } from '../components/list';
import { Cosmetic } from '../models/Cosmetic';

export default function Cosmetics() {
  const [cosmetics, setCosmetic] = useState<Cosmetic[]>([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await CosmeticApi.getAll();
      setCosmetic(data);
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto">
      <div className="text-center">Cosmetic</div>
      <div className="flex justify-items-center">
        <CosmeticFrom />
        <CosmeticList list={cosmetics} />
      </div>
    </div>
  );
}
