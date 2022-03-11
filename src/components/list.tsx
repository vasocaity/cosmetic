import { Cosmetic } from '../models/Cosmetic';

interface CosmeticListProps {
  list: Cosmetic[];
  remove: (id: string) => void;
}

export function CosmeticList({ list, remove }: CosmeticListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {list?.map((person) => (
        <li key={person.id} className="py-4">
          <div className="flex justify-between">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.amount}</p>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-red"
                onClick={() => remove(person.id)}
              >
                delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
