import React, { useState } from 'react';
import {
  Menu,
  Bell,
  HelpCircle,
  Info,
  Building,
  ChevronsUpDown,
  Download,
  Plus,
  Calendar,
  TrendingDown,
  Clock,
  PieChart,
  Search,
  Filter,
  CalendarDays,
  ChevronDown,
  SlidersHorizontal,
  Wrench,
  Zap,
  Sparkles,
  Receipt,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import NewExpenseModal from './NewExpenseModal';

export default function ExpenseControl() {
  const [isNewExpenseModalOpen, setIsNewExpenseModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="h-16 flex items-center justify-between px-6 border-b border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-[#1a202c] flex-shrink-0 z-10">
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <Menu size={24} />
          </button>
          <span className="font-bold text-lg text-gray-900 dark:text-white">AdminRent</span>
        </div>
        <div className="flex-1 hidden lg:flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Control de Finanzas</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Control de Gastos</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                <Info size={16} />
                Gestión financiera y registro de mantenimiento.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group min-w-[240px]">
                <Building className="absolute left-3 top-2.5 text-primary" size={20} />
                <select className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-[#1a202c] border-2 border-primary/20 dark:border-primary/30 rounded-xl text-sm font-bold text-gray-900 dark:text-white shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer">
                  <option value="all">Seleccionar Propiedad (Todas)</option>
                  <option value="prop1">Edificio Jazmines</option>
                  <option value="prop2">Torre Norte</option>
                  <option value="prop3">Residencial Los Álamos</option>
                  <option value="prop4">Edificio Central Park</option>
                </select>
                <ChevronsUpDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" size={20} />
              </div>
              <button className="flex items-center justify-center px-4 py-2.5 bg-white dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Download size={18} className="mr-2 text-gray-400" />
                Exportar
              </button>
              <button 
                onClick={() => setIsNewExpenseModalOpen(true)}
                className="flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all transform active:scale-95"
              >
                <Plus size={18} className="mr-2" />
                Nuevo Gasto
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1a202c] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50"></div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">Global</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Gasto Total (Abril)</span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-xl text-primary">
                  <Calendar size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">$4,250.00</h3>
                <div className="flex items-center gap-1 text-xs mt-1 text-green-600 font-bold">
                  <TrendingDown size={14} />
                  <span>-12% vs mes anterior</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a202c] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-50"></div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-orange-600/70 uppercase tracking-widest">Pendiente</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Pendiente Revisión</span>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-xl text-orange-600">
                  <Clock size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">$850.00</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">3 facturas requieren acción</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a202c] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 opacity-50"></div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-purple-600/70 uppercase tracking-widest">Servicios</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Categoría Mayor</span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-xl text-purple-600">
                  <PieChart size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">65% <span className="text-lg font-medium text-gray-400 ml-1">Total</span></h3>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-[#1a202c] p-3 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-wrap lg:flex-nowrap items-center gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3.5 top-2.5 text-gray-400" size={18} />
                <input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-none text-sm focus:ring-2 focus:ring-primary/50 dark:text-white placeholder-gray-400 transition-all" placeholder="Buscar concepto, unidad o proveedor..." type="text"/>
              </div>
              <div className="relative w-full lg:w-48">
                <select className="w-full pl-3 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-600 dark:text-gray-300 outline-none focus:ring-2 focus:ring-primary/50 appearance-none transition-all cursor-pointer">
                  <option value="all">Estado del Gasto</option>
                  <option value="pending">Pendientes</option>
                  <option value="completed">Completados</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="supplies">Suministros</option>
                </select>
                <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={20} />
              </div>
              <div className="relative w-full lg:w-44">
                <CalendarDays className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-600 dark:text-gray-300 outline-none focus:ring-2 focus:ring-primary/50 appearance-none transition-all cursor-pointer">
                  <option>Este Mes</option>
                  <option>Mes Pasado</option>
                  <option>Últimos 3 Meses</option>
                  <option>Este Año</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={20} />
              </div>
              <button className="flex items-center justify-center p-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 transition-all hover:text-primary active:bg-gray-100" title="Filtros Avanzados">
                <SlidersHorizontal size={24} />
              </button>
            </div>

            <div className="bg-white dark:bg-[#1a202c] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap">Fecha</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Concepto / Propiedad</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Unidad</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Categoría</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Monto</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-center">Estado</th>
                      <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">24 Abr, 2024</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-xl flex-shrink-0">
                            <Wrench size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Reparación Fuga Baño</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">Edificio Jazmines • Hab. 101</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">101</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Plomería</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">$120.00</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></span> Pagado
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Ver Recibo">
                            <Receipt size={18} />
                          </button>
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Editar">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-gray-500 hover:text-red-600 transition-colors" title="Eliminar">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">22 Abr, 2024</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 p-2 rounded-xl flex-shrink-0">
                            <Zap size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Factura Electricidad</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">Torre Norte • General</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">General</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Servicios</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">$340.50</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-1.5"></span> Pendiente
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Ver Recibo">
                            <Receipt size={18} />
                          </button>
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Editar">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-gray-500 hover:text-red-600 transition-colors" title="Eliminar">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">20 Abr, 2024</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-2 rounded-xl flex-shrink-0">
                            <Sparkles size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Servicio de Limpieza</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">Edificio Jazmines • Áreas Comunes</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">Exterior</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Mantenimiento</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">$80.00</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></span> Pagado
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Ver Recibo">
                            <Receipt size={18} />
                          </button>
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Editar">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-gray-500 hover:text-red-600 transition-colors" title="Eliminar">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/30">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Mostrando <span className="font-bold text-gray-900 dark:text-white">1-3</span> de <span className="font-bold text-gray-900 dark:text-white">24</span> registros</p>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-1.5 text-sm font-bold rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-gray-800 disabled:opacity-50 flex items-center gap-1 transition-all">
                    <ChevronLeft size={18} /> Anterior
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">1</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-gray-800 text-sm font-bold transition-all text-gray-500">2</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-gray-800 text-sm font-bold transition-all text-gray-500">3</button>
                  </div>
                  <button className="px-4 py-1.5 text-sm font-bold rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-gray-800 flex items-center gap-1 transition-all">
                    Siguiente <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewExpenseModal isOpen={isNewExpenseModalOpen} onClose={() => setIsNewExpenseModalOpen(false)} />
    </div>
  );
}
