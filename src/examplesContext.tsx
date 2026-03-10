import React, { createContext, useContext, useMemo, useState } from 'react';
import { examples, type ExampleSite } from './data/examples';

interface ExamplesContextValue {
  items: ExampleSite[];
  setItems: React.Dispatch<React.SetStateAction<ExampleSite[]>>;
  industries: string[];
  funnelTypes: string[];
}

const ExamplesContext = createContext<ExamplesContextValue | undefined>(undefined);

export const ExamplesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ExampleSite[]>(examples);

  const industries = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.industry))).filter(Boolean);
    return ['All', ...unique];
  }, [items]);

  const funnelTypes = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.funnelType))).filter(Boolean);
    return ['All', ...unique];
  }, [items]);

  const value: ExamplesContextValue = {
    items,
    setItems,
    industries,
    funnelTypes,
  };

  return <ExamplesContext.Provider value={value}>{children}</ExamplesContext.Provider>;
};

export const useExamples = (): ExamplesContextValue => {
  const ctx = useContext(ExamplesContext);
  if (!ctx) {
    throw new Error('useExamples must be used within an ExamplesProvider');
  }
  return ctx;
};

