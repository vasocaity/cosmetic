import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-slate-200 min-h-screen ">
      <Outlet />
    </div>
  );
}
