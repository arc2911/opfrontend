'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Dropdown } from '@/components/ui/Dropdown';
import { sampleWorkPackages } from '@/data/developerData';
import { DeveloperWorkPackage } from '@/types/developer';

interface DeveloperWorkPackagesTableProps {
  initialPackages?: DeveloperWorkPackage[];
}

export const DeveloperWorkPackagesTable: React.FC<DeveloperWorkPackagesTableProps> = ({
  initialPackages = sampleWorkPackages,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [dueDateFilter, setDueDateFilter] = useState('any');

  const statusOptions = [
    { id: 'all', label: 'Status: All' },
    { id: 'In progress', label: 'Status: In progress' },
    { id: 'Open', label: 'Status: Open' },
    { id: 'Completed', label: 'Status: Completed' },
  ];

  const priorityOptions = [
    { id: 'all', label: 'Priority: All' },
    { id: 'High', label: 'Priority: High' },
    { id: 'Normal', label: 'Priority: Normal' },
    { id: 'Low', label: 'Priority: Low' },
  ];

  const dueDateOptions = [
    { id: 'any', label: 'Due date: Any' },
    { id: 'overdue', label: 'Due date: Overdue' },
    { id: 'today', label: 'Due date: Today' },
  ];

  const filteredPackages = useMemo(() => {
    return initialPackages.filter((pkg) => {
      // Search filter
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.project.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      // Status filter
      if (statusFilter !== 'all' && pkg.status !== statusFilter) {
        return false;
      }

      // Priority filter
      if (priorityFilter !== 'all' && pkg.priority !== priorityFilter) {
        return false;
      }

      // Due date filter
      if (dueDateFilter === 'overdue' && !pkg.isOverdue) return false;
      if (dueDateFilter === 'today' && !pkg.isToday) return false;

      return true;
    });
  }, [initialPackages, searchTerm, statusFilter, priorityFilter, dueDateFilter]);

  const renderStatusBadge = (status: DeveloperWorkPackage['status']) => {
    switch (status) {
      case 'In progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E0F2FE] text-[#0284C7]">
            In progress
          </span>
        );
      case 'Open':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
            Open
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const renderPriority = (priority: DeveloperWorkPackage['priority']) => {
    switch (priority) {
      case 'High':
        return <span className="text-xs font-semibold text-[#C2410C]">High</span>;
      case 'Normal':
        return <span className="text-xs font-normal text-slate-600">Normal</span>;
      case 'Low':
        return <span className="text-xs font-normal text-slate-500">Low</span>;
      default:
        return null;
    }
  };

  const renderDueDate = (pkg: DeveloperWorkPackage) => {
    if (pkg.isOverdue) {
      return (
        <span className="text-xs font-semibold text-[#B91C1C]">
          {pkg.dueDate} · Overdue
        </span>
      );
    }
    if (pkg.isToday) {
      return (
        <span className="text-xs font-normal text-slate-700">
          {pkg.dueDate} <span className="text-slate-500">· Today</span>
        </span>
      );
    }
    return <span className="text-xs font-normal text-slate-700">{pkg.dueDate}</span>;
  };

  return (
    <section aria-label="My Work Packages" className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs">
      {/* Section Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base font-semibold text-slate-900">
            My Work Packages
          </h2>
          <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-0.5 rounded-full font-medium">
            {initialPackages.length} sample tasks
          </span>
        </div>

        <button
          type="button"
          className="text-xs font-medium text-[#0284C7] hover:text-[#0369A1] px-3 py-1.5 rounded-md hover:bg-slate-50 border border-slate-200/80 transition-colors cursor-default"
        >
          View All
        </button>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="px-5 py-3 border-b border-slate-100 bg-white flex flex-wrap items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search work packages..."
            className="w-full bg-white border border-slate-200 rounded-md pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center gap-2 flex-wrap">
          <Dropdown
            options={statusOptions}
            selectedId={statusFilter}
            onSelect={setStatusFilter}
          />
          <Dropdown
            options={priorityOptions}
            selectedId={priorityFilter}
            onSelect={setPriorityFilter}
          />
          <Dropdown
            options={dueDateOptions}
            selectedId={dueDateFilter}
            onSelect={setDueDateFilter}
          />
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                ID
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                WORK PACKAGE
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                PROJECT
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                STATUS
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                PRIORITY
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                DUE DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <tr
                  key={pkg.id}
                  className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
                >
                  <td className="py-3 px-4 text-xs font-semibold text-[#0284C7]">
                    {pkg.id}
                  </td>
                  <td className="py-3 px-4 text-xs font-medium text-slate-900">
                    {pkg.title}
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600 font-normal">
                    {pkg.project}
                  </td>
                  <td className="py-3 px-4 text-xs">
                    {renderStatusBadge(pkg.status)}
                  </td>
                  <td className="py-3 px-4 text-xs">
                    {renderPriority(pkg.priority)}
                  </td>
                  <td className="py-3 px-4 text-xs">
                    {renderDueDate(pkg)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-xs text-slate-500">
                  No matching work packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
