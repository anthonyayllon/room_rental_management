import React, { useState } from 'react';
import {
  Download,
  Plus,
  FileText,
  CheckCircle,
  AlertCircle,
  History,
  Search,
  Filter,
  Calendar,
  ArrowUpDown,
  Key,
  Eye,
  Edit,
  LogOut,
  RefreshCw,
  ChevronDown,
  Building,
  CreditCard
} from 'lucide-react';
import NewContract from './NewContract';
import ContractPreview from './ContractPreview';
import ContractPayments from './ContractPayments';

export default function Contracts() {
  const [view, setView] = useState<'list' | 'new' | 'preview' | 'payments'>('list');
  const [previousView, setPreviousView] = useState<'list' | 'new'>('list');

  if (view === 'new') {
    return (
      <NewContract 
        onCancel={() => setView('list')} 
        onPreview={() => {
          setPreviousView('new');
          setView('preview');
        }}
      />
    );
  }

  if (view === 'preview') {
    return (
      <ContractPreview 
        onBack={() => setView(previousView)} 
        onSave={() => setView('list')} 
      />
    );
  }

  if (view === 'payments') {
    return (
      <ContractPayments 
        onBack={() => setView('list')} 
      />
    );
  }

  return (
    <div className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Inicio</a>
        <span className="text-gray-400 dark:text-gray-600">/</span>
        <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Gestión</a>
        <span className="text-gray-400 dark:text-gray-600">/</span>
        <span className="text-gray-900 dark:text-white font-medium">Contratos</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">Administración Integral de Contratos</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">Administra los documentos, fechas y estados de los contratos vigentes.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 h-11 px-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg font-bold text-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
            <Download size={20} />
            <span>Exportar CSV</span>
          </button>
          <button 
            onClick={() => setView('new')}
            className="flex items-center justify-center gap-2 h-11 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-500/30 whitespace-nowrap"
          >
            <Plus size={20} />
            <span>+ Nuevo Contrato</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Contratos</p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">124</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contratos Vigentes</p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">82</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Por Vencer</p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">12</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e2532] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-500/10 flex items-center justify-center text-gray-600 dark:text-gray-400">
              <History size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Finalizados</p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">30</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-[#1e2532] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col flex-1 min-h-[500px]">
        {/* Filters Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-50/30 dark:bg-gray-800/20">
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              className="w-full h-11 pl-12 pr-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" 
              placeholder="Buscar por contrato, inquilino o ID..." 
              type="text"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              <Filter size={18} className="text-gray-400" />
              <span>Estado: Todos</span>
              <ChevronDown size={18} className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              <Calendar size={18} className="text-gray-400" />
              <span>Vencimiento: Próximos</span>
              <ChevronDown size={18} className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              <ArrowUpDown size={18} className="text-gray-400" />
              <span>Ordenar</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
                <th className="p-4 pl-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3 min-w-[250px]">Inquilino</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]">Habitación</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[200px]">Período de Contrato</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]">Estado</th>
                <th className="p-4 pr-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right min-w-[160px]">ACCIONES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                {
                  name: 'Juan Pérez',
                  contractId: 'CTR-2023-089',
                  room: 'Hab 304',
                  period: '01 Ene 2023 - 31 Dic 2023',
                  status: 'Vigente',
                  statusColor: 'green',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuBrk5dx2MzhkodHJyKZG51Sxd3CDIZDnkXShd01XPpLyamlPMK2WdfEzLbhRj6fv8Hu_Iq_kmU_0AAiVO4TuUP-tHwOhwbj4gWSsCcBnE1qOPC0tz1O7BmaEBnOJTS_jUweSALNzWuSEy4Vq14e7slgcK3i6Yax5cWwAij_N3zRERre6Oz8uYY4dRyd1ToRNZTNw0wx08Rf1UdaSYDxJ5RtJGO6fwoWLj5VYvOC6SnGGKiEz8nFCdej8e2ICGU928sFUHuW0p0Vwu'
                },
                {
                  name: 'Maria Garcia',
                  contractId: 'CTR-2023-042',
                  room: 'Hab 205',
                  period: '01 Feb 2023 - 01 Ago 2023',
                  status: 'Por Vencer',
                  statusColor: 'orange',
                  note: 'Vence en 5 días',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHifIUpB8Zd1hymvbfnfQmRWdKuUzxOrg3b3o7frrp1-b3TbkOHSACKHjfLTe_sUtuQZxIIGLNswmu4Fci9iiybUhuwlzB6OSlJQfL1iXPhoeK7Mhu1IkXGPFI8h1uyw45vBwVid7vEddg440qV0jyzbV9RzUJbWStMt5DM5IL-au6xPtuNMUXWXkMwEolaUe11zQSlKjIeXIqVqG-JwX8IMC1rhkAv50cr8FOhG-4Fxna1FO_OSRc77eiTFPLA5T-sduwnecr15EH'
                },
                {
                  name: 'Carlos Ruiz',
                  contractId: 'CTR-2023-112',
                  room: 'Hab 101',
                  period: '15 Mar 2023 - 15 Mar 2024',
                  status: 'Vigente',
                  statusColor: 'green',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2gIEoSnu8UYNHpzJVaHFMOh82-5d7UUdCXkuuARNAqNbXno1kiXicP7xI2PeD1cTiftaZi31LxTVi6itQ-nS2kYirXOZz8zl5wRN_yQ6ZYRJBTKUIL1j2P_UjitHfQqBWB37VDruBJ9422U1M7DQobovhAyhqv8lgHORc9L4GH6gjcCvpwPPk7pDkRMXuPgO3KA16dfanxWQX4dqfN10WuYXuyWNF7jJ0XDymGV2jdFNlhi6nlPwos9Pc7ii8KnTqoX-6UUrma8Py'
                },
                {
                  name: 'Laura Mendes',
                  contractId: 'CTR-2022-099',
                  room: 'Hab 402',
                  period: '01 Ene 2022 - 31 Dic 2022',
                  status: 'Finalizado',
                  statusColor: 'gray',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA96H9Y77Ik0_ikAd8oiY-4cpLE-Ncorpy3S2wd1UpBikpTQzzgMp6WRFALDcNKmdkDDAOTgIuuvZFar5WtzaICxe--eASBe3KzNUuuvD_SeqoYGw3_EY7mK0FPosYb4EFsY0-JXE2IrmLsp7Ru9f_H5TEfhXvpe9lWEbL2k4e77RU-iTnCT5z_e37gNO2WSV6pKSlAEvSLjpltt8WNnAONwOqdBg-zWS-GPD_kn2f-OiMEjFXxlGYOAbtVqHCliozhCfCKbmhAHkWl'
                },
                {
                  name: 'Julián Webb',
                  contractId: 'CTR-2023-145',
                  room: 'Hab 104',
                  period: '10 Abr 2023 - 10 Abr 2024',
                  status: 'Vigente',
                  statusColor: 'green',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDSWwOH1b3rp0bLN_PClicA6FyqveKrt760SNBJvuy6uFskXA-eS1cQ_Ii8AF-SmBJyCP4H2NgpJh_cA5wC0asM4xhhJn39fvO9BheAxIrdCcZJU6ppSwHDWcJceKtSLB96oE2rQrHRdQKJvqzhEYdu99jlFfEMr8d2EO4YaZgdeHCTHcyR-lHBbX7aITjGc9Q45ClV2yci7g3CqEi-dhrIDP65ei_NCxn5x33M2kj0mEcume3KWuYBog0R382vp79fbFAwtVxxlV6'
                }
              ].map((contract, i) => (
                <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className={`flex items-center gap-4 ${contract.status === 'Finalizado' ? 'grayscale opacity-70' : ''}`}>
                      <img 
                        src={contract.img} 
                        alt={contract.name} 
                        className="size-10 rounded-full bg-gray-200 object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#0d121b] dark:text-white">{contract.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Contrato #{contract.contractId}</span>
                      </div>
                    </div>
                  </td>
                  <td className={`p-4 ${contract.status === 'Finalizado' ? 'opacity-70' : ''}`}>
                    <div className="flex items-center gap-2">
                      <Key size={18} className="text-gray-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{contract.room}</span>
                    </div>
                  </td>
                  <td className={`p-4 ${contract.status === 'Finalizado' ? 'opacity-70' : ''}`}>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{contract.period}</span>
                      {contract.note && <span className="text-xs text-orange-500 font-medium mt-0.5">{contract.note}</span>}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                      contract.statusColor === 'green' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300 border-green-200 dark:border-green-500/30' :
                      contract.statusColor === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300 border-orange-200 dark:border-orange-500/30' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                    }`}>
                      <span className={`size-1.5 rounded-full ${
                        contract.statusColor === 'green' ? 'bg-green-500 animate-pulse' :
                        contract.statusColor === 'orange' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}></span>
                      {contract.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button 
                        onClick={() => setView('payments')}
                        className="size-8 flex items-center justify-center rounded-lg text-blue-500 hover:bg-blue-500/10 transition-colors" 
                        title="Pagos"
                      >
                        <CreditCard size={20} />
                      </button>
                      <button 
                        onClick={() => {
                          setPreviousView('list');
                          setView('preview');
                        }}
                        className="size-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors" 
                        title="Ver detalle"
                      >
                        <Eye size={20} />
                      </button>
                      <button className="size-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors" title="Editar">
                        <Edit size={20} />
                      </button>
                      <button 
                        className={`size-8 flex items-center justify-center rounded-lg transition-colors ${contract.status === 'Finalizado' ? 'text-gray-300 opacity-50 cursor-not-allowed' : 'text-gray-400 hover:text-red-500 hover:bg-red-500/10'}`} 
                        disabled={contract.status === 'Finalizado'} 
                        title={contract.status === 'Finalizado' ? "Contrato ya finalizado" : "Finalizar"}
                      >
                        <LogOut size={20} />
                      </button>
                      {contract.status === 'Por Vencer' ? (
                        <button className="size-8 flex items-center justify-center rounded-lg text-green-600 dark:text-green-400 hover:bg-green-500/10 transition-colors" title="Renovar Contrato">
                          <RefreshCw size={20} />
                        </button>
                      ) : (
                        <div className="size-8"></div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-auto border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/30 dark:bg-gray-800/20">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Mostrando <span className="font-bold text-gray-900 dark:text-white">1-5</span> de <span className="font-bold text-gray-900 dark:text-white">50</span> contratos
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors" disabled>
              Anterior
            </button>
            <div className="flex items-center gap-1">
              <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium">1</button>
              <button className="size-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-colors">2</button>
              <button className="size-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-colors">3</button>
              <span className="text-gray-400">...</span>
              <button className="size-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-colors">10</button>
            </div>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
