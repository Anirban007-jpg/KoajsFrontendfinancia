import { get } from 'https';
import { create } from 'zustand';

export interface Bank {
  Bank_name: string;
  Bank_address: string;
  Bank_IFSC: string;
  Bank_Account_type: string;
  Bank_MICR : string;
}

interface BankStore {
  banks: Bank[];
  fetchBanks: () => Promise<void>;
  addBank: (bank: Bank, token: any) => Promise<void>;
  updateBank: (token: any) => Promise<void>;
  deleteBank: (id: number) => Promise<void>;
}





const useBankStore = create<BankStore>((set,get) => ({
  banks: [],

  fetchBanks: async () => {
    const res = await fetch( `${process.env.NEXT_PUBLIC_DOMAIN}/bank/get`);
    const data = await res.json();
    set({ banks: data });
  },

  addBank: async (bank: any, token: any) => {
    const res = await fetch( `${process.env.NEXT_PUBLIC_DOMAIN}/bank/create`, {
      method: 'POST',
      headers: {  Accept: 'application/json', 'Content-Type': 'application/json',Authorization: `Bearer ${token}` },
      body: JSON.stringify(bank),
    });
    const newBank = await res.json();
    get().fetchBanks();
    set((state) => ({ banks: [...state.banks, newBank] }));
  },

  updateBank: async (token) => {
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/bank/update`, {
      method: 'PUT',
      headers: {   Accept: 'application/json','Content-Type': 'application/json' ,Authorization: `Bearer ${token}`},
    });
    get().fetchBanks();
  },

  deleteBank: async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}`, { method: 'DELETE' });
    get().fetchBanks();
  },
}));


export default useBankStore;


