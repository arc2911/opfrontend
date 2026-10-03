'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownOption {
  id: string;
  label: string;
  count?: number;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedId,
  onSelect,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.id === selectedId) || options[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-md text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{selectedOption?.label}</span>
        <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50 py-1 focus:outline-none animate-in fade-in-50 zoom-in-95 duration-100">
          <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Switch Workspace
          </div>
          {options.map((option) => {
            const isSelected = option.id === selectedId;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  onSelect(option.id);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors cursor-pointer',
                  isSelected
                    ? 'bg-blue-50/80 text-[#0284C7] font-medium'
                    : 'text-slate-700 hover:bg-slate-50'
                )}
              >
                <span>{option.label}</span>
                {isSelected && <Check className="w-4 h-4 text-[#0284C7]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
