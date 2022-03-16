// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Cosmetic } from '../models/Cosmetic';

interface CosmeticListProps {
  list: Cosmetic[];
  remove: (id: string) => void;
}

export function CosmeticList({ list, remove }: CosmeticListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {list?.map((item) => (
        <li key={item.id} className="py-4">
          <div className="flex justify-between items-center opacity[-67]">
            <div>
              <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to={`/invoices/${item.id}`}
                key={item.id}
              >
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.amount}</p>
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-red"
                onClick={() => remove(item.id)}
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
