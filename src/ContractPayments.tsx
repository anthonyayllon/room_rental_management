import React from 'react';
import {
  ArrowLeft,
  Search,
  Bell,
  LayoutDashboard,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  Download,
  Wallet,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Filter,
  MoreVertical,
  Eye,
  Info
} from 'lucide-react';

interface ContractPaymentsProps {
  onBack: () => void;
}

export default function ContractPayments({ onBack }: ContractPaymentsProps) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">
      <main className="flex-1 p-4 lg:p-8 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-primary transition-colors mb-2 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold">Volver</span>
            </button>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Seguimiento de Pagos de Contrato</h1>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
              <FileText size={18} />
              Exportar PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <Download size={18} />
              Extracto
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 p-4 bg-white dark:bg-slate-900 border-l-4 border-primary rounded-r-xl shadow-sm mb-8">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contrato</span>
            <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">#CON-2023-0892</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquilino</span>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Juan Pérez</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Propiedad</span>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Residencial Libertad 450</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-900/50">
            <div className="absolute right-0 top-0 mt-[-20px] mr-[-20px] size-32 bg-primary/5 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
              <Wallet size={20} className="text-primary" />
              <p className="text-sm font-semibold uppercase tracking-wider">Total Pagado</p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">$45,200.00</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                <TrendingUp size={14} />
                +5.2%
              </span>
              <span className="text-xs text-slate-400 font-medium">vs último mes</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group bg-red-50/30 dark:bg-red-950/10 border-red-100 dark:border-red-900/50">
            <div className="absolute right-0 top-0 mt-[-20px] mr-[-20px] size-32 bg-red-500/5 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
              <AlertCircle size={20} className="text-red-500" />
              <p className="text-sm font-semibold uppercase tracking-wider">Saldo Pendiente</p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">$12,800.00</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="flex items-center text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
                <AlertCircle size={14} />
                -2.1%
              </span>
              <span className="text-xs text-slate-400 font-medium">del total contrato</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Registrar Nuevo Pago</h3>
                <p className="text-xs text-slate-500 mt-1">Ingrese los detalles del abono realizado</p>
              </div>
              <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">ID Contrato</label>
                  <input className="w-full bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 text-sm font-mono cursor-not-allowed px-4 py-2" readonly type="text" value="#CON-2023-0892"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Monto (USD)</label>
                    <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary text-sm px-4 py-2" placeholder="0.00" type="number"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Fecha</label>
                    <input className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary text-sm px-4 py-2" type="date"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mes de Pago</label>
                    <select className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary text-sm px-4 py-2">
                      <option>Enero</option>
                      <option>Febrero</option>
                      <option>Marzo</option>
                      <option>Abril</option>
                      <option selected>Mayo</option>
                      <option>Junio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Método</label>
                    <select className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary text-sm px-4 py-2">
                      <option>Transferencia</option>
                      <option>Tarjeta Crédito</option>
                      <option>Efectivo</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Estado Inicial</label>
                  <div className="flex items-center gap-4 py-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input checked className="text-primary focus:ring-primary h-4 w-4" name="status" type="radio"/>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary">Pagado</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input className="text-amber-500 focus:ring-amber-500 h-4 w-4" name="status" type="radio"/>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-amber-500">Pendiente</span>
                    </label>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                    <CheckCircle size={18} />
                    Confirmar Registro
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Historial de Pagos</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                    <Filter size={20} />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Mes / Concepto</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha Pago</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Monto</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Estado</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {[
                      { month: 'Abril 2024', concept: 'Fee Mensual #4', date: '12 Abr, 2024', amount: '$11,300.00', status: 'Paid', color: 'emerald' },
                      { month: 'Marzo 2024', concept: 'Fee Mensual #3', date: '22 Mar, 2024', amount: '$11,300.00', status: 'Late', color: 'amber' },
                      { month: 'Febrero 2024', concept: 'Fee Mensual #2', date: '05 Feb, 2024', amount: '$11,300.00', status: 'Paid', color: 'emerald' },
                      { month: 'Enero 2024', concept: 'Pago Inicial / Set-up', date: '-- --', amount: '$11,300.00', status: 'Owed', color: 'red' },
                    ].map((payment, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{payment.month}</span>
                            <span className="text-xs text-slate-500 italic">{payment.concept}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{payment.date}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">{payment.amount}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-${payment.color}-100 text-${payment.color}-700 dark:bg-${payment.color}-900/30 dark:text-${payment.color}-400`}>
                            <span className={`size-1.5 rounded-full bg-${payment.color}-500`}></span>
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <Eye size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-auto p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <p className="text-xs text-slate-500">Mostrando 4 de 12 registros de pagos anuales</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-bold hover:bg-slate-100 transition-all cursor-not-allowed text-slate-300" disabled>Anterior</button>
                  <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-bold hover:bg-slate-100 transition-all">Siguiente</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col md:flex-row items-center gap-6">
          <div className="p-3 bg-primary/10 rounded-full text-primary">
            <Info size={32} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Próximo Vencimiento</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">La cuota de Mayo vence en <span className="font-bold text-primary">12 días</span> (25 de Mayo, 2024). Asegúrese de registrar el pago a tiempo para evitar recargos.</p>
          </div>
          <button className="whitespace-nowrap px-4 py-2 border border-primary text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-white transition-all">
            Agendar Recordatorio
          </button>
        </div>
      </main>
    </div>
  );
}
