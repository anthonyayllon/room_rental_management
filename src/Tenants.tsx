import React, { useState } from 'react';
import {
  Download,
  Plus,
  Users,
  UserCheck,
  UserPlus,
  Search,
  Filter,
  SortAsc,
  Eye,
  Edit,
  X,
  User,
  ImagePlus,
  Upload,
  TrendingUp
} from 'lucide-react';

export default function Tenants() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto">
      <div className="flex items-center gap-2 text-sm">
        <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Inicio</a>
        <span className="text-gray-400 dark:text-gray-600">/</span>
        <span className="text-gray-900 dark:text-white font-medium">Gestión de Inquilinos</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">Gestión de Inquilinos</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">Directorio de residentes y sus datos de contacto.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 h-11 px-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a202c] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg font-bold text-sm transition-colors whitespace-nowrap">
            <Download size={20} />
            <span>Exportar CSV</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 h-11 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-500/30 whitespace-nowrap"
          >
            <Plus size={20} />
            <span>Agregar Inquilino</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Inquilinos</span>
            <div className="text-primary bg-primary/10 p-1.5 rounded-lg">
              <Users size={20} />
            </div>
          </div>
          <div className="text-2xl font-black text-[#0d121b] dark:text-white">1,284</div>
          <div className="text-[11px] text-green-500 font-bold flex items-center gap-1">
            <TrendingUp size={14} />
            +12% vs mes anterior
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Activos</span>
            <div className="text-green-500 bg-green-500/10 p-1.5 rounded-lg">
              <UserCheck size={20} />
            </div>
          </div>
          <div className="text-2xl font-black text-[#0d121b] dark:text-white">1,150</div>
          <div className="text-[11px] text-gray-400 font-medium">89.5% del total</div>
        </div>
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nuevos Registros</span>
            <div className="text-orange-500 bg-orange-500/10 p-1.5 rounded-lg">
              <UserPlus size={20} />
            </div>
          </div>
          <div className="text-2xl font-black text-[#0d121b] dark:text-white">42</div>
          <div className="text-[11px] text-gray-400 font-medium">Últimos 30 días</div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e2532] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 items-center gap-3 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                className="w-full h-11 pl-11 pr-4 bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none" 
                placeholder="Buscar por nombre, documento o correo..." 
                type="text"
              />
            </div>
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide px-2">
              <div className="flex items-center gap-6">
                <button className="h-11 px-1 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap">Todos</button>
                <button className="h-11 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-b-2 border-transparent whitespace-nowrap">Activos</button>
                <button className="h-11 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-b-2 border-transparent whitespace-nowrap">Inactivos</button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-11 px-3 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e2532] text-gray-500 hover:text-primary transition-colors" title="Filtrar">
                <Filter size={20} />
              </button>
              <button className="h-11 px-3 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e2532] text-gray-500 hover:text-primary transition-colors" title="Ordenar A-Z">
                <SortAsc size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
                <th className="p-4 pl-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[280px]">Inquilino</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[150px]">Documento</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[150px]">Celular</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[200px]">Correo electrónico</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Estado</th>
                <th className="p-4 pr-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right w-[120px]">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                {
                  name: 'Juan Carlos Pérez García',
                  date: '12/05/2023',
                  doc: 'DNI 72839405',
                  phone: '+51 987 654 321',
                  email: 'juan.perez@email.com',
                  status: 'Activo',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATzSP0jkwyph50E05LVpYYyhN1Y5-5AO-mZJjiaevRi5QVWPhUdkNT-XRih9qNSCJzNY8hJRhHRMjGmU-jQZFAODqJ5gDd9gltb3jbAiLTHtyNMQs1hQ2jGILFqxBJlZDdV1xZ9QKXw1eQXWyNnkwBW2yNUvIEbutt9PHAsTcSuW0TyQKb4IeiYzh9UMLl_gQ7Xf_qMgaGCyIyka854yOCyFPxDW1Eq45ykorGhDpj9_aZDYAvNLZumNbJGFgtBWsMZAlyqsuEbQ'
                },
                {
                  name: 'María Elena Torres',
                  date: '20/08/2023',
                  doc: 'DNI 45129038',
                  phone: '+51 912 345 678',
                  email: 'maria.torres@email.com',
                  status: 'Activo',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBijItiVo_RFvrO_8cr0XYz7-ddJrkVMXBCCBOFL23HG5DlexRSYWeH4-qk0wRKihkBzC3Hdg-bqhFQrqWCvyH1tPXVGEpQbsjf5wf7oKMIDdBx2DePo1lQG2tfZzA8KNyNIbA23VYRq4Nl43qF2d49PcaIVZHXkiUAFwZPs8WId39SLG_FWI32P4MMT3cgz_KlCtxXo5GE-tPVVzA2T1JXQ8lPCrSJm9fHOaW4eM9MjKEh8Ot2o0BTVZH_wSJonpoJjviphSsbBPz'
                },
                {
                  name: 'Carlos Alberto Ruiz',
                  date: '15/01/2024',
                  doc: 'DNI 10293847',
                  phone: '+51 933 221 100',
                  email: 'carlos.ruiz@email.com',
                  status: 'Activo',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYtYn3bbwsVh6xXCXj31NPvdM7VYluB7L64caB41KQWn3-fC76asKWGVoi57EB-R8fYR-EzELpsQbyu23Zac2HdcfTgTyef7HZ4YSHnY-Phult-frKYu-_f9OF7C0-bwVCPbvjVIWJBJa-P07cN30_ZCifU1OMHU4gnwOqUKQ8VwDaYw2XaJh8V_sOgWYyNrsgXDxR5HFeXbcxE0S0O0HSENnPKxxOyyAtxVtP5mhbQBOzj0D5OzCiXNpx97xtHcdM9AGvVKwhMMx-'
                },
                {
                  name: 'Lucía Mendez Rojas',
                  date: '02/02/2024',
                  doc: 'DNI 55667788',
                  phone: '+51 955 664 433',
                  email: 'lucia.mendez@email.com',
                  status: 'Inactivo',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9mxumGW9-hxXsoKjk57k-9lksLLkbrZ7FmQj0xiCZ_2dErxyPdVI8aY_NDg5kR4lQpHN0IqaCHUuj2sJmcEQFpHPeg7WzBNtB9KacKyYSrLcYBBdMTNrRX_khujSVto1O87iTXevXXNeKVUt-8-yWxWFJm-YOUaeWH3t4adwaZNiwsI1vc8uhp_FXBIdZaedBcDRBE18jvOFMNL1SuGEvwFl2hY6iLwQVjVrPChjaPAQ8PVVSfVFGKMn-o3njsXuLUEPOJnd_LEQy'
                },
                {
                  name: 'Roberto Castillo',
                  date: '25/11/2023',
                  doc: 'DNI 99887766',
                  phone: '+51 988 777 666',
                  email: 'roberto.c@email.com',
                  status: 'Activo',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcAC9KKyIEjZ7L1mefi-TJkZGO_Hc5-6bt4bSX75b6Kl602HrM2uIRnqUptNginkN15cwbIKXu6uxcW8xuhA-5ua5ZFNSu1Q1bbg8z1Grv2fPO_okcYHtfcWv9U6bktTXSihFsEw9VfcfyZIsyXDRiuEJ9Lls4v-OtKrrE15g6TN_UpTzAWQEXqDzFA2B2vqM6GTbpWs2dvBqZBOt4ahK6um_19EyG_IaMQxYxVhYCuWRpuQQMl63tEpFPuyxOaGRZdntYllP4TNQ8'
                }
              ].map((tenant, i) => (
                <tr key={i} className="group hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={tenant.img} 
                        alt={tenant.name} 
                        className="size-11 rounded-full bg-gray-200 object-cover shrink-0 border border-white dark:border-gray-700 shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#0d121b] dark:text-white group-hover:text-primary transition-colors">{tenant.name}</span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Registrado: {tenant.date}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4"><span className="text-sm font-medium text-gray-900 dark:text-gray-200">{tenant.doc}</span></td>
                  <td className="p-4"><span className="text-sm text-gray-600 dark:text-gray-300">{tenant.phone}</span></td>
                  <td className="p-4"><span className="text-sm text-gray-600 dark:text-gray-300">{tenant.email}</span></td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      tenant.status === 'Activo' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' 
                        : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                    }`}>
                      {tenant.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="size-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all" title="Ver detalles">
                        <Eye size={20} />
                      </button>
                      <button className="size-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all" title="Editar">
                        <Edit size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-800/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Mostrando 5 de 1,284 inquilinos</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Anterior
            </button>
            <div className="flex items-center gap-1">
              <button className="size-9 flex items-center justify-center rounded-lg text-sm font-bold bg-primary text-white shadow-md shadow-primary/20">1</button>
              <button className="size-9 flex items-center justify-center rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">2</button>
              <button className="size-9 flex items-center justify-center rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">3</button>
              <span className="px-1 text-gray-400">...</span>
              <button className="size-9 flex items-center justify-center rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">257</button>
            </div>
            <button className="px-4 py-2 text-xs font-bold text-primary border border-primary/20 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1e2532] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-black text-[#0d121b] dark:text-white">Registro de Datos del Inquilino</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="size-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-8">
                <User className="text-primary" size={20} />
                <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-primary">Datos Personales</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative group cursor-pointer">
                    <div className="size-40 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all">
                      <ImagePlus size={36} className="mb-2" />
                      <span className="text-[10px] font-bold uppercase">Subir Foto</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg">
                      <Upload size={18} />
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-4 text-center leading-relaxed">Formatos: JPG, PNG<br/>Tamaño máx. 2MB</p>
                </div>
                <div className="w-full md:w-2/3 grid grid-cols-1 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Nombres</label>
                    <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="Ej. Juan Carlos" type="text"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Apellido Paterno</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="Ej. Pérez" type="text"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Apellido Materno</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="Ej. García" type="text"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Documento de Identidad</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="DNI, NIE o Pasaporte" type="text"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Fecha de Nacimiento</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" type="date"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Celular</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="Ej. 987654321" type="tel"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Correo Electrónico</label>
                      <input className="w-full h-11 px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" placeholder="ejemplo@correo.com" type="email"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 pb-10 flex justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-10 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                <UserCheck size={20} />
                <span>Registrar Inquilino</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
