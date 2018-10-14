export const LOCALSTORAGE = (w => {
  if (!w) return;
  const isActive = "localStorage" in w;
  const get = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (err) {
      console.error("Get state error: ", err);
    }
  };

  const set = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Set state error: ", err);
    }
  };

  const getAll = () => {
    try {
      let elements = [];
      let element = {};
      for (const key in localStorage) {
        element = JSON.parse(localStorage.getItem(key));
        // console.log(element);
        if (
          element !== null &&
          (element.hasOwnProperty("title") &&
            element.hasOwnProperty("url") &&
            element.hasOwnProperty("image") &&
            element.hasOwnProperty("description"))
        ) {
          elements.push(element);
        }
      }
      // console.log(elements);
      return elements;
    } catch (err) {
      console.error("GetAll state error: ", err);
    }
  };

  const remove = key => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error("Remove state error: ", err);
    }
  };

  const publicAPI = {
    isActive,
    get,
    set,
    getAll,
    remove
  };

  return publicAPI;
})(window);
console.log(LOCALSTORAGE); // {isActive: true, get: ƒ, set: ƒ}
