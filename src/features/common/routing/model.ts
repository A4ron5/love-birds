import { createEvent, createEffect, createStore, sample } from "effector";

import { history, Location } from "lib/history";

type SearchPush = Array<[string, string]>;
type SearchPop = Array<string>;

const historyPush = createEffect(history.push);
const searchPush = createEvent<SearchPush>();
const searchPop = createEvent<SearchPop>();
const updateLocation = createEvent<Location>();

const $history = createStore<Location>(history.location);
const $pathname = $history.map(({ pathname }) => pathname);
const $search = $history
  .map(({ search = "" }) => search)
  .map((search) => new URLSearchParams(search));

$history.on(updateLocation, (_, location) => location);

history.listen((location) => {
  updateLocation(location);
});

sample({
  source: [$pathname, $search],
  clock: searchPush,
  fn: ([path, search], params) => {
    params.forEach(([name, param]) => search.set(name, param));

    return `${path}?${search.toString()}`;
  },
  target: historyPush
});

sample({
  source: [$pathname, $search],
  clock: searchPop,
  fn: ([path, search], names) => {
    names.forEach((name) => search.delete(name));

    return `${path}?${search.toString()}`;
  },
  target: historyPush
});

export {
  historyPush,
  searchPush,
  searchPop,
  updateLocation,
  $history,
  $search,
  $pathname
};
