import React, { useState } from 'react';
import {
  X,
  Phone,
  Mail,
  Building2,
  Download,
  UserPlus,
  Users,
  CheckCircle,
  Award,
  AlertCircle,
  Search,
  Filter,
  Calendar,
  ArrowDownAZ,
  Eye,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Save
} from 'lucide-react';

export default function OwnerInventory() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddOwnerOpen, setIsAddOwnerOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto h-full relative">
      {/* Add Owner Modal */}
      {isAddOwnerOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-[550px] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex flex-col">
                <h2 className="text-[#0d121b] dark:text-white text-xl font-bold leading-tight">Nuevo Propietario</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Añade los detalles del dueño y asocia sus inmuebles.</p>
              </div>
              <button 
                onClick={() => setIsAddOwnerOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto custom-scrollbar">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold flex items-center">
                    Nombre Completo
                    <span className="text-primary ml-1">*</span>
                  </label>
                  <input className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 text-sm text-[#0d121b] dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Ej. Juan Pérez" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold flex items-center">
                    Identificación (ID/DNI)
                    <span className="text-primary ml-1">*</span>
                  </label>
                  <input className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 text-sm text-[#0d121b] dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="12345678-X" type="text"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold">
                      Teléfono
                    </label>
                    <input className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 text-sm text-[#0d121b] dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="+34 600 000 000" type="tel"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold">
                      Correo Electrónico
                    </label>
                    <input className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 text-sm text-[#0d121b] dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="ejemplo@correo.com" type="email"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold">
                    Asociar Propiedades
                  </label>
                  <div className="flex flex-col border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800/50">
                    <div className="relative border-b border-slate-100 dark:border-slate-700 p-2">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border-none rounded focus:ring-0 text-slate-700 dark:text-slate-200" placeholder="Buscar dirección o referencia..." type="text"/>
                    </div>
                    <div className="max-h-40 overflow-y-auto custom-scrollbar p-1">
                      <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded cursor-pointer transition-colors group">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#0d121b] dark:text-slate-200">Calle Mayor 12, 3ºB</span>
                          <span className="text-xs text-slate-500">Ref: PROP-2024-001</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded cursor-pointer transition-colors group">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#0d121b] dark:text-slate-200">Av. de la Libertad 45</span>
                          <span className="text-xs text-slate-500">Ref: PROP-2024-005</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded cursor-pointer transition-colors group">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#0d121b] dark:text-slate-200">Paseo de la Castellana 102</span>
                          <span className="text-xs text-slate-500">Ref: PROP-2024-012</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded cursor-pointer transition-colors group">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#0d121b] dark:text-slate-200">Urbanización El Bosque, Parcela 4</span>
                          <span className="text-xs text-slate-500">Ref: PROP-2024-018</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d121b] dark:text-slate-200 text-sm font-semibold">
                    Notas (Opcional)
                  </label>
                  <textarea className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-sm text-[#0d121b] dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="Información adicional sobre el propietario..." rows={2}></textarea>
                </div>
              </form>
            </div>
            <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddOwnerOpen(false)}
                className="px-5 h-11 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Cancelar
              </button>
              <button className="px-6 h-11 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                <Save size={18} />
                Guardar Propietario
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Owner Details Modal */}
      {isDetailsOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Owner Details</h3>
              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="text-slate-400" size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                <div className="w-24 h-24 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-extrabold text-3xl shadow-sm">JD</div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">Johnathan Doe</h4>
                  <p className="text-sm font-bold text-primary mb-4">ID: OW-48293</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Phone className="text-slate-400" size={20} />
                      <span className="text-sm text-slate-600 dark:text-slate-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Mail className="text-slate-400" size={20} />
                      <span className="text-sm text-slate-600 dark:text-slate-300">john.doe@enterprise.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-4">Associated Properties (2)</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <Building2 className="text-slate-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Sunset Apartments</p>
                        <p className="text-xs text-slate-500">Building A - Unit 302</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">Occupied</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <Building2 className="text-slate-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Blue Tower</p>
                        <p className="text-xs text-slate-500">Suite 1504</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-32"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[1440px] mx-auto px-6 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Property Owners Directory</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Centralized management of all registered property owners, their portfolios, and contact details.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200">
              <Download size={20} />
              Export CSV
            </button>
            <button 
              onClick={() => setIsAddOwnerOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              <UserPlus size={20} />
              Add New Owner
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Owners</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">1,284</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-lg">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">1,150</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Tier</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">42</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-lg">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Attention Required</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-200/50">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 rounded-t-xl flex flex-wrap items-center justify-between gap-4 relative">
            <div className="flex items-center gap-6 flex-1">
              <div className="relative w-full max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input className="w-full pl-10 pr-4 py-2 bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-slate-400 text-slate-900 dark:text-white" placeholder="Search by Name, DNI or ID..." type="text"/>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 bg-slate-200/40 dark:bg-slate-800/50 p-1 rounded-lg">
                  <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-slate-700 text-primary shadow-sm rounded-md transition-all">All Owners</button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-md transition-colors">Active Only</button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-md transition-colors">Pending Review</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800"
                >
                  <Filter size={20} />
                </button>
                
                {isFilterOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-[60] overflow-hidden">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Filtros Avanzados</h4>
                    </div>
                    <div className="p-5 space-y-6">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">Fecha de Registro</label>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <button className="px-3 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-left text-slate-600 dark:text-slate-300">Últimos 30 días</button>
                          <button className="px-3 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-left text-slate-600 dark:text-slate-300">Este año</button>
                        </div>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                          <input className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white" placeholder="Rango de fechas" type="text"/>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Propiedades Asociadas</label>
                          <span className="text-xs font-bold text-primary">0 - 10+</span>
                        </div>
                        <div className="px-1">
                          <input className="w-full accent-primary h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="10" min="0" type="range" defaultValue="5"/>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">Estado de Verificación</label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox"/>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200">Verificado</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox"/>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200">Pendiente</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox"/>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200">No verificado</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <button className="text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Limpiar</button>
                      <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/10 hover:bg-primary/90 transition-all">Aplicar Filtros</button>
                    </div>
                  </div>
                )}
              </div>
              <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800">
                <ArrowDownAZ size={20} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Identification (DNI)</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Number</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-sm">JD</div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Johnathan Doe</p>
                        <p className="text-xs text-slate-500">ID: OW-48293</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-semibold">12.345.678-K</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">+1 (555) 123-4567</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">john.doe@enterprise.com</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></span> Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button 
                        onClick={() => setIsDetailsOpen(true)}
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" 
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Edit Owner">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all" title="Delete Owner">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 font-bold text-sm">AS</div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Alice Smith</p>
                        <p className="text-xs text-slate-500">ID: OW-48294</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-semibold">23.456.789-0</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">+1 (555) 987-6543</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">alice.smith@realty.io</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1.5"></span> Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Edit Owner">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all" title="Delete Owner">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 font-bold text-sm">MK</div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Michael Klien</p>
                        <p className="text-xs text-slate-500">ID: OW-48295</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-semibold">34.567.890-1</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">+1 (555) 443-2211</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">m.klien@globalholdings.com</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span> Unverified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Edit Owner">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all" title="Delete Owner">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 rounded-b-xl">
            <p className="text-xs font-bold text-slate-500">Showing 1-3 of 1,284 results</p>
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors disabled:opacity-30" disabled>
                <ChevronLeft size={20} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-primary text-white rounded shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">3</button>
              <span className="px-1 text-slate-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">257</button>
              <button className="p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-8 text-center border-t border-slate-200 dark:border-slate-800 opacity-60">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">© 2024 Property Management Pro - Admin Portal System</p>
      </footer>
    </div>
  );
}
