(ns cnmipss.util)

(let [transforms {:keys keyword
                  :strs str
                  :syms identity}]
  (defmacro keyed
      "Create a map in which, for each symbol S in vars, (keyword S) is a
  key mapping to the value of S in the current scope. If passed an optional
  :strs or :syms first argument, use strings or symbols as the keys instead."
    ([vars] `(keyed :keys ~vars))
    ([key-type vars]
       (let [transform (comp (partial list `quote)
                             (transforms key-type))]
         (into {} (map (juxt transform identity) vars))))))

(defn json->edn [json-string] (->> json-string (.parse js/JSON) js->clj))
(defn edn->json [ds] (.stringify js/JSON (clj->js ds)))

(defn full-response-format
  [body-format]
  (-> (body-format)
      (update :read (fn [original-handler]
                      (fn [response-obj]
                        {:headers (js->clj (.getResponseHeaders response-obj))
                         :body    (original-handler response-obj)
                         :status  (.getStatus response-obj)})))))
