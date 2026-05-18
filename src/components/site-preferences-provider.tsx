"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { SitePreferencesDialog } from "@/components/site-preferences-dialog";
import { clearSitePreferences } from "@/lib/site-preferences";

type SitePreferencesContextValue = {
  resetPreferences: () => void;
};

const SitePreferencesContext = createContext<
  SitePreferencesContextValue | undefined
>(undefined);

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [dialogKey, setDialogKey] = useState(0);

  const resetPreferences = useCallback(() => {
    clearSitePreferences();
    setDialogKey((current) => current + 1);
  }, []);

  const value = useMemo(
    () => ({
      resetPreferences,
    }),
    [resetPreferences],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      <SitePreferencesDialog key={dialogKey} />
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used within SitePreferencesProvider",
    );
  }

  return context;
}
