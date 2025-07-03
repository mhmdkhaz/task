import React from 'react';
import { useLocaliztionStore } from "@/store/useLocaliztionStore";

interface ListItemButtonProps {
    title: string;
    path: string;
    onNavigate?: (path: string) => void
  }

const ListItemButton: React.FC<ListItemButtonProps> = ({title, path, onNavigate}) => {

    const { direction } = useLocaliztionStore();
    const handleClick = () => {
        if (onNavigate) {
            onNavigate(path)
        }
    }
  return (
    <li className={`mb-3 flex ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'} gap-1 group`}>
        <button className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'} items-center gap-1`} onClick={handleClick}>
            <div className="bg-gray-400 transition-colors duration-200 group-hover:bg-[#465FFF] w-3 h-3 rounded-full flex items-center justify-center">
                <span className="text-[12px] leading-[12px] text-white block">+</span>
            </div>
            <span className="text-[12px] text-gray-500 ">{title}</span>
        </button>
    </li>
  );
}

export default ListItemButton;
