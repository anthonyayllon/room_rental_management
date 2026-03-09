import React, { useState } from 'react';
import {
  Building2,
  Download,
  Plus,
  Activity,
  CheckCircle,
  Wrench,
  Search,
  Eye,
  Edit2,
  DoorOpen,
  Home
} from 'lucide-react';
import AddPropertyModal from './AddPropertyModal';

interface PropertyInventoryProps {
  onNavigate?: (page: 'dashboard' | 'tenants' | 'contracts' | 'inventory' | 'floor-plan' | 'room-inventory') => void;
}

export default function PropertyInventory({ onNavigate }: PropertyInventoryProps) {
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto h-full">
      <div className="px-8 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight mb-2 text-[#0d121b] dark:text-white">Inventario de Propiedades</h1>
            <p className="text-gray-500 text-sm">Administra y visualiza la ocupación de tus activos inmobiliarios.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-200 border border-[#e2e8f0] dark:border-[#334155] px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
              <Download size={20} />
              Export CSV
            </button>
            <button 
              onClick={() => setIsAddPropertyModalOpen(true)}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:translate-y-[-1px] transition-all flex items-center gap-2"
            >
              <Plus size={20} />
              Nueva Propiedad
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-[#161e2d] p-6 rounded-2xl border border-[#e7ebf3] dark:border-[#1e293b] flex items-center gap-4 shadow-sm">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0d121b] dark:text-white">72%</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ocupación Total</p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#161e2d] p-6 rounded-2xl border border-[#e7ebf3] dark:border-[#1e293b] flex items-center gap-4 shadow-sm">
            <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0d121b] dark:text-white">12</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Unidades Disponibles</p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#161e2d] p-6 rounded-2xl border border-[#e7ebf3] dark:border-[#1e293b] flex items-center gap-4 shadow-sm">
            <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
              <Wrench size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0d121b] dark:text-white">6</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Bajo Mantenimiento</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#161e2d] rounded-2xl border border-[#e7ebf3] dark:border-[#1e293b] shadow-sm overflow-hidden">
          <div className="flex gap-4 p-4 border-b border-[#e7ebf3] dark:border-[#1e293b] items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input className="w-full bg-[#f8fafc] dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-[#0d121b] dark:text-white" placeholder="Buscar por nombre, ID o ubicación..." type="text"/>
            </div>
            <button className="bg-[#f8fafc] dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] text-gray-600 dark:text-gray-300 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              All Properties
            </button>
            <select className="text-sm font-semibold bg-[#f8fafc] dark:bg-[#1e293b] border-[#e2e8f0] dark:border-[#334155] rounded-lg px-3 py-2.5 min-w-[200px] focus:ring-primary focus:border-primary text-gray-600 dark:text-gray-300">
              <option value="">Estado de Ocupación</option>
              <option value="alta">Alta (&gt;80%)</option>
              <option value="media">Media (50-80%)</option>
              <option value="baja">Baja (&lt;50%)</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#1e293b] border-b border-[#e7ebf3] dark:border-[#1e293b]">
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Propiedad</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Número de Pisos</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Estado de Ocupación</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Unidades</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7ebf3] dark:divide-[#1e293b]">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1e293b] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0d121b] dark:text-white">Torre Alpha - Downtown</p>
                        <p className="text-[11px] text-gray-500">Calle Principal #123</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">12</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold">Pisos</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-full max-w-[200px]">
                      <div className="flex justify-between text-[10px] font-bold mb-1.5 uppercase">
                        <span className="text-primary">84% Ocupado</span>
                        <span className="text-gray-400">42 Unid.</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-primary" style={{ width: '84%' }}></div>
                        <div className="h-full bg-green-500" style={{ width: '10%' }}></div>
                        <div className="h-full bg-orange-500" style={{ width: '6%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xs font-bold text-[#0d121b] dark:text-white">32</p>
                        <p className="text-[10px] text-gray-500 uppercase">Libres</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-green-500">6</p>
                        <p className="text-[10px] text-gray-500 uppercase">Disp.</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-orange-500">4</p>
                        <p className="text-[10px] text-gray-500 uppercase">Mant.</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors" title="Ver detalles">
                        <Eye size={20} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors" title="Editar">
                        <Edit2 size={20} />
                      </button>
                      <button 
                        onClick={() => onNavigate?.('room-inventory')}
                        className="p-2 rounded-lg text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all border border-primary/10" 
                        title="Gestionar Unidades"
                      >
                        <DoorOpen size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1e293b] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                        <Home size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0d121b] dark:text-white">Residencial Los Olivos</p>
                        <p className="text-[11px] text-gray-500">Av. Las Palmas #45</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">2</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold">Pisos</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-full max-w-[200px]">
                      <div className="flex justify-between text-[10px] font-bold mb-1.5 uppercase">
                        <span className="text-primary">60% Ocupado</span>
                        <span className="text-gray-400">20 Unid.</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-primary" style={{ width: '60%' }}></div>
                        <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                        <div className="h-full bg-orange-500" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xs font-bold text-[#0d121b] dark:text-white">12</p>
                        <p className="text-[10px] text-gray-500 uppercase">Libres</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-green-500">6</p>
                        <p className="text-[10px] text-gray-500 uppercase">Disp.</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-orange-500">2</p>
                        <p className="text-[10px] text-gray-500 uppercase">Mant.</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors" title="Ver detalles">
                        <Eye size={20} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors" title="Editar">
                        <Edit2 size={20} />
                      </button>
                      <button 
                        onClick={() => onNavigate?.('room-inventory')}
                        className="p-2 rounded-lg text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all border border-primary/10" 
                        title="Gestionar Unidades"
                      >
                        <DoorOpen size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddPropertyModal isOpen={isAddPropertyModalOpen} onClose={() => setIsAddPropertyModalOpen(false)} />
    </div>
  );
}
