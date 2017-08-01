
import { sceneKeys } from '../constants';

const icons = new Map();
icons.set(sceneKeys.FEEDS, 'calendar');
icons.set(sceneKeys.PEOPLE, 'people');
icons.set(sceneKeys.PAYMENTS, 'card');
icons.set(sceneKeys.ALERTS, 'notifications');
icons.set(sceneKeys.MORE, 'more');

export default function (tabScenes) {
  const tabItems = new Map();
  icons.forEach((v, k) => {
    tabItems.set(k, { view: k, component: tabScenes[k], icon: v });
  });
  return { tabItems, showText: false };
}
