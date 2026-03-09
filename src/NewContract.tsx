import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  UserSearch,
  Search,
  Building2,
  Calendar,
  Zap,
  FileText,
  Info,
  X,
  CheckCircle,
  CalendarDays
} from 'lucide-react';

export default function NewContract({ onCancel, onPreview }: { onCancel: () => void, onPreview: () => void }) {
  const [startDate, setStartDate] = useState('2023-11-01');
  const [durationMonths, setDurationMonths] = useState(12);
  const [endDate, setEndDate] = useState('');
  const [summaryPeriod, setSummaryPeriod] = useState('');

  useEffect(() => {
    updateEndDate();
  }, [startDate, durationMonths]);

  const updateEndDate = () => {
    if (!startDate || !durationMonths) return;
    const start = new Date(startDate + 'T00:00:00');
    const months = parseInt(durationMonths.toString());
    if (isNaN(months)) return;
    
    const end = new Date(start);
    end.setMonth(start.getMonth() + months);
    
    const year = end.getFullYear();
    const month = String(end.getMonth() + 1).padStart(2, '0');
    const day = String(end.getDate()).padStart(2, '0');
    setEndDate(`${year}-${month}-${day}`);
    
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const startFormatted = start.toLocaleDateString('es-ES', options);
    const endFormatted = end.toLocaleDateString('es-ES', options);
    setSummaryPeriod(`${startFormatted} - ${endFormatted}`);
  };

  return (
    <div className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto pb-32">
      <div className="mb-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <button onClick={onCancel} className="hover:text-primary transition-colors">Contratos</button>
          <ChevronRight size={16} />
          <span className="font-semibold text-gray-900 dark:text-gray-200">Nuevo Contrato</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-[#0d121b] dark:text-white">Creación de Nuevo Contrato</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Complete los datos para formalizar el nuevo arrendamiento.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <section className="bg-white dark:bg-[#1e2532] p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg text-primary">
                <UserSearch size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">Selección de Inquilino</h3>
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Buscar Inquilino</label>
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Nombre o ID del inquilino..." type="text"/>
              </div>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm">
                    <img alt="Tenant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKANJPVvJ-dWWOxAD6ZWtAY8b7CiisLDmnFUNpyKma7qj0xWK1zFhWaJfcDn3iZO8ek9qd7xXX3RkSYbUHKSWhN1mPwQ1mtXcTMIusrCP9oiAlMy4Ui9hyWEz4ENPUYCTJh-gOGhQG_Ci-Rt3JuyG6viKhzO7MaltJDs6weawr4c5Rog9jnwCyzjoNu4m5kFYtYVRg0ewQ-DP0F5QIKOWXQY7KwZSdeOCVqd-sIIw-L6hZ42YpX9VvY-vMixa0QJPkgY68TZ4e9Ik" referrerPolicy="no-referrer"/>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white leading-tight">Juan Pablo Pérez</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">ID: 12.345.678-9 • <span className="text-green-600 dark:text-green-400 font-medium">Verificado</span></div>
                  </div>
                </div>
                <button className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">Cambiar</button>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-[#1e2532] p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-lg text-purple-600">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">Propiedad y Habitación</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Propiedad</label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none">
                  <option>Residencial Libertad 450</option>
                  <option>Condominio Los Sauces</option>
                  <option>Edificio Central Park</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Habitación (Solo disponibles)</label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                  <option>Habitación 101 (Piso 1)</option>
                  <option>Habitación 204 (Piso 2)</option>
                  <option>Habitación 305 (Piso 3)</option>
                </select>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-[#1e2532] p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-lg text-emerald-600">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">Términos y Fechas</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Fecha de Inicio</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Duración (Meses)</label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    type="number" 
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(parseInt(e.target.value))}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">meses</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Fecha de Fin</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 cursor-not-allowed outline-none" 
                  readOnly 
                  type="date" 
                  value={endDate}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Monto de Renta</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input className="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" type="number" defaultValue="450000"/>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Depósito de Garantía</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input className="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" type="number" defaultValue="450000"/>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <Zap className="text-primary" size={24} />
                <div>
                  <div className="font-bold text-gray-800 dark:text-white">Incluir Servicios</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Agua, Electricidad e Internet de alta velocidad</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </section>
        </div>
        
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-4">
            <div className="bg-white dark:bg-[#1e2532] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
              <div className="bg-[#0f172a] px-6 py-4 flex items-center justify-between">
                <h3 className="font-bold text-white tracking-tight">Resumen del Contrato</h3>
                <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded uppercase tracking-widest border border-primary/30">En Tiempo Real</span>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <div className="relative h-48 rounded-xl overflow-hidden group">
                  <img alt="Room preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwyOE4wA5fknAFCOSakDb6iyqXzCk0Fnp_u4bTeeQ2FsKzHBTOdFmM4jgIlqSUWI4R5edN8fAf8X1D_TkG2rowh08XC66jUvUrnJIFITj3GvVCffNoMUlwlCoAYRrPzSIVZO3Ud_FDprIqoZ5N2YP8yHo11ObnFUNwyJwYXB2QnVWskFcmafNJWKsrA6e3yQQ7YQshkWM9_pl2oh8hLZ-7CblHkLcgwhbX_2D-Ea5n3C-jItvFY5BhZlV_3Hz7h5FtNHiI1q1XcPQ" referrerPolicy="no-referrer"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <div className="text-white font-bold text-lg">Habitación 101</div>
                      <div className="text-gray-300 text-sm">Residencial Libertad 450, Santiago</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="w-10 h-10 rounded-full border border-white dark:border-gray-700 shadow-sm overflow-hidden flex-shrink-0">
                      <img alt="Tenant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCje5eUVl4WwxwJM4Sz3tsSnMVGu5LmPzxIgdXd9SjhpDyxJni8hxR2Ti4QO3GTqWyIfNrrAd4v5aoEGp0TbExDT-PMMnm6YL2ILvl43PfXc54bXF7p9pi6WM2aiIceNA6RwQcywyRImmD2e5BMjZYLkNqsy33kPilnNq6RwnbsTj6WpRx90PKpZm9VEmbwlhBdsoAAGeVgkfX9JWYpVgasG68opu7dpbeCzLSEaXQHXYDoIOMIQphDK7lACUEV6EyEvM1f7z6mRU" referrerPolicy="no-referrer"/>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Arrendatario</div>
                      <div className="text-gray-900 dark:text-white font-bold">Juan Pablo Pérez</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900/50">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Periodo de Arrendamiento</div>
                      <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                        <CalendarDays className="text-gray-400" size={20} />
                        <span>{summaryPeriod}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0f172a] dark:bg-black rounded-xl text-white">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Total Mensual</span>
                      <span className="text-primary font-bold">Renta + Servicios</span>
                    </div>
                    <div className="text-3xl font-black">$ 450.000</div>
                  </div>
                </div>
                <button 
                  onClick={onPreview}
                  className="w-full py-3 px-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <FileText size={20} />
                  Generar Vista Previa PDF
                </button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-start gap-3">
              <Info className="text-gray-400 shrink-0" size={20} />
              <p className="text-xs text-gray-500 leading-relaxed">Verifique que todos los datos sean correctos. Una vez guardado, el contrato se enviará automáticamente al correo del inquilino para su firma digital.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#1a202c]/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 py-4 px-6 md:px-10 z-[60]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button onClick={onCancel} className="text-gray-500 hover:text-red-500 font-bold text-sm transition-colors flex items-center gap-2">
            <X size={20} />
            Cancelar y Salir
          </button>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-gray-400 text-sm italic mr-2">Progreso guardado automáticamente</span>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-black text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all flex items-center gap-3">
              Confirmar y Guardar Contrato
              <CheckCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
