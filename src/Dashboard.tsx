import React from 'react';
import {
  Building2,
  Calendar,
  Bell,
  PlusCircle,
  ChevronDown,
  DollarSign,
  TrendingUp,
  Home,
  Minus,
  AlertCircle,
  AlertTriangle,
  Receipt,
  TrendingDown,
  Clock,
  CalendarDays,
  BellRing
} from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <header className="w-full px-6 py-6 md:px-10 md:py-8 bg-white dark:bg-[#182130] border-b border-[#e7ebf3] dark:border-[#2b3547] flex flex-wrap items-center justify-between gap-6 sticky top-0 z-20">
        <div className="flex flex-col gap-1 min-w-[280px]">
          <h1 className="text-[#0d121b] dark:text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
            Resumen Financiero
          </h1>
          <p className="text-[#4c669a] dark:text-gray-400 text-sm md:text-base font-medium">
            Panel de control de activos residenciales.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-4">
          <div className="flex-1 max-w-sm min-w-[200px] relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Building2 size={20} className="text-[#4c669a] dark:text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-10 py-2.5 bg-[#f6f6f8] dark:bg-[#232d3d] border border-[#e7ebf3] dark:border-[#2b3547] rounded-xl text-sm font-semibold text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
              <option value="all">Resumen Global (Todas las Propiedades)</option>
              <option value="b1">Edificio Terraza Real</option>
              <option value="b2">Residencial Los Olivos</option>
              <option value="b3">Torre Centenario</option>
              <option value="b4">Habitaciones Santa Fe</option>
              <option value="b5">Condominio El Prado</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-[#f6f6f8] dark:bg-[#232d3d] px-3 py-2.5 rounded-xl border border-[#e7ebf3] dark:border-[#2b3547]">
              <Calendar size={20} className="text-[#4c669a] dark:text-gray-400" />
              <span className="text-sm font-semibold text-[#0d121b] dark:text-white">
                Octubre 2023
              </span>
            </div>
            <button className="relative p-2.5 rounded-full hover:bg-[#f6f6f8] dark:hover:bg-[#232d3d] text-[#4c669a] dark:text-gray-400 transition-colors border border-transparent hover:border-[#e7ebf3] dark:hover:border-[#2b3547]">
              <Bell size={24} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#182130]"></span>
            </button>
            <div className="relative group">
              <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                <PlusCircle size={20} />
                <span className="hidden sm:inline">Nueva Operación</span>
                <ChevronDown size={20} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-[#1f2937] border border-[#e7ebf3] dark:border-[#374151] rounded-xl shadow-xl hidden group-hover:block z-50 overflow-hidden duration-200"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="w-full max-w-[1400px] mx-auto p-6 md:p-10 flex flex-col gap-6 md:gap-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col p-6 bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <DollarSign size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                <TrendingUp size={16} />
                +5.2%
              </span>
            </div>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium mb-1">
              Ingresos Totales
            </p>
            <h3 className="text-[#0d121b] dark:text-white text-2xl font-bold tracking-tight">
              $45,200
            </h3>
          </div>
          
          <div className="flex flex-col p-6 bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Home size={24} className="text-primary dark:text-blue-400" />
              </div>
              <span className="flex items-center gap-1 text-[#4c669a] dark:text-gray-400 text-xs font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                <Minus size={16} />
                0%
              </span>
            </div>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium mb-1">
              Tasa de Ocupación
            </p>
            <h3 className="text-[#0d121b] dark:text-white text-2xl font-bold tracking-tight">
              85%
            </h3>
          </div>

          <div className="flex flex-col p-6 bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-16 h-16 bg-red-500/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
              </div>
              <span className="flex items-center gap-1 text-red-600 dark:text-red-400 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">
                <AlertTriangle size={16} />
                Acción
              </span>
            </div>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium mb-1 relative z-10">
              Pagos Pendientes
            </p>
            <h3 className="text-[#0d121b] dark:text-white text-2xl font-bold tracking-tight relative z-10">
              $1,200
            </h3>
          </div>

          <div className="flex flex-col p-6 bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Receipt size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                <TrendingDown size={16} />
                -1.5%
              </span>
            </div>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium mb-1">
              Gastos Mensuales
            </p>
            <h3 className="text-[#0d121b] dark:text-white text-2xl font-bold tracking-tight">
              $8,500
            </h3>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 flex flex-col bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm p-6">
            <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
              <div>
                <h3 className="text-[#0d121b] dark:text-white text-lg font-bold">
                  Ingresos vs Gastos
                </h3>
                <p className="text-[#4c669a] dark:text-gray-400 text-sm">
                  Resumen de los últimos 6 meses
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-medium text-[#4c669a] dark:text-gray-400">
                  <span className="w-3 h-3 rounded-full bg-primary"></span> Ingresos
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-[#4c669a] dark:text-gray-400">
                  <span className="w-3 h-3 rounded-full bg-[#e7ebf3] dark:bg-[#334155]"></span> Gastos
                </span>
              </div>
            </div>
            <div className="flex-1 min-h-[300px] flex items-end justify-between gap-2 sm:gap-4 px-2">
              {[
                { month: 'Ene', income: 60, expense: 30, val: '$12k' },
                { month: 'Feb', income: 75, expense: 40, val: '$15k' },
                { month: 'Mar', income: 50, expense: 45, val: '$10k' },
                { month: 'Abr', income: 85, expense: 35, val: '$18k' },
                { month: 'May', income: 90, expense: 30, val: '$19k' },
                { month: 'Jun', income: 95, expense: 25, val: '$21k' },
              ].map((data, i) => (
                <div key={i} className="flex flex-col items-center gap-2 h-full justify-end flex-1 group cursor-pointer">
                  <div className="relative w-full max-w-[40px] flex gap-1 items-end h-[80%]">
                    <div
                      className="w-1/2 bg-primary rounded-t-sm group-hover:bg-blue-600 transition-all relative"
                      style={{ height: `${data.income}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {data.val}
                      </div>
                    </div>
                    <div
                      className="w-1/2 bg-[#e7ebf3] dark:bg-[#334155] rounded-t-sm"
                      style={{ height: `${data.expense}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-[#4c669a] dark:text-gray-400">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm p-6">
            <h3 className="text-[#0d121b] dark:text-white text-lg font-bold mb-2">
              Estado de Ocupación
            </h3>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm mb-6">
              Distribución actual de unidades
            </p>
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[220px]">
              <svg className="transform -rotate-90" height="200" viewBox="0 0 40 40" width="200">
                <circle
                  className="dark:stroke-gray-800"
                  cx="20"
                  cy="20"
                  fill="transparent"
                  r="15.91549430918954"
                  stroke="#f6f6f8"
                  strokeWidth="5"
                ></circle>
                <circle
                  cx="20"
                  cy="20"
                  fill="transparent"
                  r="15.91549430918954"
                  stroke="#135bec"
                  strokeDasharray="85 15"
                  strokeDashoffset="0"
                  strokeWidth="5"
                ></circle>
                <circle
                  cx="20"
                  cy="20"
                  fill="transparent"
                  r="15.91549430918954"
                  stroke="#f97316"
                  strokeDasharray="5 95"
                  strokeDashoffset="-85"
                  strokeWidth="5"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#0d121b] dark:text-white">40</span>
                <span className="text-xs font-medium text-[#4c669a] dark:text-gray-400">
                  Total Unidades
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-sm text-[#0d121b] dark:text-gray-300">Ocupadas (34)</span>
                </div>
                <span className="text-sm font-bold text-[#0d121b] dark:text-white">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#e7ebf3] dark:bg-gray-700"></span>
                  <span className="text-sm text-[#0d121b] dark:text-gray-300">Vacantes (4)</span>
                </div>
                <span className="text-sm font-bold text-[#0d121b] dark:text-white">10%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-sm text-[#0d121b] dark:text-gray-300">
                    Mantenimiento (2)
                  </span>
                </div>
                <span className="text-sm font-bold text-[#0d121b] dark:text-white">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expiring Contracts Table */}
        <div className="flex flex-col bg-white dark:bg-[#182130] rounded-xl border border-[#e7ebf3] dark:border-[#2b3547] shadow-sm">
          <div className="p-6 border-b border-[#e7ebf3] dark:border-[#2b3547] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-red-50 dark:bg-red-900/20 p-1.5 rounded-lg">
                <BellRing size={20} className="text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-[#0d121b] dark:text-white text-lg font-bold">
                Contratos por Vencer
              </h3>
            </div>
            <a className="text-primary text-sm font-bold hover:underline" href="#">
              Ver todos
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8f9fc] dark:bg-[#1e293b]">
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#4c669a] dark:text-gray-400">
                    Inquilino
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#4c669a] dark:text-gray-400">
                    Unidad
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#4c669a] dark:text-gray-400">
                    Vencimiento
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#4c669a] dark:text-gray-400">
                    Estado
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#4c669a] dark:text-gray-400 text-right">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7ebf3] dark:divide-[#2b3547]">
                <tr className="hover:bg-[#f8f9fc] dark:hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User avatar"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFdr7ucFYQ53O4bmjMt1ac6lJHfTmY6vUkpp5EqUvQJUQT01eGs0Z1nMdOkw9gNi13PKEPoeH9XB5gKiIpqaRyNARwZSCbUlPt_GhAdr_APfHJtA99AP28IVdQr9G5l8R0ggfI8_GO3OV_89FPuXw9Kq3-K6w2UQT6yG291nk4GtXdXLwPFbiEA0JrEWjBq21hwiaFE_oNCYvLXXhhDmyBCiUDdE_3vsdRRncFqVO0oE0oq7ZXFJy2ehoYlvpjBzFbMgQiAgOIhQ"
                        className="w-8 h-8 rounded-full bg-gray-200 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-medium text-[#0d121b] dark:text-white">
                        Juan Pérez
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#4c669a] dark:text-gray-300">
                    Habitación 101
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium text-sm">
                      <Clock size={16} />
                      5 días
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Pendiente
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-primary hover:text-blue-700 font-semibold text-sm">
                      Renovar
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#f8f9fc] dark:hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User avatar"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAN6hpt3Rk7tCJFhF_eqpu2lW8ObsyZefuGskEwvjzngKBNRiDXkchdIUvbJ3ES2F2EbOvYXBa_QYV6VNvwfXpfev77_0oE7GlxtLfwKFpYbefZ1HLFAoMEY19yczVbpOdnfmtA1CAFIEgHuzIoF64O0tTz4yTXE2s_tUf0wjnMiDz-fMOxm2boBXqw2Z6avsX6GyD5KKg3MVhgKWWvdCk_N8QDP83j2WuoDT5yL4x9jBzS1PEmyakiQDny19ckXADTWBncb8nlQ"
                        className="w-8 h-8 rounded-full bg-gray-200 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-medium text-[#0d121b] dark:text-white">
                        María Gómez
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#4c669a] dark:text-gray-300">
                    Habitación 204
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-medium text-sm">
                      <Clock size={16} />
                      12 días
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      Negociando
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-primary hover:text-blue-700 font-semibold text-sm">
                      Renovar
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#f8f9fc] dark:hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User avatar"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFfziSaSGj_iDzc7m_u-Cr1ARqkHX7kotsC5SntCSEko8-63t8DbpRkh0LIqkq6TC85lt916TMx799Nn9mxvNJgezs6XwLe99LujredvHjDBrDLvL2a878SAj-rBoenLMCvrSaluDn3SfGs-ww4fse4xB7KyWOlBMVLz5oZj0ZkRqYT7vC8IfO2kna14GkZpfJ5-3O59ZPZvyLOeiueiMiCVmm48UlBLSccenonnjO0-K3_swdzONQ6Ob5_GQV2ZRHgT0n0X1O0Q"
                        className="w-8 h-8 rounded-full bg-gray-200 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-medium text-[#0d121b] dark:text-white">
                        Carlos Ruiz
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#4c669a] dark:text-gray-300">
                    Apartamento 3B
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-[#4c669a] dark:text-gray-400 font-medium text-sm">
                      <CalendarDays size={16} />
                      28 días
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Confirmado
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-gray-400 hover:text-gray-600 font-semibold text-sm">
                      Detalles
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
