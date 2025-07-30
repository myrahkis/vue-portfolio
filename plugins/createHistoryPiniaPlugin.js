import { reactive } from "vue";
import cloneDeep from "lodash.clonedeep";

export default function createHistoryPiniaPlugin({
  maxHistory = 100,
  filter = () => true,
  ignore = ["docName"],
} = {}) {
  // будет вызываться каждого стора
  return ({ store, pinia }) => {
    if (ignore.includes(store.$id)) return;

    let lastState = cloneDeep(store.$state);

    // методы unso/redo
    if (!pinia._undoRedo) {
      pinia._undoRedo = reactive({ past: [], future: [] });
      pinia._isTimeTravelling = false;

      pinia.undo = () => {
        const entry = pinia._undoRedo.past.pop();
        if (!entry) return false;
        pinia._isTimeTravelling = true;
        entry.store.$patch((s) => Object.assign(s, cloneDeep(entry.prev)));
        pinia._undoRedo.future.push(entry);
        pinia._isTimeTravelling = false;
        return true;
      };

      pinia.redo = () => {
        const entry = pinia._undoRedo.future.pop();
        if (!entry) return false;
        pinia._isTimeTravelling = true;
        entry.store.$patch((s) => Object.assign(s, cloneDeep(entry.next)));
        pinia._undoRedo.past.push(entry);
        pinia._isTimeTravelling = false;
        return true;
      };
    }

    // подписка на изменение конекртного стора
    store.$subscribe(
      (mutation, state) => {
        if (pinia._isTimeTravelling) return;
        if (!filter(mutation.type, store)) return;

        // console.log(
        //   "[history‑plugin] mutation, past before:",
        //   pinia._undoRedo.past.length
        // );

        const prev = cloneDeep(lastState);
        const next = cloneDeep(state);
        pinia._undoRedo.past.push({
          store,
          mutation: mutation.type,
          prev,
          next,
        });
        if (pinia._undoRedo.past.length > maxHistory) {
          pinia._undoRedo.past.shift();
        }
        pinia._undoRedo.future.length = 0;

        lastState = cloneDeep(state);

        // console.log(
        //   "[history‑plugin] pushed history, past after:",
        //   pinia._undoRedo.past.length
        // );
      },
      { detached: true }
    );
  };
}
