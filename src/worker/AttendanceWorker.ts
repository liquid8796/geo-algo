import { expose } from 'threads/worker';
expose({
  bulkCreateWorker(bulkCreate) {
    return bulkCreate;
  },
});
