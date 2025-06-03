import {
  KILLED_ITEM,
  RESPAWN_ITEM,
} from './action-types';

export const killedItem = (item) => {
  item.url = item.explodeUrl;
  item.active = false;

  return {
    type: KILLED_ITEM,
    item,
  };
};

export const respawnItem = (item) => {
  const newItem = {...item};
  newItem.url = item.activeUrl;
  newItem.active = true;

  return {
    type: RESPAWN_ITEM,
    newItem,
  };
};
