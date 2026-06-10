import fr from './fr.json';
import es from './es.json';

export type Language = 'fr' | 'es';

const translations: Record<Language, typeof fr> = { fr, es };

export function useTranslations(lang: Language) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const lang = url.pathname.split('/')[1];
  if (lang === 'es') return 'es';
  return 'fr';
}


export function getLanguageFromCookie(cookieHeader: string | null): Language {
  if (!cookieHeader) return 'fr';
  const cookies = cookieHeader.split(';').map(c => c.trim());
  const langCookie = cookies.find(c => c.startsWith('lang='));
  if (langCookie) {
    const value = langCookie.split('=')[1];
    if (value === 'es') return 'es';
  }
  return 'fr';
}