import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  Wallet,
  FileText,
  Settings,
  Menu,
  ChevronDown,
  ChevronRight,
  List,
  LayoutGrid
} from 'lucide-react';
import Dashboard from './Dashboard';
import Tenants from './Tenants';
import Contracts from './Contracts';
import PropertyInventory from './PropertyInventory';
import FloorPlanOverview from './FloorPlanOverview';
import RoomInventory from './RoomInventory';
import RoomRegistration from './RoomRegistration';
import OwnerInventory from './OwnerInventory';

import ExpenseControl from './ExpenseControl';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'tenants' | 'contracts' | 'inventory' | 'floor-plan' | 'room-inventory' | 'room-registration' | 'owner-inventory' | 'expenses'>('contracts');
  const [isPropertiesMenuOpen, setIsPropertiesMenuOpen] = useState(true);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white antialiased flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex w-72 flex-col justify-between border-r border-[#e7ebf3] dark:border-[#2b3547] bg-white dark:bg-[#182130] p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center px-2 py-2">
            <img
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXf0d-tjqy294-4PQl5MP4Sks3QRMhSpv99GcWbY_B_xj6f9t-KqJQh1qgi3XO9SLP3yuIIDpmNOjmPEWAgZUufAuNt5tG7kXOVpAr2xfc6mcLBrzxXJ-VnyvaZSvbS00-3sVwnRk-GNm10cRwPr2ITz1tIu0pQSWRsyOb8UjdferFeeBwHIo4HZO4VnagTZD-t7kUhJNY3Bty7slekIQGncNMalA9defxoSF0HiHCeELfDieCG3qFMw2pKalop4W7kGdIaRqmzg"
              className="object-cover rounded-full h-12 w-12 border-2 border-primary/20"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <h1 className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                Admin Panel
              </h1>
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-normal leading-normal">
                Gestión de Alquileres
              </p>
            </div>
          </div>
          <div className="h-px bg-[#e7ebf3] dark:bg-[#2b3547] w-full my-2"></div>
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
                currentPage === 'dashboard'
                  ? 'bg-primary text-white'
                  : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
              }`}
            >
              <LayoutDashboard size={24} className={currentPage === 'dashboard' ? '' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
              <p className={`text-sm font-medium leading-normal ${currentPage === 'dashboard' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                Dashboard
              </p>
            </button>
            
            {/* Propiedades Menu Group */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsPropertiesMenuOpen(!isPropertiesMenuOpen)}
                className={`flex items-center justify-between px-3 py-3 rounded-lg transition-colors group ${
                  (currentPage === 'inventory' || currentPage === 'floor-plan' || currentPage === 'room-inventory' || currentPage === 'room-registration')
                    ? 'bg-primary/5 text-primary'
                    : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building2 size={24} className={(currentPage === 'inventory' || currentPage === 'floor-plan' || currentPage === 'room-inventory' || currentPage === 'room-registration') ? 'text-primary' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
                  <p className={`text-sm font-medium leading-normal ${(currentPage === 'inventory' || currentPage === 'floor-plan' || currentPage === 'room-inventory' || currentPage === 'room-registration') ? 'font-bold text-primary' : 'text-[#0d121b] dark:text-gray-300'}`}>
                    Propiedades
                  </p>
                </div>
                {isPropertiesMenuOpen ? (
                  <ChevronDown size={16} className={(currentPage === 'inventory' || currentPage === 'floor-plan' || currentPage === 'room-inventory' || currentPage === 'room-registration') ? 'text-primary' : 'text-gray-400'} />
                ) : (
                  <ChevronRight size={16} className={(currentPage === 'inventory' || currentPage === 'floor-plan' || currentPage === 'room-inventory' || currentPage === 'room-registration') ? 'text-primary' : 'text-gray-400'} />
                )}
              </button>
              
              {isPropertiesMenuOpen && (
                <div className="flex flex-col gap-1 pl-10">
                  <button
                    onClick={() => setCurrentPage('inventory')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                      (currentPage === 'inventory' || currentPage === 'room-inventory' || currentPage === 'room-registration')
                        ? 'bg-primary text-white'
                        : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
                    }`}
                  >
                    <p className={`text-sm font-medium leading-normal ${(currentPage === 'inventory' || currentPage === 'room-inventory' || currentPage === 'room-registration') ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                      Inventario
                    </p>
                  </button>
                  <button
                    onClick={() => setCurrentPage('floor-plan')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                      currentPage === 'floor-plan'
                        ? 'bg-primary text-white'
                        : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
                    }`}
                  >
                    <p className={`text-sm font-medium leading-normal ${currentPage === 'floor-plan' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                      Mapa de Planta
                    </p>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setCurrentPage('owner-inventory')}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
                currentPage === 'owner-inventory'
                  ? 'bg-primary text-white'
                  : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
              }`}
            >
              <Users size={24} className={currentPage === 'owner-inventory' ? '' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
              <p className={`text-sm font-medium leading-normal ${currentPage === 'owner-inventory' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                Propietarios
              </p>
            </button>

            <button
              onClick={() => setCurrentPage('tenants')}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
                currentPage === 'tenants'
                  ? 'bg-primary text-white'
                  : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
              }`}
            >
              <UserCheck size={24} className={currentPage === 'tenants' ? '' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
              <p className={`text-sm font-medium leading-normal ${currentPage === 'tenants' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                Inquilinos
              </p>
            </button>
            <button
              onClick={() => setCurrentPage('contracts')}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
                currentPage === 'contracts'
                  ? 'bg-primary text-white'
                  : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
              }`}
            >
              <FileText size={24} className={currentPage === 'contracts' ? '' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
              <p className={`text-sm font-medium leading-normal ${currentPage === 'contracts' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                Contratos
              </p>
            </button>
            <button
              onClick={() => setCurrentPage('expenses')}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
                currentPage === 'expenses'
                  ? 'bg-primary text-white'
                  : 'hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547]'
              }`}
            >
              <Wallet size={24} className={currentPage === 'expenses' ? '' : 'text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors'} />
              <p className={`text-sm font-medium leading-normal ${currentPage === 'expenses' ? 'font-semibold' : 'text-[#0d121b] dark:text-gray-300'}`}>
                Finanzas
              </p>
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7ebf3] dark:hover:bg-[#2b3547] transition-colors group"
          >
            <Settings size={24} className="text-[#4c669a] dark:text-gray-400 group-hover:text-primary transition-colors" />
            <p className="text-[#0d121b] dark:text-gray-300 text-sm font-medium leading-normal">
              Configuración
            </p>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-[#1a202c] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 flex items-center justify-center rounded-lg size-8 text-primary">
              <Building2 size={20} />
            </div>
            <span className="font-bold text-lg dark:text-white">Admin Panel</span>
          </div>
          <button className="text-gray-500 dark:text-gray-300">
            <Menu size={24} />
          </button>
        </header>
        {currentPage === 'dashboard' ? <Dashboard /> : 
         currentPage === 'tenants' ? <Tenants /> : 
         currentPage === 'inventory' ? <PropertyInventory onNavigate={setCurrentPage} /> : 
         currentPage === 'floor-plan' ? <FloorPlanOverview /> :
         currentPage === 'room-inventory' ? <RoomInventory onNavigate={setCurrentPage} /> :
         currentPage === 'room-registration' ? <RoomRegistration onNavigate={setCurrentPage} onDiscard={() => setCurrentPage('room-inventory')} /> :
         currentPage === 'owner-inventory' ? <OwnerInventory /> :
         currentPage === 'expenses' ? <ExpenseControl /> :
         <Contracts />}
      </div>
    </div>
  );
}
