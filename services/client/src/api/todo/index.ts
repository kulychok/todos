import get from './get';
import add from './post';
import del from './byId/delete';
import getActive from './active/get';
import getCompleted from './completed/get';
import patch from './byId/patch';
import deleteCompleted from './completed/delete';
import patchToCompleted from './completed/patch';
import patchToActive from './active/patch';

export default {
  get,
  add,
  del,
  getActive,
  getCompleted,
  patch,
  deleteCompleted,
  patchToCompleted,
  patchToActive,
};
