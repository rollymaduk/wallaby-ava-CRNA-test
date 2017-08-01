import { Font } from 'expo';

export default function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
