import { useI18nStore } from '../../../shared/model/store/useI18nStore';
import { useThemeStore } from '../../../shared/model/store/useThemeStore';

export default function SettingsForm() {
  const switchLang = useI18nStore();

  const mode = useThemeStore((s) => s.mode);
  const toggle = useThemeStore((s) => s.toggleTheme);
  return (
    <div>
      <h2>Settings</h2>
      <button onClick={() => switchLang.setLanguage(switchLang.language === 'en' ? 'ru' : 'en')}>
        Switch lang
      </button>
      <button onClick={toggle}>Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  );
}
