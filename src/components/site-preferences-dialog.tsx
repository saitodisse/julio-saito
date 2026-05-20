"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale } from "@/components/locale-provider";
import { useTheme } from "@/components/theme-provider";
import {
  hasConfiguredPreferences,
  saveSitePreferences,
  type Locale,
  type ThemeMode,
} from "@/lib/site-preferences";
import { getUi } from "@/resources/i18n/ui";

export function SitePreferencesDialog() {
  const { mounted: themeMounted, setTheme } = useTheme();
  const { locale, mounted: localeMounted, setLocale } = useLocale();
  const [completed, setCompleted] = useState(false);
  const [draftTheme, setDraftTheme] = useState<ThemeMode>("system");
  const [draftLocale, setDraftLocale] = useState<Locale | null>(null);

  const ready = themeMounted && localeMounted;
  const open = ready && !completed && !hasConfiguredPreferences();
  const selectedLocale = draftLocale ?? locale;
  const copy = getUi(selectedLocale).preferences;

  function handleConfirm() {
    saveSitePreferences({ theme: draftTheme, locale: selectedLocale });
    setTheme(draftTheme);
    setLocale(selectedLocale);
    setCompleted(true);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          handleConfirm();
        }
      }}
    >
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label>{copy.themeLabel}</Label>
            <RadioGroup
              value={draftTheme}
              onValueChange={(value) => setDraftTheme(value as ThemeMode)}
              className="gap-2"
            >
              <PreferenceOption
                id="theme-system"
                value="system"
                label={copy.themeSystem}
              />
              <PreferenceOption
                id="theme-light"
                value="light"
                label={copy.themeLight}
              />
              <PreferenceOption
                id="theme-dark"
                value="dark"
                label={copy.themeDark}
              />
            </RadioGroup>
          </div>

          <div className="grid gap-3">
            <Label>{copy.languageLabel}</Label>
            <RadioGroup
              value={selectedLocale}
              onValueChange={(value) => setDraftLocale(value as Locale)}
              className="gap-2"
            >
              <PreferenceOption
                id="locale-pt"
                value="pt"
                label={copy.languagePt}
              />
              <PreferenceOption
                id="locale-en"
                value="en"
                label={copy.languageEn}
              />
            </RadioGroup>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            size="lg"
            className="w-full"
            onClick={handleConfirm}
          >
            {copy.confirm}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PreferenceOption({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-3 py-2.5 has-[:checked]:border-primary has-[:checked]:bg-primary/8"
    >
      <RadioGroupItem id={id} value={value} />
      <span className="text-sm font-medium tracking-[-0.01em]">{label}</span>
    </label>
  );
}
