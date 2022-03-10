import { Cosmetic } from '../models/Cosmetic';

interface CosmeticListProps {
  list: Cosmetic[];
}

export function CosmeticList({ list }: CosmeticListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {list?.map((person) => (
        <li key={person.id} className="py-4 flex">
          <div className="justify-between">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.amount}</p>
            </div>
            <div>
              <button
                type="button"
                className="bg-red-900 text-center w-8 border-rad rounded-sm"
              >
                1
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
